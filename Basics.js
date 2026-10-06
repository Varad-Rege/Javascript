//Js is case sensitive


//Mathematical operations can be performed
2 + 2
10 - 3
10 * 3
10 / 2

2 + 2 + 2
2.2 + 2.2

// Order of operations - BODMAS
1 + 1 * 3
(1 + 1) * 3

20.95 + 7.99 * 2
36.93 * 0.1
(20.95 + 7.99 * 2) * 0.1

// Inaccuracies occur when you deal with floats
0.1 + 0.2
20.95 + 7.99 //gives 28.939999999999998

// This can prove to be fatal when dealing with monetary amounts, eg: Amazon checkout
// So, solution is to first convert values to  whole number and then perform operation on them and at last convert them back to float
(2095 + 799) / 100


// How to round numbers:
Math.round(2.2) // gives 2
Math.round(2.8) // gives 3

// problem occurs when you have to round off 2.894 to 2.89, so like above first convert to whole number, perform operation round off and then convert back to float.
// remember round off function follows operation precedence too.
((2095 + 799) * 0.1) / 100
Math.round((2095 + 799) * 0.1) / 100

// Rounding numbers up
Math.ceil(2.2) // gives 3
// Ronding numbers down
Math.floor(2.8) // gives 2

// Strings denoted by '..' or ".." 
'hello'
alert('hello'); // creates a alert popup

// string concatenation
'some' + 'text'
'some' + 'more' + 'text'

//  to get type of a data use typeof
typeof 2
typeof 'hello'

// type coercion (here 3 acts as a string and is added)
'hello' + 3 // gives hello3

'$' + (2095 + 799) / 100 // gives $28.94

// escape characters - \' and \" and  \n (new line)
"hello"
"I'm learning JavaScript"

'I\'m learning JavaScript'
alert('some\ntext');



// Output using Concatenation (uses ')
'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

//  `..` is called template string ( ` is a back tick)
`hello`
// multi line string possible only with template strings
`some
line`  // this is equivalent to 'some\nline'

// Output using Interpolation (much cleaner than concatenation and recommended way) 
// (uses ` and ${ }=allows us to insert values directly in string)
`Items (${1 + 1}): $${(2095 + 799) / 100}`
