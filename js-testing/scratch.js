const phrase = 'proof of lag';

console.log(phrase[9])

result = '';
for (let i = phrase.length - 3; i >= 0 ; i -= 3 ) {
  result += phrase[i];
}
console.log(result);