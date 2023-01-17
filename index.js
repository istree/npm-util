var util = {
    // type check
    isUndefined: isUndefined,
    notUndefined: notUndefined,
    isNull: isNull,
    notNull: notNull,
    isObject: isObject,
    isArray: isArray,
    isString: isString,
    isFunction: isFunction,
    // object
    isHasProperty: isHasProperty,
    isOwnProperty: isOwnProperty,
    // object has property
    hasProperty: hasProperty,
    hasPropertyRun: hasPropertyRun,
    hasPropertyNew: hasPropertyNew,
    hasPropertyNewRun: hasPropertyNewRun,
    // object own property
    ownProperty: ownProperty,
    ownPropertyRun: ownPropertyRun,
    ownPropertyNew: ownPropertyNew,
    ownPropertyNewRun: ownPropertyNewRun,
    // array
    first: first,
    last: last,
    arrayMin: arrayMin,
    arrayMax: arrayMax,
    // function
    applyFunction: applyFunction,
    isFunctionRun: isFunctionRun,
    // control structure
    switch: switchCase,
    switchRun: switchRun,
    forObject: forObject,
    forArray: forArray,
    forDepth: forDepth,
    compareEach: compareEach,
    chain: chain,
    // data conversion
    mustObject: mustObject,
    mustArray: mustArray,
    mergeUnder: mergeUnder,
    mergeOver: mergeOver,
    undefinedPath: undefinedPath,
    // data structs
    linkedHashMap: linkedHashMap,
    // domUtil
    applyAttr : applyAttr,
    applyXY: applyXY,
    applySize: applySize,
    applyRect: applyRect,
    applyText: applyText,
    bbox : bbox,
    applyEventMap: applyEventMap,
    // svg
    translateString: translateString,
    // test
    test: test,
    testList: testList
}

// type check
/**
 * obj가 undefined일 경우 참이다.
 */
function isUndefined(obj) {
    return (typeof obj === 'undefined');
}

/**
 * obj가 undefined가 아닐 경우 참이다.
 */
function notUndefined(obj) {
    return (typeof obj !== 'undefined');
}

/**
 * obj가 null일 경우 참이다.
 */
function isNull(obj) {
    //return (typeof obj === 'null');
    return obj === null;
}

/**
 * obj가 null이 아닐 경우 참이다.
 */
function notNull(obj) {
    //return (typeof obj !== 'null');
    return obj !== null;
}

/**
 * target이 객체일 경우 참이다.
 */
function isObject(target) {
    return (typeof target === 'object');
}

/**
 * target이 배열일 경우 참이다.
 */
function isArray(target) {
    return Array.isArray(target);
}

/**
 * target이 문자열일 경우 참이다.
 */
function isString(target) {
    return (typeof target === 'string');
}

/**
 * target이 함수일 경우 참이다.
 */
function isFunction(target) {
    return (typeof target === 'function');
}

// object
/**
 * obj에 key 체인이 있는지 여부를 확인한다.
 */
function isHasProperty(obj, key) {
    return isObject(obj) ? key in obj: false;
}

/**
 * obj의 key 소유 여부를 확인한다.
 */
function isOwnProperty(obj, key) {
    return obj.hasOwnProperty(key);
}

// object has property
/**
 * obj에 key 체인이 있으면 해당 값을 반환하고, 없으면 value를 반환한다
 */
function hasProperty(obj, key, value) {
    return isHasProperty(obj,key) ? obj[key] : value;
}

/**
 * obj에 key 체인이 있으면 해당 값을 반환하고, 없으면 value를 실행한 결과를 반환한다.
 */
function hasPropertyRun(obj, key, value) {
    return isHasProperty(obj,key) ? obj[key] : value();
}

/**
 * obj에 key 체인이 있으면 해당 값을 반환하고, 없으면 obj의 key를 value로 초기화 하여 반환한다.
 */
function hasPropertyNew(obj, key, value) {
    return isHasProperty(obj,key) ? obj[key] : obj[key] = value;
}

/**
 * obj에 key 체인이 있으면 해당 값을 반환하고, 없으면 obj의 key를 value를 실행한 결과로 초기화 하여 반환한다.
 */
function hasPropertyNewRun(obj, key, value) {
    return isHasProperty(obj,key) ? obj[key] : obj[key] = value();
}

// object own property
/**
 * obj가 key를 소유한 경우 해당 값을 반환하고, 없으면 value를 반환한다.
 */
function ownProperty(obj, key, value) {
    return isOwnProperty(obj,key) ? obj[key] : value;
}

/**
 * obj가 key를 소유하고 key의 값이 유효하다면, key의 값을 매개변수로 act를 실행한다.
 */
