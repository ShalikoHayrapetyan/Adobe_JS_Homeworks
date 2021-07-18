function moveString(word,result=''){
    if(word.length<3) return result + word
    
    result+=changeFirstLetter( word.substring(0,3))
    return moveString(word.substring(3),result)
}

function changeFirstLetter(word){
    return word[1]+word[2]+word[0]
}

console.log(moveString('dfgjkloyp'))
console.log(moveString('aweyoolp'))