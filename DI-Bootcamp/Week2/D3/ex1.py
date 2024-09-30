class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    
    def __str__(self):
        return f"{self.amount} {self.currency}s"
    
    def __repr__(self):
        return self.__str__()
    
    def __int__(self):
        return self.amount
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot and between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        elif isinstance(other, int):
            return self.amount + other
        else:
            return NotImplemented
        
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, int):
            self.amount +=other
        else:
            return NotImplemented
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel' 1)
c4 = Currency('shekel', 10)
c5 = Currency('soles', 15)


print(st(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
c1 += 5
print(c1)

c1 += c2
print(c1)

try:
    c1 + c3
except TypeError as e:
    print(e)

