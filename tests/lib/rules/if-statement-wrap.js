/**
 * @fileoverview If statement with wrap
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/if-statement-wrap"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("if-statement-wrap", rule, {
  valid: [
    `if(true){1}
    
     if(true){2}`,
    `if(true){1}
   
     console.log(1)`,
    `if(true){1}
   
     if(false){2}`,
    `if(true){

      if(true){}
    
      if(true){}
    }`

  ],

  invalid: [
    {
      code: 'if(true){1}\nif(true){2}',
      errors: [{ messageId: 'newLineRequired' }],
    },
  ],
});
