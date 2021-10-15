# logicbyjavascript
This repo is for store javascript common question logic on interview.
The question must be insert in this file with title and question itself, then you must code the solution in index.js file

## List of question
<span>1.</span> Mumbling<br/>
   ```
    Create a function called mumbling with string parameter then return like this example below:

    mumbling("abcd") -> "A-Bb-Ccc-Dddd"
    mumbling("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    mumbling("cwAt") -> "C-Ww-Aaa-Tttt"
   ```
<span>2.</span> Square Every Digit<br/>
  ```
    You are asked to square every digit of a number and concatenate them

    For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
   ```
<span>3.</span> Running out of space<br/>
  ```
    Kevin is noticing his space run out!

    Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
   ```
<span>4.</span> Sum of two lowest positive integers<br/>
  ```
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
    [10, 343445353, 3453445, 3453545353453] should return 3453455.
   ```

<span>5.</span> Get the averages of the numbers<br/>
  ```
  Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
  If the array has 0 or 1 values or is null, your method should return an empty array.

  Example, input [ 1, 3, 5, 1, -10] then output should be [ 2, 4, 3, -4.5]
  ```
<span>6.</span> Alphabet war<br/>
  ```
  Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

  The left side letters and their power:
  w - 4
  p - 3
  b - 2
  s - 1

  The right side letters and their power:
  m - 4
  q - 3
  d - 2
  z - 1
  
  The other letters don't have power and are only victims.
  ```