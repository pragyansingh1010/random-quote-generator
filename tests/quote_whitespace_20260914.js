function clean(value) {
  return value.trim();
}

console.assert(clean('  Inspire  ') === 'Inspire');
console.assert(clean('Quote') === 'Quote');
console.assert(clean('   ') === '');
console.log('Quote whitespace rules passed');
