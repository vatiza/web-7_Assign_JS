//! তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।
//* এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

//todo Input : 6
//? Output: -1
//todo Input: -15
//? Output: -22

function isLGSeven(number) {
 let difference=number-7;
    if (7 > difference) {
        return difference;
    }
    else {
        return number * 2;
    }
}
let inputNum = isLGSeven(6)
console.log(inputNum)