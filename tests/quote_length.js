function validQuote(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

console.assert(validQuote('Keep going.'));
console.assert(validQuote(' A '));
console.assert(!validQuote(''));
console.assert(!validQuote('   '));
console.log('Quote length tests passed');
