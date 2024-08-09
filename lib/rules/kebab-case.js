/**
 * @fileoverview kebab case your file name and directory name.
 * @author zengxiaoluan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

let { url, parseFilename } = require("../utils");

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: `problem`, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "kebab case your file name and directory name.",
      recommended: false,
      url: url(module), // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      msg: "Filename '{{name}}' does not match the naming convention.",
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

    let defaultRegexp = /[A-Z]/g,
      conventionRegexp = defaultRegexp;

    return {
      Program: function (node) {
        let filename = context.filename;
        let physicalFilename = context.physicalFilename;

        let parsed = parseFilename(physicalFilename);

        let matchesRegex = conventionRegexp.test(parsed.base);

        if (matchesRegex) {
          context.report({
            messageId: "msg",
            data: { name: filename },
            node,
          });
        }
      },
    };
  },
};
