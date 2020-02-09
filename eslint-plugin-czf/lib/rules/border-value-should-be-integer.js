"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "建议borderWidth/borderRadius等相关属性都使用整数、或百分比",
            category: "Component Rule",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        let borderVauleCheck = (node) => {
            if (node.name.name === 'style') {
                node.value.expression.properties.map((item) => {
                    if (item.key.name.indexOf('border') !== -1) {
                        if (item.key.name.indexOf('Radius') !== -1 || item.key.name.indexOf('Width') !== -1) {
                            if (!Number.isInteger(item.value.value)) {
                                context.report({
                                    node: node,
                                    message: 'borderWidth/borderRadius等属性不要使用小数，使用整数'
                                });
                            }
                        }
                    }
                });
            }
        };

        return {
            "JSXAttribute": borderVauleCheck
        };

    }
};

