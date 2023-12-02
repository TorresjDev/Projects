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

apple = input("Enter:")
x = apple - 10 #! if apple is not a number this might error
x = int(apple) - 10 
print(x)

#? Looking Inside Strings
  # you can target index characters inside string values
  # index value must be an integer and start at 0
  # Index value can be an expression that is computed
  
fruit = 'banana'
letter = fruit[1]
x = 3
w = fruit[x - 1]
print(w)