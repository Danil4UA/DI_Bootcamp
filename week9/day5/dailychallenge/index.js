// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

function isAnagram(str1, str2){

    const sortedStr1 = str1.toLowerCase().split("").filter(item=>item !== " ").sort().join("")
    const sortedStr2 = str2.toLowerCase().split("").filter(item=>item !== " ").sort().join("")
    console.log(sortedStr1, sortedStr2)

    return sortedStr1 === sortedStr2
}

isAnagram("School master", "The classroom")