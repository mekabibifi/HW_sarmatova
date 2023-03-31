//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран 
//столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [2, 5, 9, 15, 0, 4]
// for(let elem of arr) {
//     if (elem>3&&elem<10){
//         console.log(elem)
//     }
// }

//Дан массив с числами. Числа могут быть положительными и отрицательными. 
//Найдите сумму положительных элементов массива.
// let arr = [2, 5, -9, 15, 0, -4];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         result += arr[i];
//     }
// }
// console.log(result);

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в 
//массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. 
//Если нет - ничего делать не надо.
// let arr = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] == 4){
//         alert('есть!')
//         break;
//     }
// }


//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let str = ''
// for(let elem of arr){
//     str = str + '-' + elem
// }
// console.log(str)


// let ol = 0
// for(let i = 0; i < 5000; i++){
//     if(i%39===0){
//         ol=i
//     }
// }
// console.log(ol)


// let a = -3
// if (a>0&&a<5){
//     alert('Верно')
// }else{
//     alert('неверно')
// }

// let fizz = 'fizz'
// let buzz = 'buzz'
// let fb= 'fizzbuzz'
// for(let i = 1; i < 50; i ++){
//     if (i%3===0 && i%5===0){
//         console.log(fb)
//     } else if (i%5===0) {
//         console.log(buzz)
//     } else if (i%3===0) {
//         console.log(fizz)
//     }else{
//         console.log(i)
//     }
// }
// for(let i=1; i <=10; i++){
//     for(let o=1; o<=10; o++)
//     console.log(`${i} * ${o} = ${i*o}`)
// }
// let res = 0
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for (let elem of arr){
//     res += elem
// }
// console.log(res/arr.length)

// let n = +prompt('Введите простое число')
// if(n%n === 0 && n%1 === n){
//     alert('правильно')
// } else {
//     alert('неправильно')
// }
