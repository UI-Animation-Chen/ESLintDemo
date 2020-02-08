/**
 * @fileoverview all Text need fontStyle if there is one has
 * @author czf
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "all Text need fontStyle if there is one has",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        let isTextStyleDefinedFont = false;

        // ast从上向下第一次遍历
        function up2downCheck (node) {
            if (isTextStyleDefinedFont) {
                return;
            }
            if (node.name === 'fontStyle') {
                isTextStyleDefinedFont = true;
            }
        };

        // ast从下向上第二次遍历
        function down2upCheck (node) {
            if (isTextStyleDefinedFont) {
                if (node.name.name === 'Text') {
                    let styleIndex = node.attributes.findIndex((item) => item.name.name === 'style');
                    if (styleIndex !== -1) {
                        let textStyle = node.attributes[styleIndex];
                        let fontIndex = textStyle.value.expression.properties.findIndex(
                            (item) => item.key.name === 'fontStyle');
                        if (fontIndex === -1) {
                            context.report({
                                node: node,
                                message: '如果有一个Text设置了字体，则要求组件内的所有Text均设置字体'
                            });
                        }
                    }
                }
            }
        };

        return {
            "Identifier": up2downCheck,
            "JSXOpeningElement:exit": down2upCheck
        };
    }
};
