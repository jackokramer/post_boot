class Parent:
    def method_a(self):
        print('invoking parent method_a')
class Child(Parent):
    def method_a(self):
        print('invoking Child of method_a')
dad = Parent()
son = Child()
dad.method_a()
son.method_a()

class Person:
    def pay_bill(self):
        raise NotImplementedError
class Millionaire(Person):
    def pay_bill(self):
        print("here you go keep the change")
class GradStudent(Person):
    def pay_bill(self):
        print('Can I owe you ten bucks or do the dishes')

Jack = Millionaire()
Andy = GradStudent()
Jack.pay_bill()
Andy.pay_bill()