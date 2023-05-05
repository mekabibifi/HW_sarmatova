//! Задачи по деструктуризации:

// Создайте объект с полями name, age и city. С помощью деструктуризации получите 
// значения этих полей в переменные personName, personAge и personCity.

// let person = {
//     name: 'meka',
//     age: 18,
//     city: 'bishkek'
// }
// const { name:personName, age:personAge, city:personCity } = person
// console.log(personName, personAge, personCity);

// У вас есть массив, содержащий объекты. Каждый объект описывает человека и содержит поля name и age. 
// С помощью деструктуризации получите значения этих полей для первого элемента массива в переменные firstName и firstAge.

// let persons =[
//     {
//         name: 'meka',
//         age: 18
//     },
//     {
//         name: 'deka',
//         age: 18
//     },
//     {
//         name: 'seka',
//         age: 18
//     },
// ]
// const { name:firstName, age:firstAge } = persons[0]
// console.log(firstName, firstAge);

// У вас есть объект, содержащий массив чисел. С помощью деструктуризации получите первый и 
// второй элементы массива в переменные firstNum и secondNum.

// let obj = {
//     a: [1,2,3,4,5]
// }

// const { a:[firstNum,secNum] } = obj
// console.log(firstNum,secNum);


// Создайте объект person с полями name и age. С помощью деструктуризации 
// создайте новый объект newPerson, содержащий только поле name из объекта person.

// let person = {
//     name: 'meka',
//     age: 18
// }
// const { age, ...newPerson } = person
// console.log(newPerson)

// Создайте функцию, которая принимает на вход объект с полями name, age и city, 
// а затем с помощью деструктуризации выводит значения этих полей в консоль.

// let person = {
//     name: 'meka',
//     city: 'bishkek',
//     age: 18
// }
// function obj (person){
//     const { name, age, city } = person

//     return `${name},${age},${city}`
// }
// console.log(obj(person))

//!Задачи со spread оператором:

// Создайте массив numbers1 с элементами 1, 2, 3 и массив numbers2 с элементами 4, 5, 6. 
// Используя оператор spread, объедините эти два массива в новый массив allNumbers.

// let num1 = [1,2,3]
// let num2 = [4,5,6]
// let allNums = [...num1, ...num2]
// console.log(allNums);

// Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender. Используя оператор spread, 
// создайте новый объект newPerson, содержащий все поля из person1 и person2.

// const person1 = {
//     name: 'meka',
//     age: 18
// }
// const person2 = {
//     city: 'Bishkek',
//     gender: 'girl'
// }
// const newPerson = { ...person1, ...person2 }
// console.log(newPerson);

// Создайте функцию, которая принимает на вход массив чисел и возвращает новый массив, 
// содержащий все элементы исходного массива и число 0 в конце. Используйте оператор spread.

// let arr = [1,2,3,4,5]
// let newArr = [...arr, 0]
// console.log(newArr);

// Создайте объект person с полями name и age. Используя оператор spread, 
// создайте новый объект newPerson, содержащий все поля из person, а также дополнительное поле city.

// const person = {
//     name: 'meka',
//     age: 18
// }
// const newPerson = { ...person, city: 'bishkek' }
// console.log(newPerson);

// Создайте функцию, которая принимает на вход объект person с полями name, age и city, 
// а затем с помощью оператора spread выводит значения этих полей в консоль.


// У вас есть объект person с полями name, age и city. Создайте новый объект newPerson, который содержит все поля из person, кроме поля city. Используйте деструктуризацию и оператор spread.

// const person = {
//     name: 'meka',
//     age: 18,
//     city: 'Bishkek'
// }
// const { city, ...newPerson } = person
// console.log(newPerson);

// Создайте массив numbers с элементами 1, 2, 3, 4, 5. С помощью деструктуризации и оператора spread создайте новый массив, 
// содержащий первый элемент исходного массива и все остальные элементы, начиная со второго.



// Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender. 
// Создайте новый объект newPerson, который содержит поле name из person1 и поля city и gender из person2. 
// Используйте деструктуризацию и оператор spread.

// const person1 = {
//     name: 'meka',
//     age: 18
// }
// const person2 = {
//     city: 'Bishkek',
//     gender: 'girl'
// }
// const newPerson = { ...person1, ...person2 }
// console.log(newPerson);

// Создайте объект person с полями name и age, а также массив hobbies со строками, описывающими хобби. 
//Создайте новый объект newPerson, который содержит все поля из person, а также дополнительное поле hobbies, содержащее все элементы массива hobbies. Используйте деструктуризацию и оператор spread.

// Создайте функцию, которая принимает на вход объект person с полями name, age и city, а затем с помощью деструктуризации и оператора spread выводит значения этих полей в консоль, а также строку "Country: USA".