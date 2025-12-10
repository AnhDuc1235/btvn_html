const a = 10
const b = 20
const c = 30
const  doSomething = () => {
    console.log("do something");
}
//export
// - default (trong 1 file chỉ có 1 default)
// - named

export default a;

export  {b, c, doSomething}; //nhớ phải gom vào object