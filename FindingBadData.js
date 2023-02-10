//! তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”.
//* এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
//todo Sample Input & Output:-
//? Input: [ 1,2,5 ]
//? Output: 0
//todo Input: [ 2, -5, -7, -13 ]
//? Output: 3

function findingBadData(numbers) {
    let positiveNum = 0;
    let negativeNum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveNum++;
      } else if (numbers[i] < 0) {
        negativeNum++;
      }
    }
    return negativeNum;
  }
  let result = findingBadData([-4, -9, -5, -33, -55]);
  console.log(result);
  