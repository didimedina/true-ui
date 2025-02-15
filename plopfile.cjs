const path = require("path");
const fs = require("fs");

module.exports = function (plop) {
  plop.setHelper("lowercase", function (str) {
    return str.toLowerCase();
  });

  plop.setGenerator("component-part", {
    description: "Add a new component part to an existing file",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of your component part?",
        validate: (value) => {
          if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
            return "Component name must start with a capital letter and contain only letters";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "path",
        message:
          "Where should this component be added? (provide full path to existing file)",
        validate: (value) => {
          if (!value) {
            return "Path is required";
          }

          const fullPath = path.resolve(process.cwd(), value);
          if (!fs.existsSync(fullPath)) {
            return "File does not exist at specified path";
          }

          return true;
        },
      },
    ],
    actions: [
      {
        type: "append",
        path: "{{path}}",
        templateFile:
          "./src/@true-ui/components/_generator/templates/component-part.tsx.hbs",
        separator: "\n\n", // Ensures spacing between existing content and new content
      },
    ],
  });

  //   plop.setGenerator("test", {
  //     description: "test generator",
  //     prompts: [],
  //     actions: [],
  //   });
};
