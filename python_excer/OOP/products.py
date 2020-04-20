class Products:
    def __init__(self, price, item_name, weight, brand, status, tax):
        self.price = price
        self.item_name = item_name 
        self.weight = weight
        self.brand = brand
        self.status = 'for sale'
    def sold(self):
        self.status = False
        print(self.item_name + 'is sold')
        return self
    def taxes(self):
        self.tax = .12
        print(self.tax + self.price)
        return self
    def returns(self, defective, like_new, opened):
        self.price = 0
        self.status = 'for sale'
        self.price *= .2


## Display Info: show all product details. how do you do that.


