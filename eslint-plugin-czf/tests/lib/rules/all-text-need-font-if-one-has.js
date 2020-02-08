/**
 * @fileoverview all Text need fontStyle if there is one has
 * @author czf
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/all-text-need-font-if-one-has"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("all-text-need-font-if-one-has", rule, {

    valid: [
        {
            code: "<Text style={{fontStyle:'normal'}}>hello</Text><Text style={{fontStyle: 'normal'}}>world</Text>"
        }
    ],

    invalid: [
        {
            code: "<Text style={{fontStyle:'normal'}}>hello</Text><Text style={{color: '#fff'}}>world</Text>",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
