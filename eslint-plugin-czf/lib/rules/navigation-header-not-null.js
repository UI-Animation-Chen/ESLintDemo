"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "navigationOptions中的header不能返回null，可以返回一个空组件<View />",
            category: "Component Rule",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        let headerNotNull = (node) => {
            if (node.key.name === 'navigationOptions' && node.value.type === 'ArrowFunctionExpression') {
                if (node.value.body.type === 'ObjectExpression') {
                    let headerIndex = node.value.body.properties.findIndex((item) => item.key.name === 'header');
                    if (headerIndex === -1) {
                        context.report({
                            node: node,
                            message: 'navigationOptions中需要有header属性，且值不能为null'
                        });
                    } else {
                        if (node.value.body.properties[headerIndex].value.value === null) {
                            context.report({
                                node: node,
                                message: 'navigationOptions中的header不能返回null，可以返回一个空组件<View />'
                            });
                        }
                    }
                }
            }
        };

        return {
            "Property": headerNotNull
        };

    }
};

