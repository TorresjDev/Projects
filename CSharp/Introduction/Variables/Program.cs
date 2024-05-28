string firstName; //string variable
firstName = "Bob"; //assigning a value to the variable
Console.WriteLine(firstName);
firstName = "Liem"; //assigning a new value to the variable
Console.WriteLine(firstName);
// firstName = "Isabella"; //assigning a new value to the variable
// Console.WriteLine(firstName);
// firstName = "Yasmin";
// Console.WriteLine(firstName);

char userOption; //character variable

userOption = 'A'; //character variable

int gameScore = 1500; //integer variable initialized with a value

double numberOfStars = 1.61803398875; //double variable
Console.WriteLine(numberOfStars);

decimal particlesPerMillion; //decimal variable

particlesPerMillion = 0.0000001M; //initialize the variable with a value

bool processedCustomer; //boolean variable

processedCustomer = true; //boolean variable

Console.WriteLine(userOption + ": " + firstName + " has a score of " + gameScore + " and " + particlesPerMillion + " particles per million. Customer has been processed: " + processedCustomer + ".");

// Recap
// Here's what you've learned so far about variables:

// Variables are temporary values you store in the computer's memory.
// Before you can use a variable, you have to declare it.
// To declare a variable, you first select a data type for the kind of data you want to store, and then give the variable a name that follows the rules.

// You must assign (set) a value to a variable before you can retrieve (get) a value from a variable.
// You can initialize a variable by assigning a value to the variable at the point of declaration.
// Assignment happens from right to left.
// You use a single equals character as the assignment operator.
// To retrieve the value from the variable, you merely use the variable's name.


// Declare implicitly typed local variables
var message = "Hello world!"; //implicitly typed variable
// var message; //(1,5): error CS0818: Implicitly-typed variables must be initialized

// message = 10.703m; // (2,11): error CS0029: Cannot implicitly convert type 'decimal' to 'string'
Console.WriteLine(message);

// Recap
// Here's what you've learned about the var keyword so far:

// The var keyword tells the compiler to infer the data type of the variable based on the value it is initialized to.
// You'll likely see the var keyword as you read other people's code; however, you should use the data type when possible.

string name = "Bob";

int number = 3;

double average = 34.4;

Console.WriteLine("Hello, " + name + "! You have " + number + " messages in your inbox. The temperature is " + average + " celsius.");

string name1 = "Bob";
int messages = 3;
decimal temperature = 34.4m;

Console.Write("Hello, ");
Console.Write(name1);
Console.Write("! You have ");
Console.Write(messages);
Console.Write(" messages in your inbox. The temperature is ");
Console.Write(temperature);
Console.Write(" celsius.");


//I am emailing you for missing class today, I have my interview with CSI today. I will be back in class tomorrow. Thank you. 
