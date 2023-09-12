# Ch V: Loops and Iterations
#? Iterations A
n = 5
while n > 0:
  print(n)
  n = n - 1
print('Blastoff!')
print(n)
# ^ this is an example of a good loop 
# loops are repeated steps containing iterations variables that change each time it goes through a loop

n = 5
while n > 0:
  print('Blastoff!')
print('Dry off!')
# this is was wrong looks like with the loop iteration running constantly

n = 0
while n > 0:
  print('Lather')
print('Dry off!')
# this is an other example of what wrong looks like, here since n is not greater the 0 the print never runs.


# * Breaking out of a loop iteration 
# using the break statement 
# break statement will end the current loop and jump to the statement immediately following the loop

while True:
  line = input('>')
  if line == 'done':
    break
  print(line)
print('Done!')


# * Finishing an Iteration with Continue statment
# continue statement ends the current iteration and jumps to the top of the loops and starts the next iteration
while True:
  line = raw_input('>')
  if line[0] == '#':
    continue
  if line == 'done':
    break
  print(line)
print('Done!')
# !

# ? Iterations B
# * Indefinite Loops
  # loops are called indefinite loops because they can keep going until a logical condition becomes False
# * Definite Loops
  # Loops that execute an exact number of times
  # i is the Iteration Variable
for i in [5,4,3,2,1]: #* element sequence
  print(i) #block (body) of code to be executed once for each value in sequence
print('Definite Looping done.')

friends = ['Joe', 'Sam', 'Sally']
  # friend is the Iteration Variable
for friend in friends: #* element sequence
  print('Welcome! ', friend) #block (body) of code to be executed once for each value in sequence
print('Done')
# Definite loops (for loops) have explicit iteration variables, that change each time thro loop
  # these iterations variables move thro the sequence of set
#! 

# ? Iterations C - Loop Idioms
# * looking for the largest number within the loop
largestNum = -1
print('Before', largestNum) 
for value in [9,41,12,30,82,13]:
  if value > largestNum:
    largestNum = value # reassigns the largest number to variable largestNum
  print(largestNum, value)
print('Largest: ', largestNum)

# * looking for the smallest number within the loop
smallestNum = None #None is a type None: value for None is none / empty / null / Not a Number
print("Before", smallestNum)
for numIter in [3,41,12,9,75,15]:
  if smallestNum is None or numIter < smallestNum:
    smallestNum = numIter
  print("Loop:", numIter, smallestNum)
print("Smallest: ", smallestNum)
# !

#? Iterations D Patterns 
# *Counting in a loop
count = 0 #count is our sum variable that starts at 0
print("Starting Count:", count)
for number in [3,67,34,876,45,32,33]:
  count = count + 1 
  # ^line will add 1 to count variable essentially counting through each loop
  print(count, number)
print("Finished Count:", count)

# * Find the Average in a Loop
count = 0 
sum = 0
print("Starting: count/sum", count, sum)
for value in [3,67,34,876,45,32,33]:
  count = count + 1
  sum = sum + value
  print(count, sum, sum/count)
print("Finished: count/sum/average: ", count, sum, sum/count)
# Average combines the count and sum patterns and divides when loop is done

# * Filtering in a Loop
print('Before')
for value in [3,67,34,876,45,32,33]:
  if value > 20:
    print("Value: ", value)
print('After')
# using an if statement to catch/filter the values we want

# * Search using a boolean variable
found = False
print('Before', found)
for value in [9,5464,32,2,6,3,12]:
  if value == 3: # when condition is met
    found = True # we assign True value to found variable
  print('in loop: ', found, value)
print('After', found)

# * Finding smallest value ii
smallest = None # smallest value
print("Before")
for value in [9,234,12,5,19,17]:
  if smallest is None:
    smallest = value
  elif value < smallest:
    smallest = value
  print(smallest, value)
print("After", smallest)

# * "is" & "is not" Operators
smallest = None
print('Before')
for value in [9,234,12,17,27,30]:
  if smallest is None:
    smallest = value
  elif value < smallest:
    smallest = value
  print(smallest, value)
print("After", smallest)