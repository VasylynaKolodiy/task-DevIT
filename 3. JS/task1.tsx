// 1.Напишіть функцію deepEqual для перевірки двох об'єктів на ідентичність.
//
// Приклад:
// deepEqual({name: 'test'}, {name: 'test'}) // output true
// deepEqual({name: 'test'}, {name: 'test1'}) // output false
// deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) // output false
// deepEqual({name: 'test'}, {name: 'test', age: 10}) // false

function deepEqual(obj1: any, obj2: any): boolean {
    // If both objects are of the same type, continue comparing them
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        // Get the keys (properties) of both objects
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        // If the number of keys is different, the objects cannot be identical
        if (keys1.length !== keys2.length) {
            return false;
        }
        // Checking each key and its value recursively
        for (const key of keys1) {
            if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        // If all keys and their values are identical, the objects are identical
        return true;
    } else {
        // If both objects are not objects, compare them directly
        return obj1 === obj2;
    }
}

const objA = {a: 1, b: {c: 2}};
const objB = {a: 1, b: {c: 2}};
const objC = {a: 1, b: {c: 3}};

console.log("=== TASK-1 ===");
console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false