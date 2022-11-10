var colors = ["blue", "red", "orange", "pink"]
var luckyNums = [13, 37, 23, 11]
var boolean = [(2 === 3), (5 > 7), (3 === 3), (4 !== 5)]

console.log(colors.pop())
console.log(colors)

// This method will remove the last element from the array and return the value of that element.
// Expected output of the method will be pink.
// Expected output of the array will now be [ 'blue', 'red', 'orange' ].

console.log(luckyNums.push(21))
console.log(luckyNums)

// This method will add a new element, in this case 21, to the end of the array and return the new length of the array as an integer.
// Expected output of the method will be 5.
// Expected output of the array will now be [ 13, 37, 23, 11, 21 ].

console.log(boolean.shift())
console.log(boolean)

// This method will remove the first element, in this case (2 === 3), from the array and return the value of that element.
// Expected output of the method will be false since 2 != 3.
// Expected output of the array will now be [ false, true, true ].

// The index position is an integer representing the position a variable inside an array is in. The index count always starts at zero and goes up incrementally by 1.
// If we wanted to print the value of the third number in the luckyNums array we could use:

console.log(luckyNums[2])

// Expected value is 23.