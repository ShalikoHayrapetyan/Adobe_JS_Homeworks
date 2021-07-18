function findLongestSubstring(sentence, result = '') {
    if (result.length > sentence.length) return result
    let substring = ''
    for (let index = 0; index < sentence.length; index++) {
        const char = sentence[index];
        if (char !== " " && substring.includes(char)) {
            if (substring.length >= result.length) result = substring
            return findLongestSubstring(sentence.substring(1), result)
        } else substring += char
    }
    return result.length ? result : substring
}


console.log(findLongestSubstring(''))
console.log(findLongestSubstring('there are no two words in the english language more harmful than "good job".'))
console.log(findLongestSubstring('“parting your soup is not a miracle, bruce.'))