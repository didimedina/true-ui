// First, let's make a type to capture parameter types
type InferParameters<T> = T extends (...args: [infer P]) => any ? P : never;

// Now let's capture the function type itself
type InferFunctionType<T> = T extends (config: infer C) => any ? C : never;

function someFunction(config: any) {
    return config;
}

const source = someFunction({
    a: {
        a1: {},
        a2: {}
    }
});

// Use typeof someFunction instead of typeof source
type SourceStructure = InferFunctionType<typeof someFunction>;

const derived = someFunction({
    a: {
        // This will now show errors as expected
        // a1: {},  // Error: missing property
        // a2: {}   // Error: missing property
    }
} satisfies SourceStructure);