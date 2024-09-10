// Description:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//  XO("zzoo") => false
function XO(str) {
  let count1 = 0,
    count2 = 0;
  str
    .toLowerCase()
    .split("")
    .map((x) => (x === "o" ? count1++ : x === "x" ? count2++ : null));
  //   console.log(count1);
  //   console.log(count2);
  return count1 === count2;
}
console.log(XO("xoxo"));
