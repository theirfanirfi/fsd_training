// // arithematic operations
// /* 
// +
// -
// /
// *
// %
// */

// console.log(5+6)
// console.log(5+6+2)
// console.log((5+6+2)/2)
// console.log(((5+6+2)/2)*2)
// console.log(5)

// //variables
// // num = 5

// // num =6 

// // int
// // float
// // char
// // String
// // double

// // int num2;
// // num2 = 2;

// // let
// // var
// // const

// let num1 = 5;
// let num2 = 6;
// let result = num1+num2;
// let div_result = result/2
// let multiplication_result = div_result*2;

// // 'this is ' the result of '
// console.log(num1+' + '+num2+' = ',multiplication_result)

// num1 = 'a'
// console.log(num1);

// num1 = 5.5
// console.log(num1);

// num1 = "my name is khan"
// console.log(num1);

// let student_name = "khan";
// let subj1 = "html";
// let subj2 = "css";
// let subj3 = "js";
// let subj4 = "react";
// let subj5 = "nodejs";
// let subj6 = "expressjs";

// console.log(student_name+" is enrolled in: ",subj1, subj2, subj3, subj4, subj5)

// let subjects = ["html", "css","js","nodejs","expressjs", "mongodb"]
// console.log(student_name+ " is enrolled in: ",subjects);
// console.log(student_name+"'s first subject is: ",subjects[0])
// console.log(student_name+"'s last subject is: ",subjects[1])
// console.log(student_name+"'s last subject is: ",subjects[2])
// console.log(student_name+"'s last subject is: ",subjects[3])
// console.log(student_name+"'s last subject is: ",subjects[4])
// console.log(student_name+"'s last subject is: ",subjects[5])


// //loops
// // for 
// // while
// // do while
// for(let i = 1;i<11;i++){
//     console.log('2 * ',i,' = ',2*i);
// }

// for(let i = 0;i<6;i++){
//     console.log(subjects[i])
// }

//control statements

let age = 18
b = true;

// if (age <= 18){
//     console.log('you are allowed to play the shooting game');
// }else {
//     console.log("You are not allowed to play the game. ");
// }

//comparison
// >
// <
// >=

// if
// else if
// else

// switch

// logical

// !
// ==
// ===
// != 
// &
// | 

// age = 17
// let height = 5.5
// let weight = 40
// if(age >= 18 && height >= 5.5){
//     console.log("The player is allowed to play basket ball game");
// }else if (age >=15 && weight <= 80){
//     console.log("You can play cricket");
// }else {
//     console.log("Please sit at home and do some exercise");
// }
// age = 17
// weight = 40
// switch(age){
//     case 17:
//         switch(weight){
//             case 40:
//                 console.log("You can play cricket")
//                 break;
//             case 80:
//                 console.log("You can play chess");
//                 break;
//         }
//         console.log("The number stored in age variable is 17");
//         break;
//     case 18:
//         console.log("The number is 18");
//         break;
//     default:
//         console.log("It is neither 17 nor 18");
// }
// let weight = 40
// if(age >=15){
//     if(weight <= 80){
//         console.log("You can play cricket");
//     }else if (height >= 5.5){
//         console.log("You can play basket ball");
//     }else {
//         console.log("we will find an appropriate game selection for you.")
//     }
// }else if (age >= 8){
//     console.log("You can participate in marathon");
// }else {
//     console.log("You can play with kids");
// }

// let sum = 0;
// for(let i = 1;i<=10;i++){
//     sum = sum + i;
// }
// console.log('sum is :',sum);

// let obtained_marks = 500
// let total_marks = 600
// console.log("percentage: ",obtained_marks/total_marks*100);

// let student_name = "ABC";
// let subject_marks = [20,30,80,30,25,15];
// let total_marks = 600
// let obtained_marks = 0;

// for(let i = 0;i<=5;i++){
//     //console.log('obtained marks old value: ', obtained_marks, 'obtained marks new value', obtained_marks+subject_marks[i])
//     obtained_marks = obtained_marks + subject_marks[i]
// }
// let average_marks = obtained_marks/6;
// let percentage = obtained_marks/total_marks*100

// if(percentage > 60 && percentage < 70){
//     console.log("Your grade is C");
// }else if(percentage > 70 && percentage < 80){
//     console.log("your grade is B")
// }else if(percentage > 80 && percentage < 90){
//     console.log("Your grade is A")
// }else if(percentage > 90 && percentage <=100){
//     console.log("your grade is A+")
// }else {
//     console.log("Fail, don't give up, try again, failure is the first step towards success");
// }


// console.log('obtained marks: ', obtained_marks);
// console.log('Percentage: ', percentage);

