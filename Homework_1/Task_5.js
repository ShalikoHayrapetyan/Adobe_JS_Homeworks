function productOfNegatives(array) {

    let result = 1
    let countNegatives = 0

    for (let index = 0; index < array.length; index++) {
        const childeArray = array[index];
        if (!Array.isArray(childeArray)) return 'Invalid Argument'
        let maxNegativeNumber = null;
        for (let j = 0; j < childeArray.length; j++) {

            if (childeArray[j] < 0) {
                if (maxNegativeNumber) {
                    if (childeArray[j] > maxNegativeNumber) maxNegativeNumber = childeArray[j]

                } else maxNegativeNumber = childeArray[j]

                countNegatives++
            }
        }
        if (maxNegativeNumber) result *= maxNegativeNumber
    }
    return countNegatives ? result : 'No negatives'
}

console.log(productOfNegatives([
    [2, -9, -3, 0],
    [1, 2],
    [-4, -11, 0]
]))
console.log(productOfNegatives([
    [3, 4],
    [11, 0],
    [5, 6, 7, 8]
]))
console.log(productOfNegatives([1, 2, 3]))