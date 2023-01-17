const util = require("../index.js");
const testList = util.testList;

function testControlStructure() {
    console.log("--testControlStructure");
    return testList(
        applyFunction1,
        applyFunction2,
        forDepth,
        chain1,
        chain2,
    );
}

function applyFunction1() {
    var func = (a,b) => {
        return a+b;
    }
    var result = util.applyFunction(func, [10,20] );
    return (result == 30);
}

function applyFunction2() {
    var func = 30
    var result = util.applyFunction(func);
    return (result == 30);
}

function forDepth() {
    var target = {
        a: {
            aa: "value of aa",
            ab: "value of ab"
        },
        b: [
            "value of b1",
            "value of b2"
        ]
    }
    util.forDepth(target, [
        (item, key, parent, depth) => { console.log("act1,"+"depth"+depth+"("+key+"="+item+")") },
        (item, key, parent, depth) => { console.log("act2,"+"depth"+depth+"("+key+"="+item+")") },
    ]);

    return true;
}

function chain1() {
    var result = {};
    util.chain( result, [
        { a: () => 10 },
        { b: (r) => r.a + 20 },
        { c: (r) => r.a + r.b }
    ]);
    return (result.c == 40);
}

function chain2() {
    var result = util.chain( {}, [
        { a: () => 10 },
        { b: (r) => r.a + 20 },
        (r) => r.a + r.b
    ]);
    return (result == 40);
}

module.exports = testControlStructure;
