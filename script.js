/*
Number (ЧИСЛА) 
String (СТРОКИ)
Boolean (правда/нет)
Object (объекты)
Null
Undefined
*/

var num1 = 12
var num2 = 8

console.log('+;', num1 + num2)
console.log('-;', num1 - num2)
console.log('*', num1 * num2)
console.log('/', num1 / num2)

var str1 = 'Hello'
var str2 = 'World'

console.log('+', str1 + ' ' + str2)
console.log('str1 + num1;', str1 + num1)

console.log('Boolean + string;', true + str2)
console.log('True + 1;', true + 1)
console.log('False + 1;', false + 1)

var result = 12 - 6 / 3
var result2 = 3 + 4 * 2
var isGreater = 20 - 6 * 3 >= 4
var isGreater = 20 - 6 * 3 >= 1

console.log('12 - 6 / 3 =', result)
console.log('3 + 4 * 2 =', result2)
console.log('20 - 6 * 3 >= 4;', isGreater)
console.log('20 - 6 * 3 >= 1;', isGreater)

console.log('5 % 2', 5 % 2)
var i = 1
//i = i + 1
i++
console.log('i =', i)
//i = i - 1
i--
console.log('i =', i)
//i = i + 3
i += 3
console.log('i =', i)

console.log('i =', ++i)

console.log('5 > 3', 5 > 3)
console.log('3 < 2', 3 < 2)

console.log('8 >= 7', 8 >= 7)

console.log('4 == 4', 4 == 4)
console.log('4 != 5', 4 != 5)

console.log('4 === 4', 4 === 4)
console.log('4 == 4', 4 == '4') // false
console.log('4 === 4', 4 === '4') // true

/*
&& (и) - норм
|| (или) - наоборот 
*/

var currentYear = 2018
var carName = 'Ford'
var carYear = 2008
var carAge = currentYear - carYear
if(carAge < 5){
 console.log(carName + ' младше 5 лет')
} else if(carAge >= 5 && carAge <= 10){
console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
} else {
    console.log('Возраст' + carName + 'равняется' + carAge + 'годам')
}

// 0 null undefined '' NaN - false

if (4){
console.log('Значение true')
} else {
console.log('Значение false')
}

4 ? console.log('Значение true') :  console.log('Значение false')

var personAge = 20

if (personAge < 18){
    message = 'человек еще не совершеннолетний'
} else {
    message = 'человек совершеннолетний'
}
var message = personAge < 18 
? 'человек еще не совершеннолетний' 
: 'человек совершеннолетний'
console.log(message)

var carColor = 'red'

/*if (carColor === 'green'){
    console.log('Цвет машины зеленый')
} else if (carColor === 'yellow'){
    console.log('Цвет машины желтый')
} else if (carColor === 'red'){
    console.log('Цвет машины красный')
} else {
    console.log('Цвет машины не определен')
}
*/
switch(carColor){
    case 'green':
        console.log('Цвет машины зеленый')
        break
    case 'yellow':
        console.log('Цвет машины желтый')
        break
    case 'red':
        console.log('Цвет машины красный')
        break       
    default:
        console.log('Цвет машины не определен')
}

var carName = 'Ford'
var carYear = 2008
var personYear = 1990

function calculateAge(year){
    var currentYar = 2018
    var result = currentYar - year
    return result
}
function checkAndLogAge (year, name, compareTo){
    if(calculateAge (year) < compareTo) {
        console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
        } else {
            console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
        } 
}

checkAndLogAge(carYear, 'машины', 8)
checkAndLogAge(personYear, 'человека', 30)


var sayHelloTo = function (name){
    console.log('Привет, ' + name)
}
sayHelloTo('Игрик')


var str1 = 'Helo'
var personName = 'Виктор'
var message = 'человека зовут "' + personName + '"'
console.log(message)

var newMesaage = 'Hello world'
console.log(newMesaage. length)
console.log(newMesaage. toUpperCase())
console.log(newMesaage. toLowerCase())
console.log(newMesaage. charAt(1))
console.log(newMesaage. indexOf('world'))
console.log(newMesaage. substr(0, 4))
console.log(newMesaage. substr(newMesaage.indexOf('world'), 5))
console.log(newMesaage. substring(1, 3))

console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3)
console.log(0xAB)
console.log(2e3)
console.log(NaN) // not a number
console.log(1445 / 0)

var fortyTwo = 42
var delta = 8 / 3

console.log(fortyTwo. toString())
console.log(+delta. toFixed(1) + 4)
console.log(parseFloat(delta.toFixed(2))) // 2.67
console.log(parseInt(delta.toFixed(2))) // 2

console.log(isNaN (NaN))
console.log(isNaN (54))
console.log(isFinite (1 / 0)) // бесконечность
console.log(isFinite (99999))

var cars = [
    'Ford',
    'Mazda',
    'BMW'
]
console.log(cars) 
console.log(cars[2]) // 1 - номер элемента

console.log(cars. length)

 //добавит новый элемент в конец
cars.push('Audi')
console.log(cars)

// удаляет  и возвращает последний элемент
var audi = cars.pop() 
console.log(cars, audi)

// удалять и возвращать первый элемент
var ford = cars.shift()
console.log(cars, ford)

// добавляет в начало
cars.unshift(audi)
console.log(cars)


 var person = {
     name: 'Вася',
     year: 1990,
     family: ['Елена', 'Игорь'],
     car: {
         year: 2010,
         model:'Ford'
     },
     calculateAge: function() {
       this. age = 2018 - this // = person.year
     }
}
console.log(person)
console.log(person.name)
console.log(person['year'])
console.log(person.year)

var field = 'car'
console.log(person[field].year)

person.year = 1993

console.log(person)

person.calculateAge()
