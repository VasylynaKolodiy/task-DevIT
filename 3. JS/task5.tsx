// 5. Написати зворотний метод (див. Завдання 4) objectToArray, який з об'єкта створить масив.
//
// Приклад:
// objectToArray({
//     name: 'developer',
//     age: 5,
//     skills: {
//         html: 4,
//         css: 5,
//         js: 5
//     }
// })
//
// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]

function objectToArray(obj: Record<string, any>): any[][] {
    const result: any[][] = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            // If the value is an object, call objectToArray recursively
            if (typeof value === 'object' && !Array.isArray(value)) {
                result.push([key, objectToArray(value)]);
            } else {
                result.push([key, value]);
            }
        }
    }
    return result;
}

const inputObj: Record<string, any> = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5,
    },
};
const arr1: any[][] = objectToArray(inputObj);

console.log("=== TASK-5 ===");
console.log(arr1);