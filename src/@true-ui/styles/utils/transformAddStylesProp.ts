import * as ts from "typescript";

export function transformAddStylesProp(content: string): string {
  const sourceFile = ts.createSourceFile(
    "panda-pre-transform.tsx",
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  let transformedContent = content;

  function visit(node: ts.Node) {
    if (
      ts.isJsxAttribute(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "addStyles"
    ) {
      if (node.initializer && ts.isJsxExpression(node.initializer)) {
        const expression = node.initializer.expression;
        if (!expression) return;

        // This function now handles any level of nesting
        function processExpression(expr: ts.Expression): string {
          // Case 1: If it's an array, recursively process each element
          if (ts.isArrayLiteralExpression(expr)) {
            const processedElements = expr.elements.map(element => 
              processExpression(element as ts.Expression)
            );
            return `[${processedElements.join(", ")}]`;
          }
          
          // Case 2: If it's an object literal that's not wrapped, wrap it
          const text = expr.getText(sourceFile);
          if (ts.isObjectLiteralExpression(expr) && !text.startsWith("css.raw(")) {
            return `css.raw(${text})`;
          }

          // Case 3: Everything else remains unchanged
          return text;
        }

        // Process the entire expression, whether it's nested or not
        const newContent = processExpression(expression);

        // Replace the content in the original string
        const start = expression.getStart(sourceFile);
        const end = expression.getEnd();
        transformedContent = 
          transformedContent.slice(0, start) + 
          newContent + 
          transformedContent.slice(end);
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return transformedContent;
}


// 1. Single Object Literal
const test1 = `
  <Button
    addStyles={{ bg: "pink", _hover: { bg: "blue" }}}
    other="props"
  />
`;
// Expected: addStyles={css.raw({ bg: "pink", _hover: { bg: "blue" }})} ✅

// 2. Pre-wrapped Object
const test2 = `
  <Button
    addStyles={css.raw({ bg: "pink", _hover: { bg: "blue" }})}
    other="props"
  />
`;
// Expected: unchanged - already wrapped correctly ✅

// 3. Variable Reference
const test3 = `
  <Button
    addStyles={someVariable}
    other="props"
  />
`;
// Expected: unchanged - not an object literal ✅

// 4. Simple Array with Mixed Types
const test4 = `
  <Button
    addStyles={[{ bg: "pink" }, css.raw({ bg: "blue" }), someVariable]}
    other="props"
  />
`;
// Expected: addStyles={[css.raw({ bg: "pink" }), css.raw({ bg: "blue" }), someVariable]} ✅

// 5. Nested Arrays
const test5 = `
  <Button
    addStyles={[[{ bg: "pink" }, css.raw({ bg: "blue" })], someVariable]}
    other="props"
  />
`;
// Expected: addStyles={[[css.raw({ bg: "pink" }), css.raw({ bg: "blue" })], someVariable]} ✅

// 6. Deep Nesting with Multiple Types
const test6 = `
  <Button
    addStyles={[
      [[{ bg: "pink" }]], 
      [css.raw({ bg: "blue" })], 
      [someVariable, { color: "red" }]
    ]}
    other="props"
  />
`;
// Expected: addStyles={[[[css.raw({ bg: "pink" })]], [css.raw({ bg: "blue" })], [someVariable, css.raw({ color: "red" })]]} ✅

// 7. Complex Nested Object
const test7 = `
  <Button
    addStyles={[{ 
      bg: "pink", 
      _hover: { 
        bg: "blue",
        _focus: {
          outline: "none"
        }
      }
    }]}
    other="props"
  />
`;
// Expected: The entire nested object structure should be wrapped in a single css.raw() ✅

// 8. Function Calls and Mixed Content
const test8 = `
  <Button
    addStyles={[
      getStyles(),
      { bg: "pink" },
      [css.raw({ color: "blue" }), { margin: "10px" }],
      calculateStyles({ theme: 'dark' }),
      [{ padding: "20px" }, [{ border: "1px" }]]
    ]}
    other="props"
  />
`;
// Expected: Function calls remain unchanged, object literals get wrapped ✅

// Helper function to run all tests
function runAllTests() {
  const tests = [test1, test2, test3, test4, test5, test6, test7, test8];

  tests.forEach((test, index) => {
    console.log(`\nTest ${index + 1}:`);
    console.log("Input:", test);
    const result = transformAddStylesProp(test);
    console.log("Output:", result);
    console.log("-".repeat(50));
  });
}
