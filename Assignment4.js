// ######### mindGame  ##########
function mindGame(number) {
    const multip3=number*3;
    const add10=multip3+10;
      const divis2 = add10 / 2;
      let result=divis2 - 5;
      return result;
      
  }
  const positiveNumber= mindGame(33);
console.log(positiveNumber)

// ######### isLGSeven ##########
function isLGSeven(number) {
    let difference=number-7;
       if (7 > difference) {
           return difference;
       }
       else {
           return number * 2;
       }
   }
   const inputNum = isLGSeven(-15)
console.log(inputNum)
//    ######### evenOdd #########
function evenOdd(str) {
    let length = str.length;
    if (length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  let result = evenOdd("Batch7");
console.log(result);
  
// ########### findingBadData ############
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

//   ########### gemsToDiamond ###############
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
