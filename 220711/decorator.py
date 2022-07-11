def decorator(decorated):
    def for_understand_decorator():
        print("이쁘게 꾸며줄거야")
        decorated()
        print("데코레이팅은 꾸미기니까!")
    return for_understand_decorator

@decorator
def sayHi():
    print("Hiiiiiiii!")

sayHi()