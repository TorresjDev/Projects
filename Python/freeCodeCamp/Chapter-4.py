# Chapter 4 - Functions A
#* Stored (and reused) Steps, Dont Repeat yourself!
  # keyword def = function in python
  # def defines a function
#? There are 2 kinds of functions in Python Built-in && user-defined
  # Built-in Functions are provided as part of python: print(), input(), type(), float(), int(), ect
  # User Defined Functions are created by developer: ex def doSomething()
  
#? A Python Function is reusable code 
  # that takes argument(s) as input, does some computations, & returns a result(s)
  # you define a function using (def) reserved word
    # We indent the body of the function
  # Once function is defined you may call or invoke the function by name as many times as needed
  # you call/invoke a function by using the function name, parentheses (), and arguments in an expression

#* example of Built-in function:
big = max('Hello world')
tiny = min('Hello world')
print('Big: ',big,'Tiny: ',tiny)

#? A function is some stored code that we use.
  # use to take some input and produce and output
  
#* example of User Defined function:
def doSomething():
    print("Hello")
    print("World!")
doSomething()
print("Done")
doSomething()
# !

# Chapter 4 - Functions B
x = 5
print("Hello")

def print_lyrics():
  print("One day!")
  print("I am going to make it!")

print_lyrics()
print(x)
print('Done')

#? Arguments
# an argument is a value we pass into the function as its input when we call function
# use arguments to direct function to do different kinds of work at different times
# put arguments in the parentheses after the name of function ex: big = max('hello wold')

#? Parameters
# A parameter is a variable which we use in function definition
  # it a handle/placeholder that allows the code in the function to access the arguments from invoked function
  
def greet(lang):
  if lang == 'es':
    print('Hola')
  elif lang == 'it':
    print('Ciao')
  elif lang == 'fr':
    print('Bonjour')
  else:
    print('Hello')
    
greet('en')
greet('it')
greet('es')
greet('fr')

#? Return Values
# return a value to be used as the value of the function call in calling expression
# keyword return is used for this 
def greet(lang):
  if lang == 'es':
   return 'Hola'
  elif lang == 'fr':
   return 'Bonjour'
  else:
   return 'Hello'
    
print(greet('en'), 'Crystal')
print(greet('it'), 'Lisa')
print(greet('es'), 'Marissa')
print(greet('fr'), 'Donna')

#? A fruitful function is one that produces a result or return value
  # the return statement ends the function execution and sends back the result of function
  
#? Multiple Parameters / Arguments
# simply add more arguments to function / parameters when invoking

def addTwo(a, b):
  added = a +b
  return added

x = addTwo(4,5)
print(x)

#? Void (non-fruitful) Functions
# we a function does not return a value we call it 'void'
# functions that return values are "fruitful" functions
# Void functions are "not fruitful"