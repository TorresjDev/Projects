# No need to import built-in functions specifically
# Example imports for external libraries
import os
import sys

# ? Chapter 7 - Files A - Reading and Writing Files
#    -file processing
#       a text file can be thought of as a sequence of lines
# How to read a file
#  1. Open the file: open(filename, mode) - returns a file handle, a variable used to perform operations on the file
#   handle = open(filename, mode) - filename is the name of the file to be opened, mode is the mode in which the file is to be opened, mode is optional and 'r' is the default mode

fhand = open('mbox.txt')
print(fhand)

# *Newline Character
# special character called 'newline' that is used to indicate the end of a line
# represented by the character '\n'
# Newline is still one character

stuff = "Hello\nWorld!"
print(stuff)
stuff = "X\nY"
print(stuff)
print(len(stuff))

#!CHAPTER END

# ? Chapter 7 - Files B - File Handle as a Sequence
# a file handle open for reading is a sequence of strings
# use for statement to iterate through the lines of the file
# sequence is an ordered set of values
xfile = open('mbox.txt')
for cheese in xfile:
    print(cheese)

# Counting lines in a file
# count the lines and print the number of lines in the file.
fhand = open('mbox.txt')
count = 0
for line in fhand:
    count = count + 1
print('Line Count:', count)

# reading the Whole file
# read the whole file into a single string

fhand = open('mbox.txt')
inp = fhand.read()  # read() reads the whole file into a single string
print(len(inp))
print(f'File reads as:({inp}) \n lines count: ({
      len(inp)})')  # Replace $ with comma
print(inp[:20])  # print first 20 characters of the file

# searching through a file(fixed)
# stripping the whitespace from each line of string using rstrip() function
# newline is considered a whitespace and is stripped.
for line in fhand:
    line = fhand.rstrip()
    if line.startswith('The'):
        print(line)


# prompt for file name
fname = input("Enter the file name: ")
try:
    fhand = open(fname)
except:
    print('File not found: ', fname)
    quit()  # quit will exit the program if file is not found

count = 0
for line in fhand:
    if line.startswith('Movie:'):
        count = count + 1
print(f'There were {count} movies in file: {fname}')
