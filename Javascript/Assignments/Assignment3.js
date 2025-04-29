// Print the occurence of each character in a string
//input: 'entertainment'
//output: { e:3 , n:2 , t: 3 ....}

str1 = 'entertainment';
function StrOccurence(s){
    const result = {};
    for(let char of s){
        if (result[char]){
            result[char] += 1;
        }else{
            result[char] = 1;
        }
    }
    return result;
}

console.log(StrOccurence(str1)); 

//Print the character which is repeated max no of times
// input: 'hello world'
// output : 'L'

function maxRepeatedChar(str) {
    const freq = {};
  
    // First loop: Count each character
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (char === ' ') continue; // Skip spaces
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
  
    // Second loop: Find the max repeated character
    let maxChar = '';
    let maxCount = 0;
  
    for (let char in freq) {
      if (freq[char] > maxCount) {
        maxCount = freq[char];
        maxChar = char;
      }
    }
  
    return maxChar.toUpperCase();
  }
  
  console.log(maxRepeatedChar('hello world'));
  
//3. Swap The case for Each Character in a string 
//input: 'Hello World'
//output: 'hELLO wORLD'

let str3 = 'Hello World';

function lowToUp(s){
    let x = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase() && s[i] !== s[i].toUpperCase()) {

            x += s[i].toUpperCase();
        } else {
            x += s[i].toLowerCase();
        }
    }
    return x;
}

console.log(lowToUp(str3));


/*Print the Abbreviation for a string
input: 'Rabindra Nath Tagore'
output: 'R. N. tagore'*/

let str4 = 'R. N. tagore';

function Abbreviation(s){
    let x = s.split(' ');
    let result = '';

    for (let i = 0; i < x.length - 1; i++) {
        result += x[i][0].toUpperCase() + '. ';
    }

    result += x[x.length - 1].toLowerCase();  // Add the last word in lowercase

    return result;
}

console.log(Abbreviation(str4));

//Program to Shift the characters by the next character, the output should have the next char of input
//input:  'abcxyz'
//output: 'bcdyza'

let str5 = 'abcxyz';

function shiftByOne(s) {
    let output = '';

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === 'z') {
            output += 'a';
        } else if (ch === 'Z') {
            output += 'A';
        } else {
            output += String.fromCharCode(ch.charCodeAt(0) + 1);
        }
    }

    return output;
}

console.log(shiftByOne(str5));

6. /*Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true*/

   /* Program to Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...
   */

    function getPermutations(str) {
        let result = [];
    
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < str.length; j++) {
                for (let k = 0; k < str.length; k++) {
                    if (i !== j && j !== k && i !== k) {
                        result.push(str[i] + str[j] + str[k]);
                    }
                }
            }
        }
    
        return result;
    }
    
    let str7 = 'ABC';
    let permutations = getPermutations(str7);
    console.log(permutations.join('\n'));
    

/*
8. Ask user to enter a number and convert that to Roman value
   input:   9    12
   output : IX   XII

9. Ask user to enter a roman string and convert that to integer value
   input:   IX    XII
   output : 9     12
   */
