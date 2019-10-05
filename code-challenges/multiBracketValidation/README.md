# Challenge Summary
Multi-bracket Validation.

## Challenge Description
Your function `multiBracketValidation(input)` should take a string as its only argument,and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : `()`
Square Brackets : `[]`
Curly Brackets : `{}`

## Approach & Efficiency
1. Declared a character stack which will hold an array of all the opening parenthesis.
2. Traversed through the input string
3. If the current character is a starting bracket `‘(‘ or ‘{‘ or ‘[‘` then push it to stack.
4. If the current character is a closing bracket `‘)’ or ‘}’ or ‘]’` then pop from stack and if the popped character is not the matching starting bracket then return false.
5. After complete traversal, if there is some any starting brackets left in the stack then return false.

## Solution

