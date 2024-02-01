//A basic linear search algorithm

let arr = [5, 3, 10, 30, 7];

const linearSearch = (arr, n) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            console.log("index: ", arr[i]);
            break;
        } else {
            console.log("The array: ", arr);
        }
    }
}

const startTime = Date.now();

linearSearch(arr, 7);

const endTime = Date.now();

console.log(`it took: ${endTime - startTime} ms`);
