// Perform basic operations on numbers in C#

// Perform addition with implicit data conversion
int firstNumber = 12;
int secondNumber = 7;
Console.WriteLine(firstNumber + secondNumber);

string firstName = "Bob";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold " + widgetsSold + " widgets."); // Bob sold 7 widgets.
Console.WriteLine(firstName + " sold " + widgetsSold + 7 + " widgets."); // Bob sold 77 widgets.
Console.WriteLine(firstName + " sold " + (widgetsSold + 7) + " widgets."); // Bob sold 14 widgets.


// Perform math operations
int sum = 7 + 5;
int difference = 7 - 5;
int product = 7 * 5;
int quotient = 7 / 5;

Console.WriteLine("Sum: " + sum);
Console.WriteLine("Difference: " + difference);
Console.WriteLine("Product: " + product);
Console.WriteLine("Quotient: " + quotient);

decimal decimalQuotient = 7.0m / 5;
Console.WriteLine($"Decimal quotient: {decimalQuotient}");

int first = 7;
int second = 5;
decimal quotientDecimal = (decimal)first / (decimal)second;
Console.WriteLine(quotientDecimal);

Console.WriteLine($"Modulus of 200 / 5 : {200 % 5}");
Console.WriteLine($"Modulus of 7 / 5 : {7 % 5}");

int valueOne = 3 + 4 * 5;
Console.WriteLine(valueOne);
int valueTwo = (3 + 4) * 5;
Console.WriteLine(valueTwo);


// Increment and decrement values
int value = 0; //value = 0
value = value + 5; //value = 5
value += 5; //value = 10 += operator will add 5 to value
value++;           // ++ operator will increment value by 1
Console.WriteLine("Increment and Decrement operators")
Console.WriteLine("First: " + value);
Console.WriteLine($"Second: {value++}"); //increments after value is printed
Console.WriteLine("Third: " + value);
Console.WriteLine($"Fourth: {++value}");

int numVal = 1;
numVal = numVal + 1;
Console.WriteLine("First increment: " + numVal);
numVal += 1;
Console.WriteLine("Second increment: " + numVal);
numVal++;
Console.WriteLine("Third increment: " + numVal);
numVal = numVal - 1;
Console.WriteLine("First decrement: " + numVal);
numVal -= 1;
Console.WriteLine("Second decrement: " + numVal);
numVal--;
Console.WriteLine("Third decrement: " + numVal);


// Calculate Celsius to Fahrenheit
int fahrenheit = 94;
decimal celsius = (fahrenheit - 32m) * 5m / 9m; // the m is a suffix to the number to indicate it is a decimal number 
Console.WriteLine($"The temperature is {celsius} degrees Celsius.");