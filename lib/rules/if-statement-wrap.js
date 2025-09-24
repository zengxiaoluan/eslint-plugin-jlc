/**
 * @fileoverview If statement with wrap
 * @author 
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
      description: "If statement with wrap",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      newLineRequired: "There should be a newline between consecutive if statements.",
      
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
      IfStatement(node) {
        const sourceCode = context.sourceCode
        // 获取当前 if 语句结束行的行号
        const previousTokenEndLine = node.loc.end.line;

        // 获取当前 if 语句后的第一个 token
        const nextToken = sourceCode.getTokenAfter(node);

        // 如果下一个 token 存在且是 'if' 关键字
        if (nextToken && nextToken.value === 'if') {
        
          // 获取下一个 if 语句开始行的行号
          const nextTokenStartLine = nextToken.loc.start.line;
          
          if(nextTokenStartLine - previousTokenEndLine  < 2){
            if(nextTokenStartLine - previousTokenEndLine===0){
              context.report({node,messageId: 'newLineRequired',});
            }
            
          }
        }
    },
    };
  },
};
