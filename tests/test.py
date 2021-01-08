class ChildClass(BaseClass):
    """
    Docstring
    """

    @attribute('foo')
    def foo(self):
        foo = None
        bar = 1337
        baz = [x for x in [1, 2, 3] if x % 2 is not 0]
        raise TestError()
