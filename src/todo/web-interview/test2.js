
// const arr = [0, 1, 2, 3, 4, 5];
// arr.forEach(value => {
//     console.log(value);
// });



const fun1 = (a, b) => {
    return a + b;
}

const fun2 = () => {
    return fun1;
}

// const exec = fun2();
const exec = (a, b) => {
    return fun2()(a+1, b+1);
}

const r = exec(1, 1);
console.log(r);