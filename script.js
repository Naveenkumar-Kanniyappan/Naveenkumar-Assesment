// 1. Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase,
// number, or other sequences of characters that reads the same forward and backward.
// Test Cases:
// I. Input: racecar
// Output: true



// function palindromeName(input){

//     let reversedInput = input.split('').reverse().join('');

//     //name  equal name result is true
//     let result = true;

//     for (let i = 0; i < input.length; i++) {

//         // neme not equal name result is false 
//         if (input[i] !== reversedInput[i]) {

//             result = false;

//             break;
//         }
//     }

//     console.log(result);
    
//     return result;
// }

// let inName = prompt("Enter the palindrome name :");
// palindromeName(inName);

//=================================================================================================================

// 2. Write a function that takes an integer as input and counts how many prime numbers are less
// than the given integer. A prime number is a number that is greater than 1 and is divisible only
// by 1 and itself.
// Test Cases:
// I.
// Input: 10
// Output: 4
// Explanation:
// The prime numbers less than 10 are 2, 3, 5, 7. There are 4 prime numbers.


// function countPrimeNumber(input) {
//     let count = 0;


//     //ex: input =10,  find the numbers= 2,3,4,5,6,7,8,9
//     for (let num = 2; num < input; num++) {

//         //the prime numbers is found so true
//         let primeNum = true;

//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {

//                 // the non-prime numbers so false
//                 primeNum = false;
//                 break;
//             }
//         }

//         if (primeNum) {
//             count++;
//         }
//     }

//     return count;
// }

// let inNomers = prompt("Enter a number: ");
// let result = countPrimeNumber(Number(inNomers));
// console.log("input",inNomers,"calculate the prime numbers =",result);

// ====================================================================================================================================

// 3. Write a function that calculates the sum of all even numbers in a given array of integers. If no
// even numbers are found in the array, return 0.
// Test Cases:
// I.
// Input: [3, 6, 9, 12]
// Output: 18
// Explanation:
// The even numbers are 6 and 12, so the sum is 6 + 12 = 18.



// //input is prompt
// let input = prompt("Enter the numbers:");

// // string to covert array
// let arr = input.split(",");

// let result = 0;

// for (let i = 0; i < arr.length; i++) {

//     let num = Number(arr[i]);


//     //2/num = 0 ; numbers only add for result
//     if (num % 2 === 0) {
        
//         result += num; 
//     }
// }

// console.log(result);

//===================================================================================================================================================
// 4. Write a function that takes an array containing both numbers and strings, and returns a new
// array with numbers sorted in ascending order and strings sorted alphabetically.
// Test Cases:
// I.
// Input: [42, "apple", 17, "banana", 2]
// Output: [2, 17, 42, "apple", "banana"]
// Explanation:
// Numbers: [42, 17, 2] → sorted: [2, 17, 42]
// Strings: ["apple", "banana"] → ["apple", "banana"] already sorted alphabetically

// function sortArray(arr) {

//     //input numbers and words store the seperate variables
//     let numbers = [];
//     let strings = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === "number") {
//         numbers.push(arr[i]);
//       } else if (typeof arr[i] === "string") {
//         strings.push(arr[i]); 
//       }
//     }
//     numbers.sort((a, b) => a - b); 
//     strings.sort(); 
//     return [...numbers, ...strings];
// }
// let inputStr = prompt("Enter numbers and words ");

// let input = inputStr.split(',').map(arrNum => {

//     let trimNum = arrNum.trim();
//     let number = Number(trimNum);
//     return isNaN(number) ? trimNum : number;
// });

// let output = sortArray(input);
// console.log(output); 


//====================================================================================================================================================

// 5. Create a Student Marksheet System to manage student details, calculate total marks,
// percentage, and determine pass/fail status based on their percentage.
// a. Add Student:
// i.
// Add a student with unique ID, Name, Marks (array, min 2 marks), Subjects (array,
// min 2 subjects).
// ii.
// Auto-calculate Total Marks, Percentage, and Pass/Fail (Pass if percentage ≥
// 50%).
// b. Display Students:
// i.
// Show all students with ID, name, marks, subjects, total marks, percentage, and
// pass/fail status.
// c. Update Student:
// i.
// Update marks or subjects by student ID.
// ii.
// Recalculate Total Marks, Percentage, and Pass/Fail.
// d. Delete Student:
// i.
// Delete a student by their unique ID.

