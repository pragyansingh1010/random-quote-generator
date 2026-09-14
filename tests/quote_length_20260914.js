function validQuote(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

console.assert(validQuote('Stay curious'));
console.assert(!validQuote(''));
console.assert(!validQuote('   '));
console.log('Quote length rules passed');
