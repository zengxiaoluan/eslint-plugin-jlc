/**
 * @fileoverview the constraints of import
 * @author zeng
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "The constraints of import",
      recommended: true,
      url: require("../utils").url(module), // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        type: "object",
        properties: {
          modulePrefix: {
            type: "string",
            default: "@app/modules"
          },
          maxDepth: {
            type: "integer",
            minimum: 1,
            default: 3
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      "import-constraint":
        "You should explicitly export an api in the module's index.ts file with mind.",
    }, // Add messageId and message
  },

  create(context) {
    const options = context.options[0] || {};
    const modulePrefix = options.modulePrefix || "@app/modules";
    const maxDepth = options.maxDepth || 3;

    return {
      ImportDeclaration(node) {
        const value = node.source.value;
        if (value.startsWith(modulePrefix) && value.split("/").length !== maxDepth) {
          context.report({
            node,
            messageId: "import-constraint",
          });
        }
      },
    };
  },
};
