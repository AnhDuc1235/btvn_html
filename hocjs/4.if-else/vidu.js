// Bai tap:
// cho truoc luong co ban. tinh luong thuc nhan sau khi tru thue
// 5tr --> thue 0
// 5tr den 10tr --> thue 3%
// 10tr den 15tr --> thue 5%
// 15tr --> thue 7%


// let salary = 19000000;

// if(salary <= 5000000) {
//     console.log("luong thuc nhan: " + salary)
// } else if (salary <= 10000000) {
//     realSalary = salary - (salary * 0.3)
//     console.log(realSalary)
// } else if (salary <= 15000000) {
//     realSalary = salary - (salary * 0.5)
//     console.log(realSalary)
// } else if (salary > 15000000) {
//     realSalary = salary - (salary * 0.7)
//     console.log(realSalary)
// }




//chua bai
let salary= 10000000;
let income;
let tax;
if (salary < 0) {
    console.log("khong hop le")
} else {
    if (salary <=5000000) {
        tax = 0;  
    } else if (salary <= 10000000) {
        tax = 3;
    } else if (salary <= 15000000) {
        tax = 5;
    } else{
        tax = 7;
    }
    income = salary - (salary * tax)/100;
    console.log("Luong thuc nhan: ", income);
}
