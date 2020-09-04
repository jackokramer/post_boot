## a collection datatype unordered and mutable key value pair

mydict = {
    'name': 'andy',
    'age': 28,
    'city': 'coppenhagen'
}

print(mydict)

mydict2 = dict(name='Nina', age=23, city='London')

print(mydict2)

value = mydict['age']
print(value)

mydict['email'] = 'andy@gmail.com'
print(mydict)

# del mydict['name'] ## delete method
print(mydict)

if 'name' in mydict:
    print(mydict['name'])

try:
    print(mydict2['last_name'])
except:
    print('Error')

## looping dicitonary

for value in mydict2.values():
    print(value)

## example below will modify the original
mydict_cpy = mydict

mydict_cpy = dict(mydict) ## this dict() wont effect or change the original if you choose to modify it 

mydict_cpy['email'] = 'mapper@gmail.com'
print(mydict)
print(mydict_cpy)

## merge to dictionaries

mydict.update(mydict2)
print(mydict) ## overridden by the second dictionary

mydict1 = {3: 9, 6:36, 9:81}
print(mydict1)

values = mydict1[3]

mytuple = (8,7)

mydict = {mytuple: 15}

print(mydict)