# Kargo assessment 

## Question:

Convert an array of integers into an array of strings representing the phonetic equivalent of the
integer.

### For example:

Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

# Solution:
Given an array: [1278234,39426311,434341,23,423,423] 
For each digit,to find it's phonetic equivalent I defined an array with all the number phonetics to get a digit's phonetic by its index:
["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]

### Then I tried three ways to solve the whole problem:
* converted the number to a string and iterated through the given array/converted string array using "for" to get each digit's phonetic
* converted the number to a string and iterated through the given array/converted string array using "reduce" to get each digit's phonetic
which had better performance
* getting each digit by modulo without converting to string and using "reduce" gives me the performance

### Benchmark result:

benchmark1: 0.203ms

OneTwoSevenEightTwoThreeFour,ThreeNineFourTwoSixThreeOneOne,FourThreeFourThreeFourOne,TwoThree,FourTwoThree,FourTwoThree

benchmark2: 0.47ms

OneTwoSevenEightTwoThreeFour,ThreeNineFourTwoSixThreeOneOne,FourThreeFourThreeFourOne,TwoThree,FourTwoThree,FourTwoThree

benchmark3: 0.1ms

OneTwoSevenEightTwoThreeFour,ThreeNineFourTwoSixThreeOneOne,FourThreeFourThreeFourOne,TwoThree,FourTwoThree,FourTwoThree
