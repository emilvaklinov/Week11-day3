// Given a word, phrase or sentence you should be able
// to determine whether or not it is an isogram.
// That is, you should be able to determine whether every letter is unique.

const IsogramFinder = function (word) {
  this.word = word;

}
IsogramFinder.prototype.isIsogram = function () {
    const splitTheWord = this.word.split('');
    let uniqueLetters = [];

    const result = splitTheWord.every((letter) => {
        if (uniqueLetters.includes(letter)) {
            return false
        } else {
            uniqueLetters.push(letter);
            return true;
        }
    })
    return result;
}
module.exports = IsogramFinder;
