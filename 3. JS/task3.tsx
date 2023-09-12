// 3. Напишіть функцію обгортку, яка на вхід приймає масив функцій та їх параметрів,
// а повертає масив результатів виконання.
// Кількість аргументів виконуваної функції не обмежена!
//
// Приклад:
// const f1 = (cb) => {cb(1)}
// const f2 = (a, cb) => {cb(a)}
// const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}
//
// bulkRun(
//     [
//         [f1, []],
//         [f2, [2]]
//             [f3, [3, 4]]
//     ]
// ).then(console.log)
// Output: [1, 2, [3, 4]]

function bulkRun(functionsAndArgs: Array<[Function, any[]]>): Promise<any[]> {
    // Create an array of promises, each of which represents the execution of one function with its arguments
    const promises = functionsAndArgs.map(([fn, args]) => {
        return new Promise<any>((resolve) => {
            // Call the function and pass it arguments, as well as a callback to return the result
            fn(...args, (result: any) => {
                resolve(result);
            });
        });
    });
    // Return a promise that resolves when all promises in the array complete
    return Promise.all(promises);
}

const f1 = (cb: (result: any) => void) => { cb(1); };
const f2 = (a: number, cb: (result: any) => void) => { cb(a); };
const f3 = (a: number, b: number, cb: (result: any) => void) => { setTimeout(() => cb([a, b]), 1000); };

console.log("=== TASK-3 ===");
bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]],
]).then(console.log);