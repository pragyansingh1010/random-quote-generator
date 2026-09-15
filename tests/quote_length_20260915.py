def valid_quote(text):
    return bool(text.strip())

assert valid_quote('Keep learning')
assert not valid_quote('   ')
