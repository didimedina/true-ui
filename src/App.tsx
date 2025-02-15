import { Alert } from "@true-ui/components/alert";
import { Button } from "@true-ui/components/button";

import { createStyles, mergeStyles } from "@true-ui/styles";
import { transformAddStylesProp } from "@true-ui/styles/utils";
const divStyles = createStyles({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    w: "100vw",
    h: "100vh",
    gap: "8px",
  },
}).raw();

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

function App() {
  runAllTests();
  return (
    <>
      <div className={mergeStyles(divStyles, { bg: "base.1" })}>
        <Alert.Root>
          <Alert.Icon></Alert.Icon>
          <Alert.Content>
            <Alert.Title>Browser Update available</Alert.Title>
            <Alert.Description>
              For the best experience, please update your browser.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
        <Button
          styleVariant={{
            size: "base",
            weight: "inline",
            color: "red",
          }}
        >
          Submit for Review
        </Button>
      </div>
    </>
  );
}

export default App;
