/*global define:false */
$.fn.countdown= function (options) {
    var wordsJson = require('word-list-json');
    var letters = ['b','e','d','n','e','r','s','h'];
    // for loop to get keys and values
    for(key in wordsJson) {
        // save the values to prop
        var prop = wordsJson[key];
        // Get the length of the values
        var wordsLength = prop.length;
        // using uderscore find all the words that contain the letters
        var matchingLetters = _.intersection(prop, letters);
        // if the length of the of the word with the matching items is the same
        // length as a word in the dictionay it must be a full word
        if(matchingLetters.length === prop.length){
          // find the key of the macthing words
          var result = matchingLetters && key;
          // log it out
          console.log(wordsJson[result]);
        }
    }
};
