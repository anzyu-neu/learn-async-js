const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow( arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                let sum = 0; 
                for (let i = 0; i < arr[rowIdx].length; i++) {
                    sum += arr[rowIdx][i];
                }
                resolve(sum);
            })
        } else {
            reject("Invalid row index");
        }
    });
}

rowSumPromises = [];

for (let x= 0; x < array2D.length; x++) {
    rowSumPromises.push(sumOfARow(array2D, x));
}
Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log( `Sum = ${sum}`);
    })
    .catch((error) => console.log(`Error Msg: ${error}`));