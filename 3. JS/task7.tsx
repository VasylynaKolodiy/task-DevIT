// 7. Напишіть функцію, яка бере об'єкт будь-якої вкладеності і перетворює його
// на єдину плоску карту з різними рівнями, розділеними косою лінією( '/').
//
// Приклад:
// const obj = {
//     a: {
//         b: {
//             c: 12,
//             d: 'Hello World'
//         },
//         e: [1,2,3]
//     }
// };
// mapObject(demoData);
//
// Outputs: {
// 'a/b/c': 12,
//     'a/b/d': 'Hello World',
//     'a/e': [1,2,3]
// }

function mapObject(obj: any, prefix: string = '', result: Record<string, any> = {}): Record<string, any> {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}/${key}` : key;

            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                // If the current value is an object, call mapObject recursively
                mapObject(obj[key], newKey, result);
            } else {
                // Else, simply add the value to the result
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

const obj1: Record<string, any> = {
    a: {
        b: {
            c: 12,
            d: 'Hello World',
        },
        e: [1, 2, 3],
    },
};

console.log("=== TASK-7 ===")
console.log(mapObject(obj1));