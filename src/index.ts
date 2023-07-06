// console.log('helllo')


// let age:number = 70;
// console.log(age)

// let age2: number = 55;
// let name2: string = ' josh';
// let info = age2 + name2
// console.log(info)

// let animal = (anname:string , age:number)=>{
//     console.log(`${anname} ${age}`);
// }

// let strArr:[string,string,string,number] = ['h','h','j',7]
// console.log(strArr)

// let myList :(number | string)[] = [1,2,3,4,'alex','l']
// console.log(myList)


// let nameAge : [string,number] = ['you',55];
// nameAge.push('gh')
// console.log(nameAge)


// enum Mesuares {cm=3,m=3,ft=7}
// console.log(Mesuares.ft)

// function mToCm(num:number):number{
//     return  num * 100
// }
// console.log(mToCm(66))



// let student:{
//     readonly name:string,
//     age:number,
//     height:number,
//     lname? : string
// } ={
//     name: 'adam',
//     age : 44,
//     height: 190
// };
// student.lname='ahmed'
// console.log(typeof student)
// console.log( student)




// HOME____WORK

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list:Array<number>) {
return list.reverse();
}
console.log(reverseList([1, 2, 3, 4]))




// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
function getChar(c:number){
  // ..
  return String.fromCharCode(c)
}
console.log(getChar(55))

// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: If we try to print tis we will get 118 but it would be better to set a equals to number 
console.log(a)

let b = 'Thieves';
// // A: same as question number 1 but we should set b to equal to type of string

console.log(b)

let c = [true, false, false];
// // A: will get the kist printed nut we should make it equal to boolean

console.log(c)

// let d = {age: number};
// // A: number is a type so the right way to write this would be let d : {age:number, ETC.....} = { age : 55 }

let e = [3]
// // A: we won't get to an error but best practice would to set the type of our data which in this case is number  

let f;
// // A:will get undefined output
console.log(f)

let g = []
// // A: this has a  type of any so it should have an input inside the brackets we will get an error if we keep it like this 



// // 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear? : number,
} = {
    title: 'Lose Yourself'
};
// // A: the song should have two inputs since two types were defined so we can't print title unless we define (releaseYear) or set it to optional
//  like this releaseYear ? :number

let prices= ['100', 200, 300];
prices[0] = '$100'
// // A: the type of data we are inputing and returning is number so if we try to return a string it is going to break 
// a fix for that would be to make index at [0] a string or  to set the list equal to type of number or string 

function myFunc(a: number, b: number): number {
    return a + b
}
// // A:this function must return a, b if we don't return them it won't work
console.log( myFunc(5,6))