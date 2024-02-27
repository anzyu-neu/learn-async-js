function sum2DArray(arr) {
    return new Promise((resolve, reject) => { // takes error components as input
        // define conditions under which promise is resolved and rejected
        // creation of the promise does not automically go to the event thread 

        console.log('Sum called ... '); // shows up in the main thread 

        if(Array.isArray(arr)) { // if arr is not an array, immediately reject (else)
            setTimeout(() => { // setTimeout will put function in the event loop
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                } // O(n^2) 
                console.log('resolving ... ');
                resolve(sum); // return from the event loop. sends to then block 
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// code currently doesn't properly handle promise (then catch block)
const sumPromise1 = sum2DArray(array2D);
sumPromise1
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

const sumPromise2 = sum2DArray('array2D');
sumPromise2
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

/**
 * array rejection comes first (promise2) because it's faster
 * promise1 takes more time given the O(n^2) calculation
 * Creating new promises does not auto go to the event thread 
 */
