// 6. Існує функція primitiveMultiply, яка множить числа,
// але випадково може викидати винятки типу: NotificationException, ErrorException.
// Завдання написати функцію обгортку, яка буде повторювати обчислення при виключенні NotificationException,
// але припиняти роботу при винятках ErrorException.
//
// Приклад:
// function NotificationException() {}
// function ErrorException() {}
// function primitiveMultiply(a, b) {
//     const rand = Math.random();
//     if (rand < 0.5) {
//         return a * b;
//     } else if(rand > 0.85) {
//         throw new ErrorException()
//     } else {
//         throw new NotificationException()
//     }
// }
//
// function reliableMultiply(a, b) {
//     // Ваш код
// }
//
// console.log(reliableMultiply(8, 8));


class NotificationException extends Error {}
class ErrorException extends Error {}

function primitiveMultiply(a: number, b: number): number {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException();
    } else {
        throw new NotificationException();
    }
}

function reliableMultiply(a: number, b: number): number {
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof ErrorException) {
                // Stop execution with ErrorException
                throw e;
            } else if (e instanceof NotificationException) {
                // Continue execution with NotificationException
                console.log('Repeat the calculation...');
            } else {
                // Possibly another exception that needs to be handled
                throw e;
            }
        }
    }
}

console.log("=== TASK-6 ===");
try {
    console.log(reliableMultiply(8, 8));
} catch (e) {
    if (e instanceof ErrorException) {
        console.error('Error: ErrorException');
    } else {
        console.error('Another error occurred:', e);
    }
}