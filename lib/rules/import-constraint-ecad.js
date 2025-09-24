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
    schema: [], // Add a schema if the rule has options
    messages: {
      "import-constraint":
        "You should explicitly export an api in the module's index.ts file with mind.",
    }, // Add messageId and message
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      ImportDeclaration(node) {
        let value = node.source.value;
        if (value.startsWith("@app/modules") && value.split("/").length !== 3) {
          context.report({
            node,
            messageId: "import-constraint",
          });
        }
      },
    };
  },
};