function ownPropertyRun(obj, key, value) {
    return isOwnProperty(obj,key) ? obj[key] : value();
}

/**
 * obj가 key를 소유한 경우 해당 값을 반환하고, 없으면 obj의 key를 value로 초기화 하여 반환한다.
 */
function ownPropertyNew(obj, key, value) {
    return isOwnProperty(obj,key) ? obj[key] : obj[key] = value;
}

/**
 * obj에 key 체인이 있으면 해당 값을 반환하고, 없으면 obj의 key를 value를 실행한 결과로 초기화 하여 반환한다.
 */
function ownPropertyNewRun(obj, key, value) {
    return isOwnProperty(obj,key) ? obj[key] : obj[key] = value();
}

// array
/**
 * 배열의 첫번째 객체를 반환한다.
 */
function first(array) {
    return array[0];
}

/**
 * 배열의 마지막 요소를 반환한다.
 */
function last(array) {
    return array[array.length - 1];
}

/**
 * 배열의 최소값을 반환한다.
 */
function arrayMin(array) {
    return Math.min.apply(null, array);
}

/**
 * 배열의 최대값을 반환한다.
 */
function arrayMax(array) {
    return Math.max.apply(null, array);
}

// function
/**
 * obj가 함수일 경우 매개변수를 적용해서 호출한다.
 */
function applyFunction(obj, args, thisArg) {
    if (isFunction(obj)) {
        return obj.apply(thisArg, args);
    } else {
        return obj;
    }
}

function isFunctionRun(obj) {
    return isFunction(obj) ? obj() : obj;
}

// control
/**
 * switch case 와 같은 동작을 수행한다.
 */
function switchCase(expression, statements, someDefault) {
    return ownProperty(statements, expression, someDefault);
}

/**
 * statements에 expression이 있다면 해당 키를 실행한다.
 */
function switchRun(expression, statements, someDefault) {
    return isOwnProperty(statements,expression)
    ? isFunctionRun(statements[expression])
    : isFunctionRun(someDefault);
}

/**
 * obj를 순회하며 act를 호출한다.
 */
function forObject(obj, act) {
    for(var key in obj) {
        act(obj[key], key);
    }
}

/**
 * arr을 순회하며 act를 호출한다.
 */
function forArray(arr, act) {
    arr.forEach(act);
}

/**
 * obj 또는 arr을 순회하며 act를 호출한다.
 */
function forAny(any, act) {
    if (isArray(any)) {
        forArray(any, act);
    } else if (isObject(any)) {
        forObject(any, act);
    }
}

/**
 * 중첩된 배열 요소의 깊이만큼 고차함수 실행
 */
function forDepth(target, actsGroup, depth) {
    var parent = target; //Object.create(target);
    var depth = isUndefined(depth) ? 0: depth;
    var acts = actsGroup[depth];//.shift();
    var traverse = (item,index) => {
        if ( isArray(acts) ) {
            acts.forEach( act => act(item, index, parent, depth) )
        } else if ( isFunction(acts) ) {
            acts(item, index, parent, depth);
        }

        if ( notUndefined(acts) ) {
            forDepth(item, actsGroup, depth+1);
        }
    }

    forAny(parent, traverse);
}

/**
 * 배열 요소에 대해서 값 함수의 결과를 비교하는 함수 실행
 * itemList를 순회하며 item을 매개변수로 valueFunction을 호출한 결과를 얻고. 이를 매개변수로 하여 compareFunction을 호출한다.
 */
function compareEach(itemList, valueFunction, compareFunction) {
    var result = 0;
    itemList.forEach( (item) =>
    result = compareFunction(valueFunction(item), result)
    );
    return result;
}

/**
 * acts 배열을 순서대로 실행하며 각 act의 결과를 result에 매핑한다.
 */
function chain(result, acts) {
    acts.forEach( act => {
        if ( isObject(act) ) {
            var key = Object.keys(act)[0];
            var value = Object.values(act)[0];
            result[key] = value(result);
        } else if ( isFunction(act) ) {
            result = act(result);
        }
    });

    return result;
}

// data conversion
/**
 * 반드시 객체를 반환한다
 */
function mustObject(any) {
    return isUndefined(any) ? {} : any;
}

/**
 * 반드시 배열을 반환한다.
 */
function mustArray(any) {
    return isUndefined(any) ? [] : toArray(any);
}

/**
 * 객체를 배열로 변환
 * obj가 배열이 아닐 경우 배열로 만들어 반환한다.
 */
function toArray(obj) {
    return isArray(obj) ? obj : [obj];
}

