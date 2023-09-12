// 2. Напишіть функцію-генератор chunkArray,
// яка повертає ітератор, що повертає частини масиву зазначеної довжини.
//
// Приклад:
// const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
// iterator.next() // { value: [1,2,3], done: false }
// iterator.next() // { value: [4,5,6], done: false }
// iterator.next() // { value: [7,8], done: false }
// iterator.next() // { value: undefined, done: true }

function* chunkArray<T>(arr: T[], chunkSize: number) {
    let index = 0;
    while (index < arr.length) {
        // Use slice to get part of the array
        yield arr.slice(index, index + chunkSize);
        index += chunkSize;
    }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log("=== TASK-2 ===");
console.log(iterator.next()); // { value: [1, 2, 3], done: false }
console.log(iterator.next()); // { value: [4, 5, 6], done: false }
console.log(iterator.next()); // { value: [7, 8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }