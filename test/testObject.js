const util = require("../index.js");
const testList = util.testList;

function testObject() {
    console.log("--testObject");
    return testList(
        // object
        isHasProperty,
        isOwnProperty,
        // object has property
        hasProperty,
        hasPropertyRun,
        hasPropertyNew,
        hasPropertyNewRun,
        // object own property
        ownProperty,
        ownPropertyRun,
        ownPropertyNew,
        ownPropertyNewRun
    );
}

// object
function newProp(){
    function testProto() {}
    testProto.prototype.a = 1;
    let testObj = new testProto;
    testObj.b = 2
    return testObj;
}

function isHasProperty() {
    let obj = newProp();
    return util.isHasProperty( obj, 'a');
}

function isOwnProperty() {
    let obj = newProp();
    return util.isOwnProperty( obj, 'b');
}

// object has property
function hasProperty() {
    let obj = newProp();
    let a = util.hasProperty( obj, 'a', 2);
    let b = util.hasProperty( obj, 'b', 2);
    return !!(
        (a == 1) & (b == 2)
    );
}

function hasPropertyRun() {
    let obj = newProp();
    let a = util.hasPropertyRun( obj, 'a', () => 2);
    let b = util.hasPropertyRun( obj, 'b', () => 2);
    return !!(
        (a == 1) & (b == 2)
    );
}

function hasPropertyNew() {
    let obj = newProp();
    let a = util.hasPropertyNew( obj, 'a', 2);
    let b = util.hasPropertyNew( obj, 'b', 2);
    return !!(
        (a == 1) & (b == 2)
    );
}

function hasPropertyNewRun() {
    let obj = newProp();
    let a = util.hasPropertyNewRun( obj, 'a', () => 2);
    let b = util.hasPropertyNewRun( obj, 'b', () => 2);
    return !!(
        (a == 1) & (b == 2)
    );
}

// object own property
function ownProperty() {
    let obj = newProp();
    let a = util.ownProperty( obj, 'a', 1);
    let b = util.ownProperty( obj, 'b', 2);
    return !!(
        (a == 1) & (b == 2)
    );
}

function ownPropertyRun() {
    let obj = newProp();
    let a = util.ownPropertyRun( obj, 'a', () => 1);
    let b = util.ownPropertyRun( obj, 'b', () => 2);
    return !!(
        (a == 1) & (b == 2)
    );
}

function ownPropertyNew() {
    let obj = newProp();
    let a = util.ownPropertyNew( obj, 'a', 1);
    let b = util.ownPropertyNew( obj, 'b', 2);
    return !!(
        (a == 1) & (b == 2)
    );
}

function ownPropertyNewRun() {
    let obj = newProp();
    let a = util.ownPropertyNewRun( obj, 'a', () => 1);
    let b = util.ownPropertyNewRun( obj, 'b', () => 2);
    return !!(
        (a == 1) & (b == 2)
    );
}

module.exports = testObject;