// let action;
// let details = [];

// do {
//     //select the option for Student marksheet system
//   action = prompt(`
//     Student Marksheet System
//         1. Add Student
//         2. Display Students
//         3. Update Student
//         4. Delete Student
//         5. Exit
//   `);

//   switch (action) {

//     //Add the student detils(name,mark,subject) and generate the uniqueId

//     case "1": {
    
//         let uniqueId;
//         do {
//           uniqueId = Math.floor(Math.random() * 9000) + 1000;
//         } while (details.some(student => student.uniqueId === uniqueId));
//         let name = prompt("Enter the student name:");

//         let marks = [];
//         let subjects = [];

//         for (let i = 0; i < 2; i++) {
//           let mark = parseInt(prompt(`Enter marks for subject ${i + 1}:`));

//           while (isNaN(mark) || mark < 0) {
//             mark = parseInt(prompt(`Please enter valid marks for subject ${i + 1}:`));
//           }
//           marks.push(mark);

//           let subject = prompt(`Enter the name of subject ${i + 1}:`);
//           subjects.push(subject);
//         }

//         //evaluvate student pass or fail

//         let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
//         let percentage = (totalMarks / (marks.length * 100)) * 100;
//         let status = percentage >= 50 ? "Pass" : "Fail";


//         let student = {
//           uniqueId: uniqueId,
//           name: name,
//           marks: marks,
//           subjects: subjects,
//           totalMarks: totalMarks,
//           percentage: percentage,
//           status: status
//         };

//         details.push(student);
//         alert(`Student ${name} added successfully!`);
//         break;
//     }

//     //Display the all students detils 

//     case "2": {
     
//         if (details.length === 0) {
//           alert("No students available.");
//         } else {
//           let studentsList = "Students List:\n";
//           details.forEach(student => {
//             studentsList += `ID: ${student.uniqueId},\n Name: ${student.name},\n Marks: ${student.marks.join(", ")},\n Subjects: ${student.subjects.join(", ")},\n Total Marks: ${student.totalMarks},\n Percentage: ${student.percentage.toFixed(2)}%,\n Status: ${student.status}\n`;
//           });
//           alert(studentsList);
//         }
//         break;
//     }

//     //edit particular student detils

//     case "3": {
    
//         let studentId = parseInt(prompt("Enter the ID of the student to update:"));
//         let student = details.find(student => student.uniqueId === studentId);
//         if (student) {
//           let marksUpdated = [];
//           let subjectsUpdated = [];

//             //asign remarks and name of the subject

//           for (let i = 0; i < student.marks.length; i++) {
//             let newMark = parseInt(prompt(`Enter new marks for ${student.subjects[i]}:`));

//             while (isNaN(newMark) || newMark < 0) {
//               newMark = parseInt(prompt(`Invalid input. Enter valid marks for ${student.subjects[i]}:`));
//             }
//             marksUpdated.push(newMark);

//             let newSubject = prompt(`Enter new name for subject ${i + 1}:`);
//             subjectsUpdated.push(newSubject);
//           }

//           student.marks = marksUpdated;
//           student.subjects = subjectsUpdated;

//           student.totalMarks = marksUpdated.reduce((sum, mark) => sum + mark, 0);
//           student.percentage = (student.totalMarks / (marksUpdated.length * 100)) * 100;
//           student.status = student.percentage >= 35 ? "Pass" : "Fail";

//           alert(`Student ${student.name} updated successfully.`);
//         } else {
//           alert("Student not found.");
//         }
//         break;
//     }

//     //delet the student detils for Student Marksheet

//     case "4": {
//         let studentIdToDelete = parseInt(prompt("Enter the ID of the student to delete:"));
//         let studentIndex = details.findIndex(student => student.uniqueId === studentIdToDelete);
//         if (studentIndex !== -1) {
//           details.splice(studentIndex, 1);
//           alert("Student deleted successfully.");
//         } else {
//           alert("Student not found.");
//         }
//         break;
//     }


//     //Fill the form exit  Student Marksheet system

//     case "5": {
//         alert("Exiting Student Marksheet System.");
//         break;
//     }

//     default:
//       alert("Invalid option. Please try again.");
//       break;
//   }

// } while (action !== "5");
// console.log(details);


// //============================================================================================================================================