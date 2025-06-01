infile = open('values.txt', 'rt')  # Open the input file in text mode
outfile = open('values-totaled.txt', 'wt')  # Open the output file in text mode
print('Processing input')
sum = 0
for line in infile:
    sum += int(line)  # Convert each line to an integer and add to sum
    # Write each line to the output file without trailing newline
    print(line.rstrip(), file=outfile)
# Write the total to the output file
print('\nTotal: ' + str(sum), file=outfile)
outfile.close()  # Close the output file
print('Output complete')
