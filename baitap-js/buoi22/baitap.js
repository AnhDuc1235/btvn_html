// bai 1

class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

  }
  getInfo() {
    return [this.name + "- Tuổi " + this.age + "- Lương " + this.salary + ". "];
  }
}
class Developer extends Employee {
  constructor(name, age, salary, programmingLanguage) {
    super(name, age, salary);
    this.programmingLanguage = programmingLanguage;
  }
  getInfo() {
    return [this.name + ", " + "Ngôn ngữ: " + this.programmingLanguage + ". "];
  }
}
class Manager extends Employee {
  constructor(name, age, salary) {
    super(name, age, salary);
    this.employees  = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  getInfo() {
    let manage = [this.name + " - Tuổi " + this.age + " - Lương " + this.salary + " Quản Lý nhân viên: "]
    for (let i = 0; i < this.employees.length; i++) {
      manage += this.employees[i].getInfo();
    }
    console.log(manage);   
  }
} 
const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");
const employee = new Employee("Minh", 20, 50500);
const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(employee);
manager.getInfo();


// bai 2 

class Car {
  move() {
    console.log("Xe hơi đang chạy...");  
  }
}
class Bicycle {
  move() {
    console.log("Xe đạp đang chạy...");
  }
}
class Bus {
  
}
function start(vehicle) {
  if (typeof vehicle.move === "function") {
    vehicle.move();
  } else {
    console.log("Không thể di chuyển!");
  }
}
const car = new Car();
const bike = new Bicycle();
const bus = new Bus();
start(car); // Xe hơi đang chạy...
start(bike); // Xe đạp đang chạy...
start(bus); // Xe đạp đang chạy...
start({}); // Không thể di chuyển!

// bai 3s

// const menus = [
//   {
//     id: 1,
//     title: "Menu 1",
//     parent: 0,
//   },
//   {
//     id: 2,
//     title: "Menu 2",
//     parent: 0,
//   },
//   {
//     id: 3,
//     title: "Menu 3",
//     parent: 0,
//   },
//   {
//     id: 4,
//     title: "Menu 2.1",
//     parent: 2,
//   },
//   {
//     id: 5,
//     title: "Menu 2.2",
//     parent: 2,
//   },
//   {
//     id: 6,
//     title: "Menu 2.3",
//     parent: 2,
//   },
//   {
//     id: 7,
//     title: "Menu 2.2.1",
//     parent: 5,
//   },
//   {
//     id: 8,
//     title: "Menu 2.2.2",
//     parent: 5,
//   },
// ];

// chưa biết cách làm