## Use a pound sign/ hashtag/sharp sign to make comments

x = 'Hellowaew'
z = 15
z = True ## has to be capital letter in python
a = {'name': 'jack'} ## key value pairs in a dictionary
b = [1,2,3,5]
myvar = ''
myvar = 2
myvar = True # can be overwritten if needed
print(x)
print(z)
print('Hello Everyone')

# for(var num = 0; num < end_val; num++){
# }
#for o in range(0, end_val, 10):
    #pass # it'll pass it
# 0 start, end_val= end_value stop integer is always exclusive

## for in loops are used for lists or dictionaries
for values in x: # values is the actual element
    pass

#EX:

for value in b: 
    print(value)

for z in b: # only used with dictionaries since they dont have an index value on their own
    z = 'Jack'
print(b)

for z in range(len(b)):
    b[z] = 'changed value' # change values you gotta use the range
print(b)

#for index in range are used to change values
#while for in loop is used to cycle through lists by elements or cycle change  key value pairs in a dictionary. 

## if checks and conditionals are written like this.

num1 = 13
num2 = 21

if num1<num2:
    print('num1 is less than num2')

# else ifs are written like this

num3 = 17
num4= 98

if num2>num3:
    print('num2 is more than num3')
elif num2<num3:
    print('num2 is less than num3')
else:
    print('they`re the same')

#chain conditions using 'and'/'or' 

#functions in python are written as below:
def function_name(parameter1 = '', parameter2=''):
    pass # python is finicky about parameters be sure to put the values in the parameter names for python itself
function_name('Jack', 'Kramer')
function_name(parameter1 = 'hello') ## named arguement example
# if you pass parameters and do not give defaults, python will be MAD!!!!
# if you set defaults python will take them in order or take values as named arguemtns


## get length of a list or a string len(somelist)

print(len(b))
print(len('hello'))
mylist = ['hello',{'key': 'value'}, 'tacos', 'coffee',"I <3 coiding" ]
mylist.append('here')# just like the push method in javascript
mylist.insert(3, 'Inser at index of your choce') # choose in range and it''l be added there
mylist.pop()# to remove somthing from the list 
mylist.pop(len(mylist)-1)
## also a remove value but only removes by the value itself
mylist.remove('taco') # multples of values only would remove the first one
print(mylist)
# for in loops are just inclusive to [lists] and dictionaries{}

## to get the length in python you type in len()


## if you want to add strings together can also concatinate strings with a comma

name = 'My name is Jack'
greeting = "How are you?"

#concatinating strings with a plus sign
print(name + ' ' + greeting) #limited only to strings with the + sign. Number will do math strings will do concatination. Can't do both simultanously with a plus need to change the number to a string
print(name + 3) # doesn't work
print(name + str(3)) # works but doesn't add it  mathmatically
print(name, greeting) # commas will give you that space(first benfit), also doesn't care about numbers

#string interpoloation - allows you to pass variables into strings
# .Format interpoloation as seen below. But notice order matters 
print('start off by introducing yourself. For exampl {}. Then greet them, such as {}'. format(name, greeting))

## f strings havr direct sentence flow or direct input into a string structure.
print(f'my name is. for example {name}. then greet them such as {greeting}.')


## if we have a list called myList ' and we want a certain value: We obtain it by calling the index value myList[index] = the value at that index
#if we have a dicitionary called my 'myDict' and we want a certain value: myDict['key'] = value of that key
## how to pull values from list in a dicitonary

hero = { 'name': 'Batman', 'powers': ['flight', 'super strength', 'x ray vision']} # dictionary with a list in it.
# pritn the statement batman has flight using string interpolation.

#print(f'Batman has {hero['powers'][2]}')

boy_wizard = {'name': 'Joe Thornton', 'player_info': {'team': 'Sharks', 'position': 'center'}}
# dictionary with another dictionary in it

print(f"{boy_wizard['name']} is on {boy_wizard['team']} as a {boy_wizard['position']}")

books = [{'title': 'Pride n Predujice', 'authors':[{'name': 'Jane Austin', 'birth_year': 1777}], 'pub_year':1823}, {'title': "Garfield", 'authors': [{'name': 'Matt groewning', 'birth_year': 1966}], 'pub_year': 1990}]

print(f"{books[0]} was written by {books[0]['authors'][0]['name']} in {books['authors'][1]['pub_year']}")

## dictionary must have a key

## list must have an index