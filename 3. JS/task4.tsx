// 4. Напишіть метод arrayToObject, який перетворює масив на об'єкт (використовувати рекурсію).
//
// Приклад:
// var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
//
// arrayToObject(arr)
// Outputs: {
// name: 'developer',
//     age: 5,
//     skills: {
//     html: 4,
//         css: 5,
//         js: 5
// }

function arrayToObject(arr: any[]): any {
    // Use Record<string, any> to define the object's type
    const result: Record<string, any> = {};

    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i];
        // If the value is an array, call arrayToObject recursively
        if (Array.isArray(value)) {
            result[key] = arrayToObject(value);
        } else {
            result[key] = value;
        }
    }
    return result;
}

const arr: any[][] = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];
const obj = arrayToObject(arr);

console.log("=== TASK-4 ===");
console.log(obj);