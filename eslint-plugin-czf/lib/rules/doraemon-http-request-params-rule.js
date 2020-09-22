"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "MRN网络请求里的contentType:'form'，在改造容器化时需要改为:\nheaders: {'content-type': 'application/x-www-form-urlencoded'}",
            category: "Component Rule",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    /**
    例子，这样是错误的
    {
        url: 'v1/finance/confirmStatement',
        method: 'POST',
        contentType: 'form',
        body: {
            stmtId: stmtId,
            businessType: businessType
        }
    }
    应该改成这样
    {
        url: 'v1/finance/confirmStatement',
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: {
            stmtId: stmtId,
            businessType: businessType
        }
    }
    */

    create: function (context) {
        function checkContentType_Form (node) {
            if (node && node.type === 'ObjectExpression' && node.properties && node.properties.length >= 4) {
                const propKeys = [];
                node.properties.map(prop => {
                    if (prop && prop.key && prop.key.name) {
                        propKeys.push(prop.key.name); // 如 url，method，contentType，body等
                    }
                });
                if (propKeys.length >= 4 &&
                    propKeys.indexOf('url') !== -1 &&
                    propKeys.indexOf('method') !== -1 &&
                    propKeys.indexOf('contentType') !== -1 &&
                    propKeys.indexOf('body') !== -1) {

                    const propContentType = node.properties.find(item => {
                        if (item && item.key && item.key.name === 'contentType') {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    const propMethod = node.properties.find(item => {
                        if (item && item.key && item.key.name === 'method') {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    if (propContentType && propMethod) {
                        if (propContentType.value && propContentType.value.value === 'form' &&
                            propMethod.value &&
                            (propMethod.value.value === 'POST' || propMethod.value.value === 'post')) {

                            context.report({
                                node: node,
                                message: "MRN网络请求里的contentType:'form'，在改造容器化时需要改为:\nheaders: {'content-type': 'application/x-www-form-urlencoded'}"
                            });
                        }
                    }
                }
            }
        };
        return {
            "ObjectExpression": checkContentType_Form
        };
    }
};
