
#  Ch. 1 Exercise 
print('Hello Task')
nameInput = input("What's your name? ")
print('Hello', nameInput)
print('next task')
print('Gross pay Task')
hrInput = input("Enter Hours: ")
rateInput = input("Enter Rate: ")
wrkHrs = float(hrInput)
wrkRate = float(rateInput)
pay = wrkHrs * wrkRate
print('Total Pay: $', pay)
print('next task')
#  Ch. 3 Exercise
if wrkRate > 40:
  print('Overtime Rate Total: ', rateInput)
  reg = wrkRate * wrkHrs
  otp = (fh - 40.0) * (fr * 0.5)
  print(reg,otp)
  pay = reg + otp
else:
  print('Regular Rate Total: ', rateInput)
  pay = wrkHrs * wrkRate
print('Total Pay: $', pay)

