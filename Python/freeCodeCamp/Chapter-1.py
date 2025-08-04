# Intro to Python

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