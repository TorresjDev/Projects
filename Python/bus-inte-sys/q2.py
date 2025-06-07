
# CIDM4310/5310-Quiz2 - Jesus Torres.ipynb_
# CIDM4310/5310-Quiz2 (10 points)


# Q1  Write a function called EvenOdd() with an argument number. The program should print out.
# For example,
# if the given number is 4, then print The number is even
# if the given number is 5, then print The number is odd

def EvenOdd(number):
    # put your answer below this line
    if number % 2 == 0:
        print("The number is even")
    else:
        print("The number is odd")


# do not change code in this cell
# run this cell to test your program cell
# Test even number
EvenOdd(4)
# Test odd number
EvenOdd(5)


# Q2 Write a function called MaxMinAvg() with an argument num_list. Given a list of integers, you function should return the max, min and average values of the given list.

# Hint:

# How to find the max and min of a list in Python: https://www.kite.com/python/answers/how-to-find-the-max-and-min-of-a-list-in-python
# How to find the average of a list in Python Using sum(): https://www.geeksforgeeks.org/find-average-list-python/

def MaxMinAvg(num_list):
    # put your answer below this line
    max_val = max(num_list)
    min_val = min(num_list)
    avg_val = sum(num_list) / len(num_list)
    return max_val, min_val, avg_val


# do not change code in this cell
# run this cell to test your program cell
num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print
max_val, min_val, avg_val = MaxMinAvg(num_list)
print(f'Max: {max_val}; Min: {min_val}; Avg:{avg_val}')
# Max: 9; Min: 0; Avg:4.5


# Q3 Write a function called SelectGrade with a argument gradebook_dict. Given a dictionary of the gradebook cosisting of name:grade pairs, your function should return a list of names whose grade is greater than 80 and less than 90 (80<grade<90).

# Hint:
# create an empty list selected_name = [] to hold names whose grade is 80<grade<90;
# iterate name:grade pairs in gradebook_dict using for loop, then use if statement to check if the grade is 80<grade<90, then append the name to the selected_name = [] list
# finally return the selected_name

def SelectGrade(gradebook_dict):
    # put your answer below this line
    selected_name = []
    print(gradebook_dict.items())
    for name, grade in gradebook_dict.items():
        if 80 < grade < 90:
            selected_name.append(name)
    return selected_name


# do not change code in this cell
# run this cell to test your program cell
gradebook_dict = {
    "Alice": 98,
    "Bob": 89,
    "Cathy": 75,
    "David": 99,
    "Jack": 70,
    "Tom": 66,
    "Mark": 88,
    "Tony": 69
}

selected_name = SelectGrade(gradebook_dict)
print(f"Print the names whose grade is greater than 80 and less than 90:", selected_name)
# Print the names whose grade is greater than 80 and less than 90: ['Bob', 'Mark']
# Please don't forget to Save your work after you complete all the questions
