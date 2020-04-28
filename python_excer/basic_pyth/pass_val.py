### Keep Going described by Andy Harris
## demonstrate loop with multople exits

correct = "indypy"
tries = 0

keepGoing = True
while(keepGoing):

    tries = tries + 1
    print('try # ', tries)

    guess = input('What`s the password?')
    if guess == correct:
        print('That`s correct. Redirectiong you now')
        keepGoing = False
    
    elif tries >= 3:
        print('Too many tries. Accounts locked for 5 hours')
        keepGoing = False