// map an array of strings to a new array containing uppercase versions of each string.

const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  const result = this.words.map(function(word){
return word.toUpperCase();
});
return result;
};

module.exports = UpperCaser;
