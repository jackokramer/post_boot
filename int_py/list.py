myList = ['bannana', 'cherry', 'apple']
print(myList)

myList2 = list()
print(myList2)

## list can contain a boolean an integer and a string


item = myList[-2]

print(item)

for x in myList:
    print(x)

if 'apple' in myList:
    print('yes')
else:
    print('no')

print(len(myList))

myList.append('lemon')
print(myList)

myList.insert(2, 'blueberry')
print(myList)

#items = myList.pop()
#print(items)
print(myList)

## reverse list

itemz = myList.reverse()
print(itemz)

itemt= myList.sort() ## sorts list in place


new_list = sorted(myList)
print(new_list)

news = myList + myList2

print(news)

a = myList[1:3]
print(a)

new_list_org = ['cherry waves', 'dragonfruit', 'mango']
list_cpy = new_list_org[:]# slice [:]

list_cpy.append('lemon')

print(list_cpy)
print(new_list_org)

# list comprehension

myLists = [1,2,4,5,6]
b = [x*x for x in myLists]
print(myLists)
print(b)