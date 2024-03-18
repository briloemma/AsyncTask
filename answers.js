
//Каким будет вывод этого фрагмента кода? Почему?
console.log('start');
const promise = new Promise((resolve, reject) => {
    console.log(1)
})
console.log('end');
/*промис не разрешается, операции синхронны.
Вывод консоли: 
start 
1
end*/

////////
//Каким будет вывод этого фрагмента кода? Почему?
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
promise1.then(res => {
    console.log(res)
})
console.log('end');
/* операции идут синхронно, кроме той, что ожидает разрешения промиса и выводит 2.
Вывод консоли:
start
1
end
2 */

/////////
//Каким будет вывод этого фрагмента кода? Почему?
console.log('start');
const promise2 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
})
promise2.then(res => {
  console.log(res)
})
console.log('end');

/*операции идут синхронно, кроме той, что ожидает разрешения промиса и выводит 2.
start
1
3
end
2*/

//////////
//Каким будет вывод этого фрагмента кода? Почему?
console.log('start');
const promise3 = new Promise((resolve, reject) => {
  console.log(1)
})
promise3.then(res => {
  console.log(2)
})
console.log('end');
/* промис не разрешается, поэтому 2 не выводится
Вывод:
start
1
end
*/ 

//////
//Каким будет вывод этого фрагмента кода? Почему?
console.log('start')
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))
console.log('middle')
fn().then(res => {
  console.log(res)
})
console.log('end')
/* fn() вызывается после вывода middle, выводит 1, success выводится асинхронно после разрешения промиса
Вывод консоли:
start
middle
1
end
success*/ 