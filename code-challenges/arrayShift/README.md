# Challenge Summary
Create a function to insert a value into the middle of an array.

## Challenge Description
The function takes in 2 paramaters, an array and a value to insert. For any length of array the passed in value must be inserted in the middle of the array.

Example:
Input
[2,4,6,8], 5	
Output
[2,4,5,6,8]

## Approach & Efficiency
I first set a variable equal to the middle index where I wanted to insert the new value. I then looped through the passed in array. If the loop index was less or greater than the middle index than I inserted the corresponding values fromt he original array. If the middle index was equal to the loop index then I inserted the value parameter.

## Solution
<!-- Embedded whiteboard image -->