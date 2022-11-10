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