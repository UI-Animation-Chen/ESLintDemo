/**
 * @fileoverview eslint plugin czf
 * @author czf
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

/**
 * 另一种导出方式，使用方: "extends": ["plugin:czf/recommended"]
module.exports = {
    rules: requireIndex(__dirname + '/rules'), // 导出所有规则
    configs: {
        recommended: {
            plugins: ['czf'],
            rules: {
                'czf/doraemon-http-request-params-rule': 2
            }
        }
    }
};
 */

