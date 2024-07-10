/**
 * @fileoverview comments need space
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
      description: "comments need space",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      needSpace: "comments need space",
    }, // Add messageId and message
  },

  create(context) {
    // variables should be defined here

    console.log(context);

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      Program(node) {
        for (const comment of node.comments || []) {
          if (comment.type === "Line" && !comment.value.startsWith(" ")) {
            context.report({
              loc: comment.loc,
              messageId: "needSpace",
            });
          }
        }
      },
    };
  },
};
