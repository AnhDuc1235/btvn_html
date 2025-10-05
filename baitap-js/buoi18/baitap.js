// bai 1
const arr = [1, 2, 3, 4, 5, 6];

const newArr = [];
const evenArr = [];
const newOddArr = [];

for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i]**2);
    if (arr[i] % 2 ==0) {
       evenArr.push(arr[i])
    } else {
        newOddArr.push(arr[i]**2);
    }
}
console.log(newArr);
console.log(evenArr);
console.log(newOddArr);

// bai 2
const names = ["   hoang ", "AN", "  f8   ", "Education"];
const newNames = [];
const upperNames = [];

for (i = 0; i < names.length; i++) {
    const trimNames = names[i].trimStart().trimEnd();
    newNames.push(trimNames)
    upperNames.push(trimNames.charAt(0).toUpperCase() + trimNames.slice(1))
    // newNames.push(names[i].trimStart().trimEnd())
    // upperNames.push(names[i].trimStart().trimEnd().charAt(0).toUpperCase() + names[i].trimStart().trimEnd().slice(1))
}
console.log(newNames);
console.log(upperNames);

// bai 3

const nums = [3, 7, 2, 9, 12, 15, 18];
const newNums = [];
const secondNums = [];
const oddNums = [];

for (i = 0; i < nums.length; i++) {
    if (nums[i] >= 10) {
        newNums.push(nums[i]);
        if (nums[i] % 3 == 0) {
            secondNums.push(nums[i]);
        }
    } 
    if (nums[i] % 2 !== 0 ) {
        oddNums.push(nums[i] * 2)
    }

}
console.log(newNums);
console.log(secondNums);
console.log(oddNums);

// bai 4

const words = ["javascript", "php", "css", "html", "python", "java"];
const newWords = [];
const upperWords = [];
const reverseWords = [];

for (i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        newWords.push(words[i]);
    }
    upperWords.push(words[i].toUpperCase());
    reverseWords.push(words[i].split("").reverse().join(""));
}

console.log(newWords);
console.log(upperWords);
console.log(reverseWords);

// bai 5

const myArr = [ 

  [1, 2, 3], 

  [4, 5, 6], 

  [7, 8, 9]

];

const sumArr = [];
const sumArr2 = [];
const sumArr3 = [];

for (i = 0; i < myArr.length; i++) {
    let sum = 0;
    for (j = 0; j < myArr[i].length; j++) {
        sum += myArr[i][j];
    }
    if(sum > 10) {
        newSum = sum;
        sumArr3.push(newSum);
    }
    sumArr.push(sum);
}
for (j = 0; j < myArr[0].length; j++) {
    let sum2 = 0;
    for (i = 0; i < myArr.length; i++) {
        sum2 += myArr[i][j];
    }
    sumArr2.push(sum2);
}

console.log(sumArr);
console.log(sumArr2);
console.log(sumArr3);

// bai 6
const myArrr = [ 

  ["hello", "world"], 

  ["javascript", "php"], 

  ["css", "html"] 

]

const myArrr2 = [];
const myArrr3 = [];

for (i = 0; i < myArrr.length; i++) {
    for (j = 0; j < myArrr[i].length; j++) {
        myArrr2.push(myArrr[i][j].toUpperCase())
        if (myArrr[i][j].length > 4) {
            myArrr3.push(myArrr[i][j])
        }
    }
}
console.log(myArrr2);
console.log(myArrr3);


// bai 7
const myArrrr = [ 

  [2, 4, 6], 

  [8, 10, 12], 

  [14, 16, 18] 

]
const myArrrr1 = [];
const myArrrr2 = [];
let sumMyArr1 = 0;
let sumMyArr2 = 0;

for (i = 0; i < myArrrr.length; i++) {
    myArrrr1.push(myArrrr[i][i])
    myArrrr2.push(myArrrr[i][2 - i])

    sumMyArr1 += myArrrr1[i];
    sumMyArr2 += myArrrr2[i];
}
console.log(myArrrr1);
console.log(myArrrr2);
console.log(sumMyArr1);
console.log(sumMyArr2);

// bai 8
const scores = [ 

  [8, 9, 7],   // học sinh 1 

  [6, 5, 7],   // học sinh 2 

  [10, 9, 8]   // học sinh 3 

]

const diemTB = [];
const diemTB2 = [];
const diemTB3 = [];



for (i = 0; i < scores.length; i++) {
    let summm = 0;
    for (j = 0; j < scores[i].length; j++) {
        summm += scores[i][j] / 3;
        if (summm >= 8) {
            diemTB2.push(summm)
        }
        if (scores[i][j] < 10) {
            scores[i][j]++;
            diemTB3.push(scores[i][j]);
        }
    }
    diemTB.push(summm)
}
console.log(diemTB);
console.log(diemTB2);
console.log(diemTB3);


