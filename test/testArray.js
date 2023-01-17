const util = require("../index.js");
const testList = util.testList;

function testArray() {
    console.log("--testArray");
    return testList(
        first,
        last,
        arrayMin,
        arrayMax
    );
}

function first() {
    return util.first([5,6,7,8,9] ) == 5;
}

function last() {
    return util.last([5,6,7,8,9] ) == 9;
}

function arrayMin() {
    return util.arrayMin([6,7,5,9,8] ) == 5;
}

function arrayMax() {
    return util.arrayMax([6,7,5,9,8] ) == 9;
}

module.exports = testArray;