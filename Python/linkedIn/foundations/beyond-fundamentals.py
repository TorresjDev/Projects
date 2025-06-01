# Python

# Programming Foundations: Beyond the Fundamentals


# region 1: Collections

# 1.1: Lists
# Lists are simple collections of groups of data together in a certain order and assigns the collection a name.

import re
import testmodule
from matplotlib.pylab import f


city1 = "New York"
city2 = "Los Angeles"
city3 = "Chicago"
city4 = "Houston"
city5 = "Philadelphia"
# A list is a collection of items in a particular order.
cities = [city1, city2, city3, city4, city5]
# Lists can contain any type of data, including other lists.
cities2 = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"]
# Lists can also contain mixed data types.
cities3 = ["New York", 123, True, 45.67, city2, None, cities]

print(f"Top 5 cities in the USA: {cities}")

# 1.2: Dictionaries
# Dictionaries are collections of key-value pairs, where each key is unique and maps to a value.
city_population = {
    "New York": 8419600,
    "Los Angeles": 3980400,
    "Chicago": 2716000,
    "Houston": 2328000,
    "Philadelphia": 1584200
}
# Dictionaries can be used to store related data together.
# For example, a dictionary can be used to store a person's information.
person = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "is_student": False,
    "courses": ["Python", "JavaScript", "SQL"]
}
# Dictionaries can also contain other dictionaries.
person2 = {
    "name": "Jane Smith",
    "age": 25,
    "city": "Los Angeles",
    "is_student": True,
    "courses": {
        "Python": "A beginner's guide to Python",
        "JavaScript": "An introduction to JavaScript"
    }
}

print(f"City populations: {city_population}")

# Challenge:

# 1A. Replace variables with a list "Stars".
# 1B. Create statement that prints fourth nearest star.

# Nearest stars to Earth
star1 = 'Sol'
star2 = 'Alpha Centauri'
star3 = 'Barnard'
star4 = 'Wolf 359'

# check type of star1
print(f"The type of star1 is: {type(star1)}")

stars = ['Sol', 'Alpha Centauri', 'Barnard', 'Wolf 359']
print(f"The fourth nearest star to Earth is: {stars[3]}")

# 2A. Create a dictionary "peaks" that stars all values.
# 2B. Create statement that prints the highest peak on the Pacific tectonic plate.

# Highest peak on each tectonic plate
African = 'Kilimanjaro'
# Antarctic = 'Vinson'
# Australian = 'Puncak Jaya'
# Eurasian = 'Everest'
# North_American = 'Denali'
# Pacific = 'Mauna Kea'
# South_American = 'Aconcagua'

peaks = {
    "African": "Kilimanjaro",
    "Antarctic": "Vinson",
    "Australian": "Puncak Jaya",
    "Eurasian": "Everest",
    "North_American": "Denali",
    "Pacific": "Mauna Kea",
    "South_American": "Aconcagua"
}
print(f"The highest peak on the Pacific tectonic plate is: {peaks['Pacific']}")

# endregion

# region 2: Iteration
# 2.1: For Loops
# For loops are used to iterate over a sequence (like a list or a string) and perform an action for each item in the sequence.
spices = ["salt", "pepper", "cumin", "paprika", "cinnamon"]
for spice in spices:
    print(f"Adding {spice} to the recipe card.")
print("The recipe card is ready to print!")

# 2.2: While Loops
# While loops are used to repeat a block of code as long as a condition is true.
i = 5
while i < 100:
    print(f"Current value of i: {i}")
    i += 5  # Increment i by 5 each iteration
    print(f"value is now: {i}")
print(f"Final value of i: {i}")


#  Challenge:

#  1 print the name of all the fruits in the terminal each on a new line.
fruits = [
    'apples',
    'bananas',
    'dragon fruit',
    'mangos',
    'nectarines',
    'pears',
]
print("Fruits found in the list:")
for fruit in fruits:
    print(fruit)


# endregion

# region 3: External Code

# The testmodule.py file contains a function called mult that multiplies two numbers and prints the result.
# The function is imported and used in this script.
print("Using the mult function from testmodule.py:")
testmodule.mult(5, 10)
# The mult function can be used to multiply any two numbers.
testmodule.mult(3, 7)

# endregion


# region 4: Working with Strings

value = input("Enter a number: ")
# The input function takes user input and returns it as a string.
print(f"You entered: {value}")
# The strip method removes leading and trailing whitespace from a string.
print(f"Lets multiply {value} by 2.")
value_int = int(value.strip())
# The int function converts a string to an integer.
print(f"{value} * 2 = {value_int * 2}")

# The capitalize method capitalizes the first letter of a string.
first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize'

first_name_capitalized = first_name.capitalize()
last_name_capitalized = last_name.capitalize()
note_capitalized = note.capitalize()

print(f"Full name: {first_name_capitalized} {last_name_capitalized}")
print(f"Note: {note_capitalized}")

# Regular expressions (regex) are used to match patterns in strings.
# regex is a powerful tool for searching and manipulating strings.

five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'
# var regex will match a string that starts with exactly 5 digits
five_digit_expression = r'^\d{5}'
print("Checking if the strings match the five-digit zip code pattern:")
print(re.search(five_digit_expression, five_digit_zip))
print(re.search(five_digit_expression, nine_digit_zip))
print(re.search(five_digit_expression, phone_number))

# Challenge:

# Take value entered by user and convert it to kilometers.
# print result in terminal.
miles = input('Enter a distance in miles: ')
# kilometers_value = miles_value * 1.609344

miles_float = float(miles.strip())
kilometers_value = miles_float * 1.609344
print(f"{miles} mile(s) is equal to {kilometers_value} kilometers.")


# endregion

# region 8: Object-Oriented Programming
# Object-Oriented Programming (OOP) is a programming paradigm that uses objects to represent data and behavior.

# Classes are blueprints for creating objects. They define the properties and methods that the objects will have.
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start(self):
        print(f"The {self.year} {self.make} {self.model} is starting.")

    def stop(self):
        print(f"The {self.year} {self.make} {self.model} is stopping.")


# Creating an instance of the Car class
my_car = Car("Toyota", "Camry", 2020)
print(f"My car is a {my_car.year} {my_car.make} {my_car.model}.")
my_car.start()
my_car.stop()


# flips list example
# The flips list contains the results of coin flips.
flips = [
    'heads',
    'tails',
    'tails',
    'heads',
    'tails',
]
print(flips.count('heads'))  # Count the number of heads in the list
print(flips.pop())  # Remove and return the last item in the list
print(flips)  # Print the modified list after popping an item


# The Attendee class represents an attendee at an event.
class Attendee:
    'Common base class for all attendees'

    def __init__(self, name, tickets):  # Constructor method to initialize the Attendee object
        self.name = name
        self.tickets = tickets

    # Method to display the attendee's name and number of tickets
    def displayAttendee(self):
        print('Name : {}, Tickets: {}'.format(self.name, self.tickets))

    def addTicket(self):  # Method to add a ticket to the attendee's count
        self.tickets += 1
        print('{} tickets increased to {}'.format(self.name, self.tickets))


# Creating an instance of the Attendee class
attendee1 = Attendee("Alice", 2)
attendee2 = Attendee("Bob", 3)

# Displaying the attendee's information
attendee1.displayAttendee()
attendee2.displayAttendee()

# Adding tickets to the attendees
attendee1.addTicket()
attendee2.addTicket()
# Displaying the updated attendee information
attendee1.displayAttendee()
attendee2.displayAttendee()

# endregion