/**
 * 덮어쓰지 않는 병합
 * dest에 target을 병합한다. dest에 없지만 target에 있는 속성만 dest에 새로 생성한다.
 */
function mergeUnder(dest, target) {
    if (isUndefined(dest)) { return; }

    forObject( target, (value, key) => {
        hasPropertyNew(dest, key,  value);
    });
}

/**
 * 덮어쓰면서 병합
 * dest에 target을 병합한다. dest에 target의 값을 덮어쓴다.
 */
function mergeOver(dest, target) {
    if (isUndefined(dest)) { return; }

    forObject( target, (value, key) => {
        dest[key] = value;
    });
}

/**
 * arguments의 첫번째 객체에 대해 arguments의 두번째 매개변수부터 끝까지 자식 객체로 채운다.
 */
function undefinedPath() {
    var count = arguments.length;
    var current = arguments[0];
    for( var i = 0; i < count; i++ ) {
        if (isUndefined(current)) {
            return arguments[count-1]; // return last
        }
        if (isLast(i+1,count)) { // next is last
            return current;
        } else {
            current = current[arguments[i+1]];
        }
    }
}

/**
 * 마지막 항목 검사
 * index가 count와 같거나 넘어서는 경우 참이다.
 */
function isLast(index, count) {
    return count <= (index+1);
}

// data structs
/**
 * 링크드 해시맵
 * 순서를 array로 유지하는 map 객체를 만든다.
 * @returns {{array: [], isEmpty: (function(): boolean), map: {}, push: push}}
 */
function linkedHashMap() {
    var map = {};
    var array = [];

    function push(value) {
        if (!map.hasOwnProperty(value)) {
            map[value] = value;
            array.push(value);
        }
    }

    function isEmpty() {
        return (array.length < 1);
    }

    return {
        push: push,
        isEmpty: isEmpty,
        map: map,
        array: array
    }
}

// dom util
/**
 * element에 props의 key에 해당하는 attribute에 value를 적용한다.
 */
function applyAttr(element, props) {
    if ( !isObject(props) || isNull(props) ) {
        return element;
    }

    forObject(props, function(value, key) {
        element.setAttribute(key, value);
    });
    return element;
}

/**
 * element에 x, y 에 해당하는 attribute에 값을 적용한다.
 */
function applyXY(elm, x, y) {
    elm.setAttribute("x", x);
    elm.setAttribute("y", y);
}

/**
 * element에 width, height 에 해당하는 attribute에 값을 적용한다.
 */
function applySize(elm, width, height) {
    elm.setAttribute("width", width);
    elm.setAttribute("height", height);
}

/**
 * element에 x, y, width, height 에 해당하는 attribute에 값을 적용한다.
 */
function applyRect(elm, x, y, width, height) {
    applyXY(elm, x, y);
    applySize(elm, width, height);
}

/**
 * element의 textContent에 값을 적용한다.
 */
function applyText(elm, contents) {
    elm.textContent = contents;
}

/**
 * textContent가 현재 dom에서 차지하는 크기인 bbox를 구한다.
 */
function bbox(dom, textRenderNode, textContent, textStyle) {
    var textNode = dom.text(textContent, 0, 0, textStyle);
    textRenderNode.appendChild(textNode);
    var textBBox = getBBox(textNode);
    textRenderNode.removeChild(textNode);
    return textBBox;
}

/**
 * node의 BBox를 가져온다.
 */
function getBBox(node) {
    if ( notUndefined(node.getBBox) ) {
        return node.getBBox();
    } else {
        return {
            x: 0, y:0, width: 0, height: 0
        }
    }
}

/**
 * 노드에 이벤트 맵 적용
 * domNode에 eventMap의 key에 해당하는 act들을 호출하는 함수를 등록한다.
 */
function applyEventMap(domNode, eventMap) {
    forObject(eventMap, (actList, key) =>  {
        domNode.addEventListener(key, (e) => {
            actList.forEach((act) => act(e))
        });
    });
}

// svg
/**
 * x y 값을 받아서 svg의 translate 문자열로 반환한다.
 */
function translateString(translateX, translateY) {
    return "translate(" + translateX + "," + translateY + ")";
}

// test
function test(act) {
    const colorRed = () => '\x1b[91m';
    const colorBlue = () => '\x1b[92m';
    const colorWhite = () => '\x1b[97m';
    const assertColor = (value) => value ? colorBlue() : colorRed();

    const result = act();
    console.log( act.name + ': ' + assertColor(result) + result + colorWhite());
    return result;
}

function testList() {
    return !!slice(arguments, 0).reduce( (acc,arg) => acc & test(arg), true);
}

function slice(args, index) {
    return Array.prototype.slice.call(args, index);
}

module.exports = util;
