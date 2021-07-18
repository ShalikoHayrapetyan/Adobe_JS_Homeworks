function findTheLongestWord(sentence){

    const array = sentence.split(' ')
    let result='';

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.length>=result.length) result=element 
    }

    return result
}

console.log(findTheLongestWord("Which would be worse - to live as a monster, or to die as a good man?"))