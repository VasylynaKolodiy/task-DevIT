// 9. Напишіть функцію add, яка працювала б таким чином add(1)(2)(7)...(n).
// Кількість послідовних візів необмежена.
//
// Приклад:
// Number(add(1)(2)); // == 3
// Number(add(1)(2)(5)); // == 8
// Number(add(1)(2)(-3)(4)); //  == 4
// Number(add(1)(2)(3)(4)(-5)); // == 5

function add(x: number): any {
    // An internal function that will return after each call
    function addNext(y: number): any {
        // Return the result of adding x and y
        return add(x + y);
    }
    // Convert the function to a number, if necessary
    addNext.valueOf = function() {
        return x;
    };
    return addNext;
}

console.log("=== TASK-9 ===");
console.log(Number(add(1)(2)));           // 3
console.log(Number(add(1)(2)(5)));        // 8
console.log(Number(add(1)(2)(-3)(4)));    // 4
console.log(Number(add(1)(2)(3)(4)(-5))); // 5
