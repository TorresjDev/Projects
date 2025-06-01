# Chapter 8
# ? 08 - List A - Python List

# Algorithms: A set of rules or steps used to solve a problem

# Data Structures: A particular way of organizing data in a computer

# Most variables can only have one value in them - when we assign a new value to the variable, the old value is overwritten

x = 32
x = 4
print(x)

#! A List is a Collection
# A collection allows us to put many values in a single "variable"
# A collection helps because we can store many values in a single variable
friends = ['Joseph', 'Glenn', 'Sally']
carryon = ['socks', 'shirt', 'perfume']

#! List constants are surrounded by square brackets and the elements in the list are separated by commas
print([1, 24, 76])
# A list element can be any Python object - even another list
print([1, 'red', [1, 'blue']])
print([])  # A list can be empty

for i in [1, 2, 3]:
    print(i)
print('Blastoff!')

for friend in friends:
    print('Happy New Year:', friend)
print('Done!')

print(friends[1])

#! List are Mutable
# * string are immutable we cannot change the contents of a string
# we must make a new string to make any change
# * List are mutable we can change an element of a list using the index operator

fruit = 'Banana'
x = fruit.lower()
print(x)

lotto = [2, 14, 26, 41, 63]
print(lotto)
lotto[2] = 28
print(lotto)

#! How long is a list?
# the len() function takes a list as a parameter and returns the number of elements in the list
great = 'Hello Bob'
print(len(great))

# actually len() tells us the number of elements of any set or sequence (such as a string...)
x = [1, 2, 'joe', 99]
print(len(x))

#! Use the range function
# the range function returns a list of numbers that range from 0 to 1 less than the parameter
print(range(4))
print(len(friends))
print(range(len(friends)))

# we can construct an index loop using for and an integer iterator
#! A tale of two loops
friends = ['Joseph', 'Glenn', 'Sally']
for friend in friends:
    print('Happy New Year:', friend)
print(len(friends))

for i in range(len(friends)):
    friend = friends[i]
    print('Happy New Year:', friend)

print(range(len(friends)))


print('CH08 - List B - Working with List')

#! Concatenating list using + operator
# we can create a new list by
a = [1, 2, 3]
b = [4, 5, 6]
c = a + b
print(c)
print(a)

#! Lists can be sliced using :
t = [9, 41, 12, 3, 74, 15]
t[1:3]  # this will slice the list from index 1 to 3 but not including 3
t[:4]  # this will slice the list from the beginning to index 4 but not including 4
t[3:]  # this will slice the list from index 3 to the end of the list
t[:]  # this will slice the whole list

#! List Methods
x = list()
type(x)  # defines the type of x
dir(x)  # shows the methods that can be used with x

#! Building a list from scratch
stuff = list()
stuff.append('book')  # append() method is used to add an element to the list
stuff.append(99)  # we can add any type of element to the list
print(stuff)  # ['book', 99]
stuff.append('cookie')
print(stuff)  # ['book', 99, 'cookie']

#! Is something in a list?
some = [1, 9, 21, 10, 16]
9 in some  # True - 9 is in the list
15 in some  # False - 15 is not in the list
20 not in some  # True - 20 is not in the list

#! List are in Order
friends = ['Joseph', 'Glenn', 'Sally']
friends.sort()  # sort() method is used to sort the list in ascending order
# ['Glenn', 'Joseph', 'Sally'] - the list is sorted in ascending order
print(friends)
print(friends[1])  # Glenn

#! Built-in Functions and Lists
nums = [3, 41, 12, 9, 74, 15]
print(len(nums))  # 6
print(max(nums))  # 74
print(min(nums))  # 3
print(sum(nums))  # 154
print(sum(nums)/len(nums))  # 25.666

#! Loop A uses less memory than Loop B because it is storing only the average number of the list
total = 0
count = 0
# while True:
#     inp = input("Enter a number: ")
#     if inp == 'done':
#         break
#     value = float(inp)
#     total = total + value
#     count = count + 1
# average = total / count
# print("Average:", average)

#! Loop B - uses more memory than Loop A because it is storing all the numbers in a list
numlist = list()
# while True:
#     inp = input("Enter a number: ")
#     if inp == 'done':
#         break
#     value = float(inp)
#     numlist.append(value)
# average = sum(numlist) / len(numlist)
# print("Average:", average)


print('CH08 - List C - Strings and Lists')

#! Best Friends: Strings and Lists
abc = 'With three words'
stuff = abc.split()  # split() method is used to split the string into a list
# Split breaks a string into parts and produces a list of strings. We think of these as words. We can access a particular word or loop through all the words
print(stuff)  # ['With', 'three', 'words']
print(len(stuff))  # 3
print(stuff[0])  # With
print(stuff)
for w in stuff:
    print(w)

line = 'A lot            of spaces'
# when you dont specify a delimiter, multiplr spaces are treated like one delimiter
# ['A', 'lot', 'of', 'spaces'] - split() method splits the string into a list of words removing the extra spaces
etc = line.split()
print(etc)
line = ' first;second;third'
# you can specify what delimiter character to use in th splitting
# ['first;second;third'] since theres no space to split the string into a list of words
thing = line.split()
print(thing)
print(len(thing))  # 1

fhan = open('mbox-short.txt')
# print the lines that start with 'From' and then print the third word (which is the sender's email address)
for line in fhan:
    line = line.rstrip()
    if not line.startswith('From '):
        continue
    words = line.split()
    print(words[2])

#! the Double Split Pattern
# Sometimes we split a line one way, and then grab one of the pieces of the line and split that piece again
words = line.split()  # split the line into a list of words
email = words[1]  # grab the email
pieces = email.split('@')  # split the email into a list of two parts
print(pieces[1])  # print the second part of the email
