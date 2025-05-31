# Chapter 6 - Strings A

#? String Data Types
  # String is a sequence of characters
  # Strings use quotes '' & ""
  # Strings can be concatenated using +
  # Strings containing numbers are still strings
  # A number in a string can be converted to number using int()
  
stringA = 'Hello'
stringB = ' there'
greeting = stringA + stringB
print(greeting)

strNumber = '123'
# strNumberTwo = strNumber + 1 #! this line will error
strNumberThree = int(strNumber) + 1 #* this is the  correct way
print(strNumberThree)

#? Reading & Converting
  # read data in strings then parse & convert as needed
  # provides more control over error situations & || bad user input
  # raw input numbers must be converted from strings
  
name = input("Enter:")
print(name)

# apple = input("Enter:")
# x = apple - 10 #! if apple is not a number this might error
# x = int(apple) - 10 
# print(x)

#? Looking Inside Strings
  # you can target index characters inside string values
  # index value must be an integer and start at 0
  # Index value can be an expression that is computed
  
fruit = 'banana'
word = 'hello'
letter = fruit[1]
x = 3
w = fruit[x - 1]
print(w)

#? Strings Have Length
  # built-in function len() returns length of string
print(len(fruit))
    #* A function is stored code that we use to take some input and produce an output

#? Looping Through Strings
  # using while statement and an iteration variable, and len function, you can construct a loop to look at each of the letters in a string individually
index=0
while index < len(fruit):
  letter=fruit[index]
  print(index, letter)
  index = index + 1
  
  # using for statement  
    # iteration variable gets completely taken care of by for loop
for letter in fruit:
  print( letter)
  
# count = 0 
# for letter in word:
#   if letter == 'a': #body line
#     count = count + 1 #body line
# print(count)
  
#??--key points--#
  # 'iteration variable' "iterates" through the sequence (ordered set)
  # the block(body) of code is executed once for each iteration(values in the sequence)
  # 'iteration variable' moves through all values in sequence
  
#!CHAPTER END
# CHAPTER 6 - Strings B
 
#?Slicing Strings
  # slices string first and last values s(a:b)
print('Slicing Strings')
string2Slice = 'Monty Python'
print(string2Slice[:3])
print(string2Slice[3:])
print(string2Slice[2:8])

#?String Concatenation
  # using + operator is considered concatenation
print('String Concatenation')
a = 'Hello'
b = a + 'There'
print(b)
c = a + '' + 'There'
print(c)

#?In logical Operator
  # key word 'in' can be used to check if one value is "in" another value "storage container"
  # in expression is a logical expression that returns a boolean value can be used in an if statement
print('In logical Operator')
'n' in fruit
'm' in fruit
'nan' in fruit
if 'a' in fruit:
  print("a in fruit")
  
#?String Comparison
if word == 'banana':
  print('word is banana')
if word < 'banana':
  print('word is' + word)
elif word > 'banana':
  print('word is' + word + ', comes before banana')
else:
  print('All right word is: ' + word)
  
#? String Library
  # python has a # of string functions which are in string library
  # these functions are built into every string library 
    #invoke them by appending function to string variable
  # functions do not modify original strings, instead
    # they return a new string value that has been modified

greet = 'Hello World'
zap =  greet.lower() #type() dir()
print(zap)
print(greet)
print('HI there'.lower())

#? Searching a String
  # use the find() function
  # .upper() for making a copy of string uppercased
  # .replace() for replacing characters with new string values 'search and replace'.
  # .lstrip() for left, .rstrip() for right .strip() for both sides, used for removing whitespace.
  
#? Prefixes
  #returns boolean values
line = 'Please have a nice day'
line.startswith('Please')
line.startswith('p')

data = 'We ARE here in Earch'
atpos = data.find('in')
print(atpos)
sppos = data.find(' ', atpos)
print(sppos)
host = data[atpos+1:sppos]
print(host)
