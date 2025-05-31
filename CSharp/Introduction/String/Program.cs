// See https://aka.ms/new-console-template for more information

Console.WriteLine("Hello, World!");
// basic string formatting
Console.WriteLine("Hello\nWorld!"); // \n will insert a new line
Console.WriteLine("Hello\tWorld!"); // \t will insert a tab
// Console.WriteLine("Hello "World"!"); //  will cause an error message to be displayed because the string is not properly formatted
Console.WriteLine("Hello \"World\"!"); // correct way to format a string using quotes 
// Console.WriteLine("c:\source\repos"); // will cause error escape sequence \s will not be recognized
Console.WriteLine("c:\\source\\repos"); // correct way to format a string using escape sequences

// mockup command
Console.WriteLine("Generating invoices for customer \"Contoso Corp\" ...\n");
Console.WriteLine("Invoice: 1021\t\tComplete!");
Console.WriteLine("Invoice: 1022\t\tComplete!");
Console.WriteLine("\nOutput Directory:\t");
Console.Write(@"c:\invoices");

Console.WriteLine("\n");

// verbatim string literal will allow you to use escape sequences using @ symbol instead of double backslashes
Console.WriteLine(@"file:  c:\source\repos    
            (this is where your code goes)");

Console.OutputEncoding = System.Text.Encoding.UTF8; // set the console output encoding to UTF-8 to allow unicode characters to be displayed
// Kon'nichiwa World - unicode characters 
// To generate Japanese invoices:
// Nihon no seikyū-sho o seisei suru ni wa:
Console.Write("\n\n\u65e5\u672c\u306e\u8acb\u6c42\u66f8\u3092\u751f\u6210\u3059\u308b\u306b\u306f\uff1a\n\t"); // unicode Japanese characters
// User command to run an application
Console.WriteLine(@"c:\invoices\app.exe -j");

/*
Recap
Here's what you've learned about formatting literal strings so far:

Use character escape sequences when you need to insert a special character into a literal string, like a tab \t, new line \n, or a double quotation mark \".
Use an escape character for the backslash \\ when you need to use a backslash in all other scenarios.
Use the @ directive to create a verbatim string literal that keeps all whitespace formatting and backslash characters in a string.
Use the \u plus a four-character code to represent Unicode characters (UTF-16) in a string.
Unicode characters may not print correctly depending on the application.
*/


// string concatenation
string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName;
// Console.WriteLine("Hello " + fullName);
Console.WriteLine("Hello " + firstName + " " + lastName);

/*
Here's what you've learned about string concatenation so far:

String concatenation allows you to combine smaller literal and variable strings into a single string.
Avoid creating intermediate variables if adding them doesn't increase readability.
*/


// string interpolation
string firstNamei = "Jim";
string lastNamei = "Doe";
string fullNamei = $"{firstNamei} {lastNamei}"; // using the $ character to indicate string interpolation 
// Console.WriteLine("Hello " + fullNamei);
Console.WriteLine($"Hello {firstNamei} {lastNamei}");

// int version = 11;
// string updateText = "Update to Windows";
// string message = $"{updateText} {version}";
// Console.WriteLine(message);

int version = 11;
string updateText = "Update to Windows";
Console.WriteLine($"{updateText} {version}!");

string projectName = "First-Project";
Console.WriteLine($@"C:\Output\{projectName}\Data");

/*
Here's what you've learned about string interpolation so far:

String interpolation provides an improvement over string concatenation by reducing the number of characters required in some situations.
You can combine string interpolation and verbatim literals by combining the symbols for each and using that as a prefix for the string template.
*/ 

Console.WriteLine("\n");

string projectNamei = "ACME";
Console.OutputEncoding = System.Text.Encoding.UTF8; // set the console output encoding to UTF-8 to allow unicode characters to be displayed

string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";
string englishLocation = $@"c:\Exercise\{projectNamei}\data.txt";
Console.WriteLine($"View English output:\n\t\t{englishLocation}\n");

string russianLocation = $@"c:\Exercise\{projectNamei}\ru-RU\data.txt";
Console.WriteLine($"{russianMessage}:\n\t\t{russianLocation}\n");
