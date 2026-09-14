function authorName(author) {
  return author && author.trim() ? author.trim() : 'Unknown';
}

console.assert(authorName('Alice') === 'Alice');
console.assert(authorName('  Bob ') === 'Bob');
console.assert(authorName('') === 'Unknown');
console.log('Quote author fallback passed');
