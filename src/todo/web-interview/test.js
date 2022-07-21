
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date(), i);
//     }, 1000);
// }
// console.log(new Date(), i);

// 经典面试题：循环中使用闭包解决 var 定义函数的问题
// 第一种是使用闭包的方式
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000)
    })(i)
}

// 第三种就是使用 let 定义 i 了来解决问题了，这个也是最为推荐的方式
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, i * 1000)
// }