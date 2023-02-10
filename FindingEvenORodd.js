//!  তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে।
//* এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে  হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।
// todo Sample Input & Output:
// ? Input: ‘Phero’
//  ? Output: odd

// findingEvenOrOdd String length
function evenOdd(str) {
  let length = str.length;
  if (length % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
let result = evenOdd("chatgpt");
console.log(result);