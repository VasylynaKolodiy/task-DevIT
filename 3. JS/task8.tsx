// 8. Напишіть функцію combos, яка приймає ціле додатнє число num
// і повертає масив масивів додатніх цілих чисел,
// де сума кожного масиву дорівнює num. Масиви не повинні повторюватися.
//
// Приклад:
// combos(3);
// Output:
// [
//     [ 3 ],
//     [ 1, 1, 1 ],
//     [ 1, 2 ]
// ]

function combos(num: number): number[][] {
    const results: number[][] = [];

    function findCombos(remaining: number, currentCombo: number[]): void {
        if (remaining === 0) {
            // Add the current combination to the result
            results.push([...currentCombo].sort());
            return;
        }

        for (let i = 1; i <= remaining; i++) {
            // Trying to add number i to the current combination
            currentCombo.push(i);
            findCombos(remaining - i, currentCombo);
            // Remove the last element to try other combinations
            currentCombo.pop();
        }
    }

    function areObjectsEqual(obj1: any, obj2: any): boolean {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    findCombos(num, []);

    // Remove duplicates
    const uniqueResults = results.filter((value, index, self) => {
        return self.findIndex(obj => areObjectsEqual(obj, value)) === index;
    });
    return uniqueResults;
}

console.log("=== TASK-8 ===");
console.log(combos(3));
console.log(combos(10));