import sys
import timeit

## TUPLE CANNOT BE CHANGED AFTER ITS CREATION and keeps objects together
mytup = ('jack', 30, 'san francisco')
print(mytup)

## built in tuple function

mytups = tuple(['andy', 28, 'coppenhagen'])
print(mytups)

item = mytup[1]
print(item)

for x in mytup:
    print(x)

if 'andy' in mytups:
    print('yea')
else:
    print('no')

tupexample = ('a','p','p','l','e')

print(tupexample.count('p'))
print(len(tupexample))

print(tupexample.index('l'))

my_list =list(tupexample)
print(my_list)

my_tups = (1,2,3,4,5,6,7,8,9)
b = my_tups[2:6] ##[::] skips to every second one
print(b)

a_person_tup = 'Chiara', 34, 'San Jose'
name, age, city = a_person_tup

print(name)
print(city)

## when working with large data a tuple is more efficient
my_list1 = [0,1,2,'hello', True]
my_tup1 = (0,1,2,'hello', True)
print(sys.getsizeof(my_list1), 'bytes')
print(sys.getsizeof(my_tup1), 'bytes')

## easier to iterate over a tuple
print(timeit.timeit(stmt="[0,1,2,3,4,5]", number=100000))
print(timeit.timeit(stmt="(0,1,2,3,4,5)", number=100000))