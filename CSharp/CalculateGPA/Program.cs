// Calculate final GPA
using System;
// Prepare for guided project
string studentName = "Sophia Johnson";
string course1Name = "English 101";
string course2Name = "Algebra 2";
string course3Name = "Biology 101";
string course4Name = "Chemistry 101";
string course5Name = "Computer Science 101";

int course1Credit = 3;
int course2Credit = 3;
int course3Credit = 4;
int course4Credit = 4;
var course5Credit = 4;

// Store the numeric grade values for each course
int gradeA = 4;
int gradeB = 3;

int course1Grade = gradeA;
int course2Grade = gradeB;
int course3Grade = gradeB;
int course4Grade = gradeB;
int course5Grade = gradeA;

Console.WriteLine($"{course1Name}: {course1Grade}");
Console.WriteLine($"{course2Name}: {course2Grade}");
Console.WriteLine($"{course3Name}: {course3Grade}");
Console.WriteLine($"{course4Name}: {course4Grade}");
Console.WriteLine($"{course5Name}: {course5Grade}");

// Calculate the sums of credit hours and grade points
int totalCreditHours = 0;
totalCreditHours += course1Credit;
totalCreditHours += course2Credit;
totalCreditHours += course3Credit;
totalCreditHours += course4Credit;
totalCreditHours += course5Credit;

// totalCreditHours = course1Credit + course2Credit + course3Credit + course4Credit + course5Credit;

int totalGradePoints = 0;
totalGradePoints += course1Credit * course1Grade;
totalGradePoints += course2Credit * course2Grade;
totalGradePoints += course3Credit * course3Grade;
totalGradePoints += course4Credit * course4Grade;
totalGradePoints += course5Credit * course5Grade;

Console.WriteLine($"Total Grade Points: {totalGradePoints}\nTotal Credit Hours: {totalCreditHours}");
Console.WriteLine($"Course: {course1Name}\nGrade: {course1Grade}\nCredit: {course1Credit}");
Console.WriteLine($"Course: {course2Name}\nGrade: {course2Grade}\nCredit: {course2Credit}");
Console.WriteLine($"Course: {course3Name}\nGrade: {course3Grade}\nCredit: {course3Credit}");
Console.WriteLine($"Course: {course4Name}\nGrade: {course4Grade}\nCredit: {course4Credit}");
Console.WriteLine($"Course: {course5Name}\nGrade: {course5Grade}\nCredit: {course5Credit}");

//  Format the decimal output
Console.WriteLine($"Total Grade Points: {totalGradePoints}\nTotal Credit Hours: {totalCreditHours}");
// decimal gradePointAverage = totalGradePoints / (decimal)totalCreditHours;
decimal gradePointAverage = 3.99872831m;
Console.WriteLine($"Current GPA: {gradePointAverage}");
int leadingDigit = (int) gradePointAverage;
int firstDigit = (int) (gradePointAverage * 10) % 10;
int secondDigit = (int) (gradePointAverage * 100 ) % 10;
Console.WriteLine($"Final GPA: {leadingDigit}.{firstDigit}{secondDigit}");

// Format the output using escaped character sequences
Console.WriteLine($"Student: {studentName}\n");
Console.WriteLine("Course\t\t\t\tGrade\tCredit Hrs");
Console.WriteLine($"{course1Name}\t\t\t  {course1Grade} \t    {course1Credit}");
Console.WriteLine($"{course2Name}\t\t\t  {course2Grade} \t    {course2Credit}");
Console.WriteLine($"{course3Name}\t\t\t  {course3Grade} \t    {course3Credit}");
Console.WriteLine($"{course4Name}\t\t\t  {course4Grade} \t    {course4Credit}");
Console.WriteLine($"{course5Name}\t\t  {course5Grade} \t   {course5Credit}");
Console.WriteLine($"\nFinal GPA:\t\t\t {leadingDigit}.{firstDigit}{secondDigit}");