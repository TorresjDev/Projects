#* Chapter 3 Conditional Execution
print('Chapter 3 Conditional Execution')
# creating decision for python to do on certain scenarios 
#? Conditional Steps is the process step by step ex:
exNumber = 5
print('Conditional Steps Ex:')
if exNumber < 10:
    print('Smaller')
if exNumber > 10:
    print('Greater')
#? Conditional Steps work hand in hand with Comparison Operators to create expressions 
    # Comparison Operators: (<, <=, ==, >=, >, !=)
    # Comparison Operators look at variables but do not change the variables
x = 5
print('Conditional Steps using Comparison Operators:')
if x == 5: print('Equals5')
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
#  Multi-way
x = 20
if x < 2:
    print('x is smaller')
elif x < 10:
    print('x is bigger')
else:
    print('Large')
print('All done')

