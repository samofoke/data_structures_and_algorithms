//The quadratic problem

const arr = [1, 5, 3, 9, 4, 3]


function checkDuplicate(ar) {

    let steps = 0;

    for (let i = 0; ar.length; i++) {
        for (let x = 0; x < ar.length; x++) {
            steps++;
            if (i !== x && ar[i] === ar[x]) {
                return true;
            }
            console.log(steps);
        }
    }
    console.log(steps);
    return false;
}

console.log(checkDuplicate(arr));

