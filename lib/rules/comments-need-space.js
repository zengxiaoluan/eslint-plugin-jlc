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
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Comments need space",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "whitespace", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      needSpace: "Comments need space",
      spaceWithEnZh: "Need space between english and chinese",
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
      Program(node) {
        for (const comment of node.comments || []) {
          let value = comment.value;

          if (comment.type === "Line" && !value.startsWith(" ")) {
            context.report({
              loc: comment.loc,
              messageId: "needSpace",
              fix(fixer) {
                return fixer.replaceText(comment, `//${" "}${value}`);
              },
            });
          }

          let matches = value.match(/(\w[^\w\s'"])/g) || [];

          for (const item of matches) {
            let maxAsciiCode = 128;
            if (item.length === 2 && item.charCodeAt(1) > maxAsciiCode) {
              context.report({
                loc: comment.loc,
                messageId: "spaceWithEnZh",
                fix(fixer) {
                  const newComment = comment.value.replace(
                    /(\w)([^\w\s'"])/g,
                    "$1 $2"
                  );
                  return fixer.replaceText(
                    comment,
                    comment.type === "Line"
                      ? `//${newComment}`
                      : `/*${newComment}*/`
                  );
                },
              });
            }
          }

          let matches2 = value.match(/([^\w\s'"]\w)/g) || []; // 中文English 的情况

          for (const item of matches2) {
            let maxAsciiCode = 128;
            if (item.length === 2 && item.charCodeAt(0) > maxAsciiCode) {
              context.report({
                loc: comment.loc,
                messageId: "spaceWithEnZh",
                fix(fixer) {
                  const newComment = comment.value.replace(
                    /([^\w\s'"])(\w)/g,
                    "$1 $2"
                  );
                  return fixer.replaceText(
                    comment,
                    comment.type === "Line"
                      ? `//${newComment}`
                      : `/*${newComment}*/`
                  );
                },
              });
            }
          }
        }
      },
    };
  },
};
