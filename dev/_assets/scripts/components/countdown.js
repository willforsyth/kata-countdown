/*global define:false */
$.fn.countdown= function (options) {
  console.clear();
    var words = require('word-list-json');
    console.log(words.key);
    var letters = ['k','l','f','h','t','r','s','d','a'];
    var wordsLength = words.length;
    var sortedLetters = letters.sort();

    for (i = 0; i < wordsLength; i++) {
      var results = [];
      // split words into and sort alphabetically
      var sortedWords = words[i].toString().split('').sort();

      var matchingLetters = _.intersection(sortedWords, sortedLetters);

      if(matchingLetters.length === sortedWords.length){
        console.log(matchingLetters);
      }

    }
};
