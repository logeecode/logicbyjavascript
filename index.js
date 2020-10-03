// Question 1 Mumbling:
/* Create a function called mumbling with string parameter then return like this example below:

     mumbling("abcd") -> "A-Bb-Ccc-Dddd"
     mumbling("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
     mumbling("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
  let string = [];
  let text = s.toLowerCase();
      
  for (let i = 0; i < s.length; i++) {
        
    for(let x = 0; x <= i; x++) {
      x == 0 ? string.push(text[i].toUpperCase()) : string.push(text[i])
          
      if (i == x && i !== s.length - 1) { string.push('-') }
    }
  }
  return string.join('');
}

// Question 2 Square Every Digit:
/* You are asked to create a function that square every digit of a number and concatenate them */

// 1
function squareDigits(num){
  let arr = [], digits = num.toString().split('');
  digits.map(digit => {
    arr.push(Math.pow(parseInt(digit), 2))
  });
  return parseInt(arr.join(''))
}

// 2
function squareDigits(num){
  return parseInt(num.toString().split('').map(digit => { return Math.pow(digit, 2); }).join(''));
}