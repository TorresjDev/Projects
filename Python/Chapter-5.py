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
# !

# * Breaking out of a loop iteration 
# using the break statement 
# break statement will end the current loop and jump to the statement immediately following the loop

while True:
  line = input('>')
  if line == 'done':
    break
  print(line)
print('Done!')
# !

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

# * Indefinite Loops
# loops are called indefinite loops because they can keep going until a logical condition becomes False