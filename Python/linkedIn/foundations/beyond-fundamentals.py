# Python

# Programming Foundations: Beyond the Fundamentals


# region 1: Collections

# 1.1: Lists
# Lists are simple collections of groups of data together in a certain order and assigns the collection a name.

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
