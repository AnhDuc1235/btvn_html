// bai 1
const hasNegative = (numbers) => numbers.some(number => number < 0);
console.log(hasNegative([2, 3, 4, 5, 6, -9, 1]));

// bai 2
const isAllEven = (numbers) => numbers.every(number => number % 2 == 0);
console.log(isAllEven([2, 4, 6, 7, 8, 10]));

// bai 3
const findDivisibleBy5 = (numbers) => numbers.find(number => number % 5 == 0);
console.log(findDivisibleBy5([5, 10, 15, 20]));

// bai 4
const findLastNegative = (numbers) => numbers.findLast(number => number < 0);
console.log(findLastNegative([5, 10, -2, -3, -9]));

// bai 5
const findFirstOddIndex = (numbers) => numbers.findIndex(number => number % 2 !== 0);
console.log(findFirstOddIndex([2, 6, 8, 9, 11]));

// bai 6
const findLastGreaterThan50 = (numbers) => numbers.findLastIndex(number => number > 50);
console.log(findLastGreaterThan50([100, 20, 40, 60, 30, 50]));

// bai 7
const sum = (numbers) => numbers.reduce((acc, cur) => acc + cur);
console.log(sum([1, 2, 3, 4, 5]));

// bai 8
const multiplyAll = (numbers) => numbers.reduce((acc, cur) => acc * cur)
console.log(multiplyAll([1, 2, 3, 4]));

// bai 9
const longestStringLength = (strings) => {
    let maxString = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > maxString){
            maxString = strings[i].length;
        }
    } 
    return maxString;
    
}
console.log(longestStringLength(["hello", "hi", "ko"])); 

// bai 10 chua lam duoc





