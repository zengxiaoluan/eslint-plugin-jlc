/**
 * @fileoverview Always camal case every thing
 * @author zengxiaoluan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Always camel case every thing",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      Identifier: "Identifier can not contains _",
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
      Identifier(node) {
        if (node.name.includes("_")) {
          context.report({
            messageId: "Identifier",
            loc: node.loc,
          });
        }
      },
    };
  },
};
