const util = require("./index.js");
const testTypeCheck = require("./test/testTypeCheck.js");
const testObject = require("./test/testObject.js");
const testArray = require("./test/testArray.js");
const testControlStructure = require("./test/testControlStructure.js");

function test() {
    testTypeCheck();
    testObject();
    testArray();
    testControlStructure();
}

test();