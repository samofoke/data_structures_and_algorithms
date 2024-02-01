/*
- This is one of the basic sorting algorithms.
- we can have numbers such as 13254
*/

let nums = [1, 3, 2, 5, 4];

let sortedNumbers = bubble_sort(nums);

function bubble_sort(arr, cmp) {

    cmp = cmp || ((a, b) => a - b);

    let numSorted;

    for ( let i = 0; i < arr.length; i++){
        
        numSorted = false;

        for (let x = 0; x < arr.length - i - 1; x++) {
            if (cmp(arr[x], arr[x + 1]) > 0) {
                let temp = arr[x];
                arr[x] = arr[x + 1];
                arr[x + 1] = temp;
                numSorted = true;
            }
            console.log(arr[i]);
        }
        if (!numSorted) break;
    }
    return arr;
}

console.log(sortedNumbers);