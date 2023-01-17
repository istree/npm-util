const util = require("../index.js");
const testList = util.testList;

function testTypeCheck() {
    console.log("--testTypeCheck");
    return testList(
        isUndefined,
        notUndefined,
        isNull,
        notNull,
        isObject,
        isArray,
        isString,
        isFunction
    );
}

function isUndefined() {
    return util.isUndefined( undefined );
}

function notUndefined() {
    return util.notUndefined({});
}

function isNull() {
    return util.isNull(null);
}

function notNull() {
    return util.notNull({});
}

function isObject() {
    return util.isObject({});
}

function isArray() {
    return util.isArray([]);
}

function isString() {
    return util.isString('isString');
}

function isFunction() {
    return util.isFunction(() => {} );
}

module.exports = testTypeCheck;