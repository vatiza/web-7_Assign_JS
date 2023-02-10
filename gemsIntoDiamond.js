//! তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।
//* ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
//* ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
//* ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
//? [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
//todo এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
//? Sample Input & Output:-
// ?Input: 1, 1, 1
//? Output: 96
//? Input: 20, 200, 50
//? Output: 6970

function gemsToDiamond(friends1,friends2,friends3) {
    let totalsDiamond = friends1 + friends2 + friends3;
    if (totalsDiamond > 1000 * 2) {
        totalsDiamond=totalsDiamond-2000;
        return totalsDiamond
    }
    else {
        return totalsDiamond;
    }
}
const number = gemsToDiamond(21, 32, 43)
console.log(number)