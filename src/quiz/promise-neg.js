const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negsPerRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            const negatives = arr[rowIdx].filter(num => num < 0);
            if (negatives.length > 0) {
                resolve({negatives});
            } else {
                reject(`No negative numbers in row ${rowIdx}`);
            }
        } else {
            reject("Invalid row index");
        }
    })
}

const negsPerRowPromises = [];

for (let x = 0; x < array2D.length; x++) {
    negsPerRowPromises.push(negsPerRow(array2D, x));
}

Promise.any(negsPerRowPromises)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.log(`Error Msg: ${error}`));