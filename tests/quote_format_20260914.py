def valid_quote(text, author):
    return bool(text.strip()) and bool(author.strip())

assert valid_quote('Keep going', 'Unknown')
assert not valid_quote('', 'Unknown')
assert not valid_quote('Keep going', '')
print('Quote format rules passed')
