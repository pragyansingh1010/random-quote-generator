def valid_author(name):
    return bool(name.strip())

assert valid_author('Unknown')
assert not valid_author('   ')
