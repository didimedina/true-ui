// still work in progress. the goal is to create a function converts the types into docs per component.

import * as ts from "typescript";

export function printTypes<T>() {
  // Get the current file path
  const fileName = "temp.ts";
  const sourceText = `type T = ${T}`; // This will contain the actual type

  const sourceFile = ts.createSourceFile(
    fileName,
    sourceText,
    ts.ScriptTarget.Latest,
    true
  );

  const program = ts.createProgram([fileName], {
    noResolve: true,
    target: ts.ScriptTarget.Latest,
  });

  const typeChecker = program.getTypeChecker();
  const type = typeChecker.getTypeAtLocation(sourceFile);

  console.log(typeChecker.typeToString(type));
}

// Usage:
// type ButtonStyleVariants = React.ComponentProps<typeof Button>["styleVariant"];
// printType<ButtonStyleVariants>();
