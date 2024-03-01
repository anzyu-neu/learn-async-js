const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                let sum = 0; 
                for (let i = 0; i < arr[rowIdx].length; i++) {
                    sum += arr[rowIdx][i];
                }
                resolve(sum);
            }, 0);
        } else {
            reject("Invalid row index");
        }
    });
}

async function calculateSum() {
    console.log("Calculating sum");
    rowSumPromises = [];
    for (let x= 0; x < array2D.length; x++) {
        rowSumPromises.push(sumOfARow(array2D, x));
    }
    try {
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
    }
    catch (error) {
        console.log(`Error Msg: ${error}`);
        return 'failed';
    }
}

calculateSum().then((status) => console.log(status));

// this is the equivalent to above
// async function main() {
//     const result = await calculateSum();
//     console.log(result);
// }
