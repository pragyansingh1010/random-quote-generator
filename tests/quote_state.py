def has_quote(quote):
    return isinstance(quote, str) and bool(quote.strip())

assert has_quote('Stay curious.')
assert not has_quote('')
assert not has_quote('   ')
assert not has_quote(None)
print("Quote state tests passed")
