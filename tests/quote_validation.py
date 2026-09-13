def valid_quote(quote):
    return isinstance(quote, str) and bool(quote.strip())

assert valid_quote('Keep going.')
assert valid_quote('  Hello  ')
assert not valid_quote('')
assert not valid_quote('   ')
print('Quote validation passed')