// let students = ["Hasnain","Noman","Sajad"]
// let student_marks = [
//     [80,90,75],
//     [65,75,96],
//     [55,45,85]
// ]

// for(let i =0;i<3;i++){
//     console.log("Student Name: ",students[i])
//     console.log(students[i]," marks are: ");
//     for(let j =0; j<3;j++){
//         console.log('subject',j+1,student_marks[i][j]);
//     }
// }

// let i = 1;
// let number = 2;

// while(i<=100)
// {
//     if(i % 2 == 1){
//         console.log(i, ' is odd number');
//     }

// i = i + 1;
// }

// let x = true;

// do {
// console.log("I am a do-while loop.");

// if(i > 100){
//     x=false;
//     console.log('The value of i is  > 100 ', i);
//     console.log('exiting loop', i);
// }

// i = i + 1;

// }while(x == true);

// console.log('I am outside of loop now');

// let a = 10;
// let c = 20;

// console.log('sum = ',a+c);

// a = 15;
// c = 35;

// console.log('sum = ',a+c);

// function sum(num1, num2, num3){
//     return num1+num2+num3;
//     // console.log(num1,'+',num2,'+',num3,' = ', num1+num2+num3);
// }

// let r1 = sum(1,2, 3);
// let r2 = sum(2,4, 4);
// let r3 = sum(8,3, 5);

// let overall_result = sum(r1, r2, r3);
// console.log('Result = ', overall_result);

// function calculator(num1, num2, operator){
//     if (operator == '+'){
//         return num1+num2;
//     }else if(operator == '-'){
//         return num1-num2;
//     }else if(operator == '/'){
//         if(num2 == 0){
//             console.log("Division by zero is not allowed");
//             return false;
//         }
//         return num1/num2;
//     }else {
//         return  false;
//     }
// }
// let result = 0
// result = calculator(1,2,'+');
// console.log(result);

// result = calculator(2,4,'-');

// console.log(result);

// result = calculator(4,0,'/');

// console.log(result);


// function switchCalculator(num1, num2, operator){
//     switch(operator){
//         case '+':
//             return num1+num2;
//         case '-':
//             return num1-num2;
//         case '/':
//             if(num2 ==0){
//                 console.log('Division by zero is not allowed');
//                 return false;
//             }
//             return num1/num2;
//         default:
//             return false;
//     }
// }


// Student
// rollnumber
// batch
// current semester
// curret cgpa
//subjects
// age

class Student {
    static counter = 0;

    constructor(name, rollnumber, age, cgpa, batch, subjects){
        this.name = name
        this.rollnumber = rollnumber
        this.age = age
        this.cgpa = cgpa
        this.subjects = subjects
        this.batch = batch
        this.marks = []
        this.obtained_marks = 0
        this.average_marks = 0
    }
    
    enrollSubject(subject_name){
        if(this.subjects.length < 3){
         this.subjects.push(subject_name);
        }
    }

    getNumberOfEnrolledSubjects(){
        return this.subjects.length;
    }

    assignMarks(marks){
        let no_of_marks_assigned = this.marks.length
        let number_of_enrolled_subjects = this.subjects.length;

        if(no_of_marks_assigned < number_of_enrolled_subjects){
            this.marks.push(marks);
        }
    }

    getAverageMarks(){
       
        for(let i =0; i<this.subjects.length;i++){
            this.obtained_marks = this.obtained_marks + this.marks[i];
        }

        this.average_marks = this.obtained_marks/this.subjects.length;

    }

}

// let s1 = new Student();
// s1.name = "Ahmad";
// s1.age = 21
// s1.batch = 2025
// s1.cgpa = 4.0
// s1.rollnumber = 1234
// s1.subjects = ["HTML","CSS","Javascript"];

// console.log(s1);

// let s2 = new Student();
// s2.age = 22
// s2.name = "Khan"
// s2.batch = 2025
// s2.cgpa = 0
// s2.rollnumber = 4321

// console.log(s2)

let s1 = new Student("Ahmad", 1234, 21, 4.0, 2025, []);
s1.enrollSubject("HTML");
s1.enrollSubject("CSS");
s1.enrollSubject("Javascript");
s1.enrollSubject("React");

// console.log(s1);
console.log(`The student ${s1.name} is enrolled in ${s1.getNumberOfEnrolledSubjects()} subjects`)

s1.assignMarks(50);
s1.assignMarks(55);
s1.assignMarks(75);
s1.assignMarks(85);

s1.assignMarks(95);
s1.getAverageMarks();
console.log(s1)


let s2 = new Student();
console.log(s2);

Student.incrementCounter();