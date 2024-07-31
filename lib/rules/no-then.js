/**
 * @fileoverview No then with promise
 * @author zengxiaoluan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: `problem`, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "No then with promise",
      recommended: false,
      url: require("../utils").url(module), // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      "no-then": "Prefer async/await to Promise.then()",
      "no-promise-catch": "Prefer async/await to Promise.catch()",
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
      MemberExpression(node) {
        if (node.property && node.property.name === "then") {
          context.report({
            node: node.property,
            messageId: "no-then",
          });
        } else if (node.property && node.property.name === "catch") {
          context.report({
            node: node.property,
            messageId: "no-promise-catch",
          });
        }
      },
    };
  },
};
