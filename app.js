// Berilgan matnda katta va kichik harflarning sonini toping

function countCase(str) {
  let result = {
    uppercase: 0,
    lowercase: 0,
  };
  for (var i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "A" && ch <= "Z") {
      result.uppercase += 1;
    } else if (ch >= "a" && ch <= "z") {
      result.lowercase += 1;
    }
  }
  return result;
}
// console.log(countCase("Hello World!")); // {uppercase: 2, lowercase: 8}

// Berilgan massivdagi juft va toq indekslardagi elementlarning yig'indisini alohida-alohida hisoblang.

function evenOddIndexSums(arr) {
  let result = {
    evenIndexSum: 0,
    oddIndexSum: 0,
  };
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.evenIndexSum += arr[i];
    } else {
      result.oddIndexSum += arr[i];
    }
  }
  return result;
}
// console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6])); // {evenIndexSum: 9, oddIndexSum: 12}

// Berilgan matritsani soat strelkasiga qarama-qarshi yo'nalishda 90 daraja aylantiring.

function rotateMatrix(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][matrix.length - 1 - i]);
    }
  }
  return result;
}
// console.log(rotateMatrix([[1, 2, 3],[4, 5, 6],[7, 8, 9],]));
// [
//  [3, 6, 9],
//  [2, 5, 8],
//  [1, 4, 7]
// ]

// Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.
function removeSpaces(str) {
  return str.split(" ").join("");
}

// console.log(removeSpaces("Hello World! How are you?")); // "HelloWorld!Howareyou?"

// Berilgan ikki qatorning anagramma ekanligini tekshiring

function areAnagrams(str1, str2) {
    return str1.split("").sort().join("") == str2.split("").sort().join("");
}

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world")); // false


// Berilgan massivdagi eng ko'p takrorlangan elementni toping.

function mostFrequentElement(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]]) {
            result[arr[i]] += 1;
        } else {
            result[arr[i]] = 1;
        }
    }
    let max = 0;
    let maxElement = null;
    for (let key in result) {
        if (result[key] > max) {
            max = result[key];
            maxElement = key;
        }
    }
    return maxElement;
}

// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1])); // 1

// Berilgan qator ichidagi barcha raqamlarning yig'indisini hisoblang.

function sumOfDigits(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            result += parseInt(str[i]);
        }
    }
    return result;
}

// console.log(sumOfDigits("abc123def45")); // 15 (1+2+3+4+5)


// Berilgan qator ichidagi har bir harfning chastotasini hisoblang.

function letterFrequency(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch >= "A" && ch <= "Z") {
            ch = ch.toLowerCase();
        }
        if (result[ch]) {
            result[ch] += 1;
        } else {
            result[ch] = 1;
        }
    }
    return result;
}

// console.log(letterFrequency("hello world")); 
// {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}

