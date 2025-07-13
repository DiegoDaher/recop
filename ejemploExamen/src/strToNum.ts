function convertToNumbers(arr: string[]): number[] {
  return arr.map(str => parseInt(str));
}
console.log(convertToNumbers(["1", "2", "3"]));

let str_num: string = "200";
let numberFromAssertion: number = parseInt(str_num); // Using parseInt to convert
console.log("Number from assertion:", numberFromAssertion);

// Using type assertion to convert a number to a string
let numberValue: number = 200;
let stringFromAssertion: string = numberValue.toString(); // Using toString() method to convert
console.log("String from assertion:", stringFromAssertion);