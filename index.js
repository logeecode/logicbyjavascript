// Question:
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