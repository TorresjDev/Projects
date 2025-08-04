#* Chapter 3 Conditional Execution
print('Chapter 3 Conditional Execution')
# creating decision for python to do on certain scenarios 
#? Conditional Steps is the process step by step ex:
exNumber = 5
print('Conditional Steps Ex:' + str(exNumber))
if exNumber < 10:
    print('Smaller')
if exNumber > 10:
    print('Greater')
#? Conditional Steps work hand in hand with Comparison Operators to create expressions 
    # Comparison Operators: (<, <=, ==, >=, >, !=)
    # Comparison Operators look at variables but do not change the variables
x = 5
print('Conditional Steps using Comparison Operators:')
if x == 5: print('Equals 5')
if x > 4: print('Greater than 4')
if x >= 5: print('Greater than or equals 5')
if x < 6 : print('Less than 6')
if x <= 5 : print('Less than or equals 5')
if x != 6: print('Not equal 6')

#* One-Way Decisions
    # meaning certain scenarios that require condition to be met in order to execute certain code 
x = 5
print('Before 5')
if x == 5 : # condition using comparison operator == 
    print('Is 5') # only executes if condition is true 
    print('Is Still 5')
    print('Third 5')
print('After 5')
print('Before 6')
if x == 6 : # condition is false
    print('Is 6') # only executes if condition is true
    print('Is Still 6') # this code wont run if condition is false
    print('Third 6')
print('After 6')
#! End

# * Indentation 
# using tab key btn, python using 4 indent spaces
    #? Increase indent: using the tab space required in python
    #? Maintain indent: to indicate block scope for affected lines
    #? Reduce indent: back to lvl of expression/ statement to indicate end of block
    # Blank lines are ignored - they do not affect indentation
    # Comments on line by themselves are ignored with regard to indentation
    
#! Dont mix tabs and spaces, may cause 'indentation errors' even if code looks fine
    
x = 5
if x > 2: # increase indent to maintain expression
    print('Bigger than 2')
    print('Still Bigger')
print('Done') # decrease  indent to indicate end of block
for i in range(5):
    print(i) # increase indent to maintain expression
    if i > 2:
        print('Bigger than 2')
    print('Done with i', i) # decrease  indent to indicate end of block 
print('Done')

#? Nested Decisions
# example if statement within an if statement
x = 42
if x > 1 :
    print('More than 1')
    if x < 100:
        print('Less than 100')
print('All done')

#? 2-way Decision
# meaning if else statement - creating 2 possible decisions where if condition is true run code else run else code.
x = 4
if x > 2: # first decision using if statement
    print('x is bigger')
else: # second decision using else statement
    print('x is smaller')
print('All done')

#* Chapter 3 Conditional Structures
#  Multi-way meaning having conditions based on specific value
x = 20
if x < 2: # if x is smaller run next line / if not true try next condition 
    print('x is: ', x) # python stops here
elif x < 10: # only runs if  x is not < 2 & if x < 10 / if not true try next condition
    print('x is: ', x) # python stops here
elif x < 20: 
    print('x is: ', x) 
elif x < 40:
    print('x is: ', x)
else: # only runs if all conditions are not true 
    print('Large')
print('All done')

#? Try / Except methods 
# try is used to run code that might crash, except is used to handle any errors that might occur while attempting to run code within the try
#* if code in the try block works then code in except is skipped
#* if code in the try block fails then code jumps to the except block
astr = "Hello World"
try: # when 1st conversion fails for try
    istr = int(astr)
except: # program continues into the except and carries on without breaking
    istr = -1
print('1st try/catch: ', istr)
astr = '123'
try:
    istr = int(astr)
except:
    istr = -1
print('2nd try/catch:', istr)
#! except block is only triggered if something goes wrong
#! if try runs with no errors then except block gets ignored