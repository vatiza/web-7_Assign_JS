//!  তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
//* এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

//todo -----------Sample Input & Output-----------

//todo Input: 5

// todo Output: 7.5


function mindGame(number) {
  const multip3=number*3;
  const add10=multip3+10;
    const divis2 = add10 / 2;
    let result=divis2 - 5;
    return result;
    

}
const positiveNumber= mindGame(33);
console.log(positiveNumber)
