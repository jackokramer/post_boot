## set unordered mutable, no duplicates

myset ={1,2,3,1}
myset1=set([1,2,4])
myset2= set('hello')

print(myset)
print(myset1)
print(myset2)

#myset3= {} ## recogniseed as a dictionary
myset3 = set() ## instead

myset.add(1)
myset2.add(3)
myset2.discard('e')

print(myset2)

#myset.clear() # clears the entire sets

for x in myset:
    print(x) ## interate over each element and print it

if 1 in myset:
    print('yes')
else:
    print('no')

odds = {1,3,5,7,9}
evens = {0,2,4,6,8}
primes = {2,3,5,7}

u = odds.union(evens) ### union will combine elements without duplication
print(u)

x= odds.intersection(primes)
print(x)

setA = {1,2,3,5,5,6,7,8,9}
setB = {1,2,3,10,11,12} ## difference will return a set with all elements from the first set and not the second

diff = setA.difference(setB)
diff = setB.difference(setA)

diffs =setB.symmetric_difference(setA)
print(diff)

print(diffs)

setA.update(setB)

print(setA)

setA.intersection_update(setB)
print(setA)

setA.difference_update(setA)
print(setA)

## super set and disjoin methods

setC = {1,2,3,5,9}
setD = {1,2,3}

print(setC.issubset(setD)) ## subset means that all elements of c are in d

print(setB.issuperset(setA))

print(setA.isdisjoint(setC))

setB.add(19)
print(setB)

##frozen set an i

a = frozenset([1,3,5,7]) ## immutable instance

a.remove(3)

#print(a) error message