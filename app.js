var dracula = require('dracula-sentiment');
var text = "you are doing it wrong";
// Output a 'positive', 'negative', or 'neutral' label
console.log(text, dracula.analyze(text));
// To output a [negative, neutral, positive] float array
console.log(text, dracula.score(text));

var text = "how are you";
// Output a 'positive', 'negative', or 'neutral' label
console.log(text, dracula.analyze(text));
// To output a [negative, neutral, positive] float array
console.log(text, dracula.score(text));

var text = "i'm good";
// Output a 'positive', 'negative', or 'neutral' label
console.log(text, dracula.analyze(text));
// To output a [negative, neutral, positive] float array
console.log(text, dracula.score(text));

var text = "fck u";
// Output a 'positive', 'negative', or 'neutral' label
console.log(text, dracula.analyze(text));
// To output a [negative, neutral, positive] float array
console.log(text, dracula.score(text));

var text = "improve your hand writing";
// Output a 'positive', 'negative', or 'neutral' label
console.log(text, dracula.analyze(text));
// To output a [negative, neutral, positive] float array
console.log(text, dracula.score(text));

var text = "worst product";
// Output a 'positive', 'negative', or 'neutral' label
console.log(text, dracula.analyze(text));
// To output a [negative, neutral, positive] float array
console.log(text, dracula.score(text));