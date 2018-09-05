// Given a sentence or phrase you should be able to determine whether or
// not every letter of the alphabet is included in it.


const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
  }

  PangramFinder.prototype.isPangram = function () {
    const phraseToLower = this.phrase.toLowerCase();

    const result = this.alphabet.every((letter) => {
      return phraseToLower.includes(letter);
    })
    return result;

  }

module.exports = PangramFinder;
