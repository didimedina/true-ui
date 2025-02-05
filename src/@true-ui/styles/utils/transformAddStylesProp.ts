import ts from "typescript";

export function transformAddStylesProp(content: string): string {
  // 1. Create a virtual file from the content
  const sourceFile = ts.createSourceFile(
    "panda-pre-transform.tsx",
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  // Create mutable copy
  let transformedContent = content;

  function visit(node: ts.Node) {
    // 2. Find mergeStyles JSX attributes
    if (
      ts.isJsxAttribute(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "addStyles"
    ) {
      if (node.initializer && ts.isJsxExpression(node.initializer)) {
        const expression = node.initializer.expression;

        if (expression) {
          //   console.log(
          //     "Original mergeStyles content:",
          //     expression.getText(sourceFile)
          //   );
          // 3. Create array to hold our processed arguments
          const args: string[] = [];

          // 4. Function to traverse comma-separated expressions
          function collectArgs(expr: ts.Expression) {
            if (
              ts.isBinaryExpression(expr) &&
              expr.operatorToken.kind === ts.SyntaxKind.CommaToken
            ) {
              // If left side has more commas, recurse
              if (ts.isBinaryExpression(expr.left)) {
                collectArgs(expr.left);
              } else {
                // Process single left argument
                processArg(expr.left);
              }
              // Process right argument
              processArg(expr.right);
            } else {
              // Handle single argument case
              processArg(expr);
            }
          }

          // 5. Function to process each individual argument
          function processArg(expr: ts.Expression) {
            const arg = expr.getText(sourceFile);
            // If it's an object literal and not already wrapped
            if (
              ts.isObjectLiteralExpression(expr) &&
              !arg.startsWith("css.raw(")
            ) {
              args.push(`css.raw(${arg})`);
            } else {
              args.push(arg);
            }
          }

          // 6. Start processing
          collectArgs(expression);
          // console.log("Transformed args:", args);

          // 7. Join args back together
          const start = node.initializer.expression!.getStart(sourceFile);
          const end = node.initializer.expression!.getEnd();
          const newArgs = args.join(", ");
          transformedContent =
            transformedContent.slice(0, start) +
            newArgs +
            transformedContent.slice(end);
        }
        // console.log("Final transformed content:", transformedContent);
      }
    }
    // 8. Continue traversing the AST
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return transformedContent;
}

// const testContent = `
//   <Button
//     addStyles={[{ bg: "pink", _hover: { bg: "blue" }}, css.raw({ bg: "blue"})]}
//     other="props"
//   />
// `;

// transformAddStylesProp(testContent);
