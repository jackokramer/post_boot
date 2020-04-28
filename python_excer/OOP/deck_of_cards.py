class Card:
    def __init__(self, value, type):
        self.value = value
        self.type = type
    def show(self):
        print("Value: ", self.value, "type: ", self.type)
class Deck:
    def __init__(self, name):
        self.deck = []
        self.name = name
        for x in ['clubs', 'diamonds', 'hearts', 'spades']:
            for t in range(1,14):
                self.deck.append(Card(x, t))
    def show(self):
        print("\n", "*"*30, self.name, "*"*30)
        for card in self.deck:
            card.show()
d2 = Deck("firs deck")
d2.show()
d3 = Deck('Second Deck')
d3.show()