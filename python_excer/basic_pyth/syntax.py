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
def function_name(parameter1, parameter2):
    pass # python is finicky about parameters be sure to put the values in the parameter names for python itself

# for in loops are just inclusive to [lists] and dictionaries{}
hero = { 'name': 'Batman', 'powers': ['flight', 'super strength', 'x ray vision']}
# pritn the statement batman has flight using string interpolation.

boy_wizard = {'name': 'Joe Thornton', 'player_info': {'team': 'Sharks', 'position': 'center'}}

books = [{'title': 'Pride n Predujice', 'authors':[{'name': 'Jane Austin', 'birth_year': 1777}], 'pub_year':1823}, ]

## to get the length in python you type in len()

