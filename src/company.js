const validCompanyNumber = (serialNum) => {
  serialNum = String(serialNum).split("");
  const multiplyNum = [1, 2, 1, 2, 1, 2, 4, 1];
  let result = 0;
  for (let i = 0; i < serialNum.length; i++) {
    result += productReducer(serialNum[i] * multiplyNum[i]);
  }
  return result % 5 === 0 || (serialNum[6] === "7" && (result - 1) % 5 === 0);
};

function productReducer(product) {
  return product < 10
    ? product
    : productReducer(Math.floor(product / 10) + (product % 10));
}

// 1.將編號轉成陣列
// 2.宣告乘數為[1, 2, 1, 2, 1, 2, 4, 1]
// 3.將編號元素*乘數元素=乘積元素
// 4.呼叫乘積濃縮函式，將乘積元素位數加總，最終濃縮成個位數
// 5.用for迴圈，將經過濃縮後的乘積元素加總
// 6.將結果判斷是否整除5

// ======
// ======

// const validCompanyNumber = (serialNum) => {
//   serialNum = String(serialNum).split("");
//   const multiplyNum = [1, 2, 1, 2, 1, 2, 4, 1];
//   let result = 0;
//   for (let i = 0; i < serialNum.length; i++) {
//     result += tenPlusUnit(serialNum[i] * multiplyNum[i]);
//   }
//   return result % 5 === 0 || (serialNum[6] === "7" && (result - 1) % 5 === 0);
// };

// function tenPlusUnit(n) {
//   if (n === 28) {
//     return 1;
//   } else {
//     return Math.floor(n / 10) + (n % 10);
//   }
// }

// =========
// ========

// const validCompanyNumber = (serialNum) => {
//   serialNum = String(serialNum).split("");

//   let result = addNum(multiplyNum(serialNum));

//   if (serialNum[6] !== "7") {
//     return result % 5 === 0;
//   } else {
//     return result % 5 === 0 || (result - 1) % 5 === 0;
//   }
// };

// function multiplyNum(arr) {
//   return arr.map((el, index) => {
//     if (index === 0 || index === 2 || index === 4 || index === 7) {
//       return Number(el);
//     } else if (index === 1 || index === 3 || index === 5) {
//       return el * 2;
//     } else {
//       return el * 4;
//     }
//   });
// }

// function addNum(arr) {
//   return arr.reduce((acc, el) => {
//     if (el < 10) {
//       return acc + el;
//     } else {
//       if ((el % 10) + Math.floor(el / 10) === 10) {
//         return acc + 1;
//       } else {
//         return acc + (el % 10) + Math.floor(el / 10);
//       }
//     }
//   });
// }

module.exports = validCompanyNumber;
