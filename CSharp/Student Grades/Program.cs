// Student Grade Automation Calculation Application
using System;

// initialize variables - graded assignments
int currentAssignment = 5;

int sophiaA = 93;
int sophiaB = 89;
int sophiaC = 92;
int sophiaD = 95;
int sophiaF = 70;

int johnA = 88;
int johnB = 91;
int johnC = 75;
int johnD = 89;
int johnF = 65;

int janeA = 98;
int janeB = 91;
int janeC = 92;
int janeD = 91;
int janeF = 60;

int jimA = 93;
int jimB = 92;
int jimC = 89;
int jimD = 95;
int jimF = 70;

int sophiaSum = sophiaA + sophiaB + sophiaC + sophiaD + sophiaF;
int johnSum = johnA + johnB + johnC + johnD + johnF;
int janeSum = janeA + janeB + janeC + janeD + janeF;
int jimSum = jimA + jimB + jimC + jimD + jimF;

Console.WriteLine("Sophia: " + sophiaSum);
Console.WriteLine("John: " + johnSum);
Console.WriteLine("Jane: " + janeSum);
Console.WriteLine("Jim: " + jimSum);
Console.WriteLine("\n\n");

decimal sophiaScore = (decimal)sophiaSum / currentAssignment;
decimal johnScore = (decimal)johnSum / currentAssignment;
decimal janeScore = (decimal)janeSum / currentAssignment;
decimal jimScore = (decimal)jimSum / currentAssignment;

Console.WriteLine("Sophia Total Score: " + sophiaScore + " Grade: A");
Console.WriteLine("John Total Score: " + johnScore + " Grade: A");
Console.WriteLine("Jane Total Score: " + janeScore + " Grade: A");
Console.WriteLine("Jim Total Score: " + jimScore + " Grade: A");
Console.WriteLine("\n\n");

Console.WriteLine("Student\tGrade:");
Console.WriteLine("Sophia:\t" + sophiaScore + "\tA");
Console.WriteLine("John:\t" + johnScore + "\tB");
Console.WriteLine("Jane:\t" + janeScore + "\tB");
Console.WriteLine("Jim:\t" + jimScore + "\tA");