// let debounce = document.getElementById('debounce')
// function debouncefun(func, delay) {
// let timer
// return function () {
// clearTimeout (timer)

// timer= setTimeout(function () {
// func.apply(this)
// }, delay)
// }
// }
// debounce.addEventListener('click', debouncefun(function () {
// console.log('debounce')
// },2000))
let counter = 0;
const getData = () => {
// calls an API and gets Data
console.log("Fetching Data ..", counter++);
}
const debounce = function (fn, d) {
let timer;
return function () {
let context = this,
args = arguments;
clearTimeout(timer);
timer = setTimeout(() => {
getData.apply(context, arguments);
}, d);
}
}
const betterFunction = debounce (getData, 300);