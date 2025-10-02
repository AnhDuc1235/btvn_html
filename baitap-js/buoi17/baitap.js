// bai 2
let password = "aAVd12$%"

let upperCase = 0;
let lowerCase= 0;
let number = 0;
let special = 0;

for (i=0;i<password.length;i++) {
    let a = password[i];

    if (a >= "a" && a <= "z") {
        lowerCase += 1;
    }
    if (a >= "A" && a <= "Z") {
        upperCase += 1;
    }
    if (a >= 0 && a <=9) {
        number += 1;
    }
    if (a == "!" || a == "@" || a == "#" || a == "$" || a == "%" || a == "^" || a == "&" || a == "*") {
        special += 1;
    }
}

if (lowerCase < 2) {
    console.log("mat khau can 2 chu thuong")
} else if (upperCase < 2){
    console.log("mat khau can 2 chu hoa");
} else if (number < 2) {
    console.log("mat khau can 2 so");
} else if (special < 2) {
    console.log("mat khau can 2 ki tu dac biet");
} else {
    console.log("mat khau cua ban manh")
}

// bai 3
const users = ['User 1', 'User 2', 'User 3', 'User 2', 'User 4'];
const newUsers = [];

for  (i = 0; i < users.length; i++) {
    b = users[i];
    if (newUsers.indexOf(b) === -1) {
        newUsers.push(b);
    }
}

console.log(newUsers);

//bai 4
const numbers = [5, 2, 1, 9, 8, 0];
let max1 = numbers[0];
let max2 = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max1) {
        max1 = numbers[i];
    }
}
for (i = 1; i<numbers.length; i++) {
    if (numbers[i] !== max1 && numbers[i] > max2) {
        max2 = numbers[i];
    }
}
console.log(max2);

// bai 5
const numbers2 =  [1,3,5,7,9,11];

const newNumber = 4; //Giá trị này có thể thay đổi
const newnumbers2 = [];

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] >= newNumber) {
    newnumbers2.push(newNumber);
    for (let j = i; j < numbers2.length; j++) {
      newnumbers2.push(numbers2[j]);
    }
    break;
  }
  newnumbers2.push(numbers2[i]);
}
console.log(newnumbers2);

//bai 1 chua lam duoc