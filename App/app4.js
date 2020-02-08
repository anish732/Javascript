/**
 * What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

 'abba' & 'baab' == true

 */
function anagram(word, words) {
  return cleanString(word) === cleanString(words);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g)
    .toLowerCase()
    .split("")
    .sort()
    .join();
}

console.log(anagram("abba", "baab"));
