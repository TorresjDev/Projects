# # #  Ch. 1 Exercise 
# print('Hello Task')
# nameInput = input("What's your name? ")
# print('Hello', nameInput)
# print('next task')

# #  Ch. 2 Exercise 
# print('Gross pay Task')
# hrInput = input("Enter Hours: ")
# rateInput = input("Enter Rate: ")
# try: # Also part of Ch. 3.2 Exercise - adding try / except
#   wrkHrs = float(hrInput)
#   wrkRate = float(rateInput)
# except:
#   print("Error, please enter numeric input")
#   quit()
# pay = wrkHrs * wrkRate
# print('Total Pay: $', pay)
# print('next task')

# #  Ch. 3.1 Exercise
# if wrkRate > 40:
#   print('Overtime Rate Total: ', rateInput)
#   reg = wrkRate * wrkHrs
#   otp = (fh - 40.0) * (fr * 0.5)
#   print(reg,otp)
#   pay = reg + otp
# else:
#   print('Regular Rate Total: ', rateInput)
#   pay = wrkHrs * wrkRate
# print('Total Pay: $', pay)

#  Ch. 5 Exercise
num = 0
total = 0.0
while True:
  stringVar = input('Enter a number ')
  if stringVar == 'done': # When user types done it breaks the while loop
    break
  try:
    floatV = float(stringVar)
  except:
      print('Invalid Input')
      continue # continue allows code to continue without error
  num = num + 1
  total = total + floatV
  
print(total,num,total/num)