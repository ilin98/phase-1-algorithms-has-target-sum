function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    let num1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j]
      if (num1 + num2 === target) {
        return true
      }
    }
  }
  return false;
}

/*
  Write the Big O time complexity of your function here
  0(n^2)
*/

/*
  Add your pseudocode here
  iterate through the array and call it i
    iterate through the iterated array and call it j

  if i plus j equals the target number
   return true
*/

/*
  Add written explanation of your solution here
  have 2 inputs, 1 being and array, and the other being a target number. If any sum of two numbers in the array adds up to the target number, return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
