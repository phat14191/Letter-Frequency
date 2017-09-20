var phrase = "slimy smelly solution";



var phraseArray = phrase.split("");
var letterCount = {}; // wanna be a Object so {}

phraseArray.forEach(function(letter) {  // accept of letter
  if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
  } else {
    letterCount[letter]++;
  }
});

console.log(letterCount);

//The other way
// var phraseArray = phrase.split("");
// var result = phraseArray.reduce(function(obj, letter) {
//    //reduce will run obj over and over again
//   if(obj[letter] === undefined) {
//     console.log(obj[letter]);
//     obj[letter] = 1;
//     console.log(obj[letter]);
//   } else {
//     obj[letter]++;
//   }
//   return obj;
// }, {});
//
// console.log(result);

// console.log(Object.keys(letterCount).join())
//
// var uniques = "";
// for ( var prop in letterCount) {
//   uniques += prop;
// }
// console.log(uniques);
