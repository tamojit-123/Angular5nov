function add(num1: number, num2: number): number {
    return num1 + num2;
}

//declare variables with number data type
let a: number = 10;
let b: number = 20;
//Executes successfully and return the sum
console.log("Sum " + add(a, b));
//declare variable with string data type
let c: string = "John";
//Gives Compilation error as argument type is not matching
console.log("Sum " + add(a, b));