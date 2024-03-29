// Question 1 Mumbling:
/* Create a function called mumbling with string parameter then return like this example below:

     mumbling("abcd") -> "A-Bb-Ccc-Dddd"
     mumbling("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
     mumbling("cwAt") -> "C-Ww-Aaa-Tttt" */

function mumbling(s) {
  let string = [];
  let text = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {

    for (let x = 0; x <= i; x++) {
      x == 0 ? string.push(text[i].toUpperCase()) : string.push(text[i])

      if (i == x && i !== s.length - 1) { string.push('-') }
    }
  }
  return string.join('');
}

// Question 2 Square Every Digit:
/* You are asked to create a function that square every digit of a number and concatenate them */

// 1
function squareDigits(num) {
  let arr = [], digits = num.toString().split('');
  digits.map(digit => {
    arr.push(Math.pow(parseInt(digit), 2))
  });
  return parseInt(arr.join(''))
}

// 2
function squareDigits(num) {
  return parseInt(num.toString().split('').map(digit => { return Math.pow(digit, 2); }).join(''));
}

// Question 3 Running out of space:
/* Write a function that removes the spaces from the values and 
   returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] 
   would produce ['i','ihave','ihaveno','ihavenospace']. */

function spacey(array) {
  let i = 0, temp = [], word = '';
  do {
    temp.push(word += array[i]);
    i++
  }
  while (i < array.length);

  return temp;
}

// Question 4 Sum of two lowest positive integers:
/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
   No floats or non-positive integers will be passed.
   
   For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
   [10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumTwoSmallestNumbers(numbers) {
  let sort = numbers.sort((a, b) => b - a);
  return sort[sort.length - 1] + sort[sort.length - 2];
}

// Question 5 Get the averages of the numbers bellow:
/* Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example, input [ 1, 3, 5, 1, -10] then output should be [ 2, 4, 3, -4.5] 

If the array has 0 or 1 values or is null, your method should return an empty array. */

// 1
function averages(numbers) {
  let result = [];

  if (numbers != null) {

    numbers.map((itm, idx) => {
      if (idx !== numbers.length - 1) {
        result.push((numbers[idx] + numbers[idx + 1]) / 2)
      }
    })
  }

  return result;
}

// 2
function averages(numbers) {
  return numbers ? numbers.map((v, i, a) => (v + a[i + 1]) / 2).slice(0, -1) : [];
}

// Question 6 Get n smallest elements of a array
/**
 *  Write a method, that gets an array of integer-numbers and returns n smallest number(s) (unique only) from it
 * 
 * Example:-
 * Input: [2, -3, -3, 4, 1, 2, 8, 9, 0, 4, 3], n = 2
 * Output: [ -3, 0 ]
 * 
 * If there are less than n elements then throw a error
 */
function getSmallest(numbers, n) {
  const sorted = [...(new Set(numbers))].sort((a, b) => a - b);

  if (n > sorted.length) throw new Error(`Can't return ${n} elements, because provided array only have ${sorted.length} unique elements`);

  return sorted.slice(0, n);
}

// Question 7 Get n largest elements of a array
/**
 *  Write a method, that gets an array of integer-numbers and returns n largest number(s) (unique only) from it
 * 
 * Example:-
 * Input: [2, -3, -3, 4, 1, 2, 8, 9, 0, 4, 3], n = 2
 * Output: [ 9, 8 ]
 * 
 * If there are less than n elements then throw a error
 */
function getLarget(numbers, n) {
  const sorted = [...(new Set(numbers))].sort((a, b) => b - a);

  if (n > sorted.length) throw new Error(`Can't return ${n} elements, because provided array only have ${sorted.length} unique elements`);

  return sorted.slice(0, n);
}