
print("booting file...")
print("     ...Hello World")

# ? Sequential Steps: meaning python reads from one step to the next for program flow
x = 0
print(x)
x = x + 1
print(x)


# ? Conditional Steps: meaning adding logic ex: using if statement, logical operators
num = 6
if num < x:
    print('6 is smaller')
if num > x:
    print('6 is bigger')

x = 0


# ? Repeated Steps: meaning program loops through iterations variables that change each time
m = 5 
while m > x :
    print(m)
    m = m - 1
print('BlastOff!')


# Python Story 
# ! i
name = input('Enter file: ') #get the name of the file and open it
# ! ii
handle = open(name, 'r')

# ! iii
counts = dict() #count word frequency
for line in handle: 
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1
  
# ! iv      
bigcount = None
bigword = None
for word, count in counts.items(): #find the most common word
    if bigcount is None or count > bigcount:
        bigword = word
        bigcount = count

print("Python Story: word/operator",bigword, "count: ",bigcount) #print results

# ! chapter 2 variables expressions and statements

    # ? constants: fixed values : values do not change 
#  TODO: numeric constant 
print(123)
print(98.6)
# TODO: string constants using single/double 
print('Hello')
print("World")

# ? reserved words : keywords with built in functionality, cannot change value
# TODO: False,class, return, is, None, if, for, else, import, or, in, as ect.
    
# ? variables : using for assigning values, storing values into variables
# naming convention good: spam spam23 _spam
                       # bad: 23spam #spam spam.12
z = 100
name = "World"
z = 50 # resigns new value to z
# ? Mnemonic Variable Names
    # * meaning using memory aid, name variables that help us remember the stored value

# ? Assignment Statement: assigning value to a variable using assignment statement (=)
# Assignment statement consists of expression after = operator and a variable to store the result
# TODO:
num = 0.6
num = 3.9 * num * (1 - num)
# print('Assignment statement value for num as follows')
print('Assignment Statement: ',num)

# ! expressions 
    # expressions use operators
    
    # numeric expressions using operators + - * / ** %
    # string expressions using operators ''""

    # * order of evaluation                                              Most priority                           least priority
        # the order in which the program is read: operator precedence (parenthesis, power, multiplication, addition, left to right)
        # TODO order ex:  parenthesis, power, multiplication, addition, left to right
valueNum = 1 + 2 ** 3 / 4 * 5 
# ?      power       2**3
# * multiplication  3 / 4 in this scenario divides first in order to multiply
# * multiplication  2 * 5
# TODO  addition    1 + 10

# !type
# used for identifying all values/data,  
# type keyword will identify the type of value/data
type(34)
# class 'int'
type("234")
# class 'string'

#dontDoThis = 34 + "234" # use cannot add numbers to a string

# ? there are different types of numbers 
# ex: int,float
# ! if you put and integer(int) & a floating(float) in an expression
                            # !type is converted to a float...you can also overwrite this by using built in F() ex: int() & float()
numberType = int(12)
print(numberType)
print(type(numberType))
stringNumber = '4321'
# ? string conversions: if there are only numbers in a string you can convert to number using int("123")/float("123") not: int("123file")
print(stringNumber, type(stringNumber))
stringNumber = int(stringNumber)
print(stringNumber, type(stringNumber))
      
# ? User Input   - built in function that returns a string value 
nameInput = input("Hello, What is your name? ")
print('Welcome', nameInput)
# * converting User Input
inp = input('Europe floor? ') #input also prints out always gives out a string value
usf = int(inp) + 1
print('US floor', usf)
