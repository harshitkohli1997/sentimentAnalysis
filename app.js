var dracula = require('dracula-sentiment');
var text = "you are doing it wrong";
// Output a 'positive', 'negative', or 'neutral' label
console.log(text, dracula.analyze(text));
// To output a [negative, neutral, positive] float array
console.log(text, dracula.score(text));