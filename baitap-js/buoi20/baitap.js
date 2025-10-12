// bai 1

const users = [ 

  { name: "An", age: 25 }, 

  { name: "Bình", age: 30 }, 

  { name: "Chi", age: 22 }, 

];
let oldAge = 0;
let oldAgeName = "";

for (let key in users) {
    console.log(users[key].name);
}

for (let key in users) {
    if (users[key].age > oldAge) {
        oldAge = users[key].age;
        oldAgeName = users[key].name;
    }
    console.log(oldAgeName + " " + oldAge);
}

const avrAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(avrAge);


// bai 2
const products = [ 

  { name: "Laptop", price: 15000000 }, 

  { name: "Mouse", price: 250000 }, 

  { name: "Keyboard", price: 800000 }, 

];

const newProducts = [];

for (let key in users) {
    newProducts.push(products[key].name);
}
console.log(newProducts);

const sumProducts = products.reduce((sum, product) => sum + product.price, 0);
console.log(sumProducts);

let filterPrice = 0;
let filterPriceName = "";
for (let key in products) {
    if (products[key].price > 1000000) {
        filterPrice = products[key].price;
        filterPriceName = products[key].name;
    }
    console.log(filterPriceName + " " + filterPrice);
}


// bai 3
const students = [ 

  { name: "Lan", scores: [8, 9, 7] }, 

  { name: "Huy", scores: [6, 5, 7] }, 

  { name: "Minh", scores: [9, 8, 10] }, 

];

const excellent = [];

for (let score of students) {
    const avrScore = score.scores.reduce((sum, count) => sum + count, 0) / score.scores.length;
    score.avrScore = avrScore;
    console.log(score.name + " " + avrScore);
    if (avrScore >= 8) {
        excellent.push(score.name + ": " + avrScore);
    }
    students.sort((a, b) => a.avrScore - b.avrScore);
}
students.sort((a, b) => b.avrScore - a.avrScore);
console.log(excellent);
console.log(students);


// bai 4
const posts = [ 

  { 

    id: 1, 

    title: "JavaScript cơ bản", 

    tags: ["js", "basic"], 

    comments: [ 

      { user: "An", text: "Hay quá!" }, 

      { user: "Bình", text: "Rất dễ hiểu" }, 

    ], 

  }, 

  { 

    id: 2, 

    title: "Học React không khó", 

    tags: ["react", "js"], 

    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }], 

  }, 

];

const newTag = [];
const userAn  = [];

for (let key in posts) {
    const commentsNumbers = posts[key].comments.length;
    console.log(posts[key].title + " co so luong comment la: " + commentsNumbers);

    for (let tag of posts[key].tags) {
        if (!newTag.includes(tag)) {
            newTag.push(tag);
        }
    }
    for (let comment of posts[key].comments) {
        if (comment.user === "An") {
            userAn.push(comment.user + ": " + comment.text)
        }
    }

}

console.log(newTag);
console.log(userAn);





