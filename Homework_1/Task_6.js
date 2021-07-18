function makeSubsetArray(array, result = []) {
    if (array.length <= 3) return array

    for (let i = 1; i < array.length - 1; i++) {
        const secondElement = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const thirdElement = array[j];
            result.push([array[0], secondElement, thirdElement])
        }

    }
    array.shift()
    return result.concat(makeSubsetArray(array))

}


console.log(makeSubsetArray([4]))
console.log(makeSubsetArray([19, 16]))
console.log(makeSubsetArray([5, 9, 23, 0, -2, -1]))