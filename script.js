// 1. В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
// function word(string){
//     let reverseString = '';
//     for(let i = string.length -1; i >= 0; i--){ //-1 что бы убрать 0(undefined)
//         reverseString += string[i];
//     }
//     return reverseString;
// }
// console.log(word('Hello'));

// 2. Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// Палиндром - слово, одинаково читающееся как слева направо, так и справа налево.

// function palindrome(string){
//     let reverseString = '';
//     for(let i = string.length -1; i >= 0; i--){
//         reverseString += string[i];
//     }
//     if(string === reverseString){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
//     // return reverseString;
// }
// palindrome(prompt('Is this a palindrome?'));


// 3. Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

// for(let i = 0; i <= 50; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// 4. Написать цикл, который выводит только названия товаров

const products = [
    {
        title: 'Nike',
        price: 300,
        type: 'shoe',
    },
    {
        title: 'Puma',
        price: 450,
        type: 'shoe',
    },
    {
        title: 'Channel',
        price: 1200,
        type: 'bag',
    },
    {
        title: 'BMW',
        price: 7000,
        type: 'car',
    },
];

// for(let i = 0; i < products.length; i++){
//     console.log(products[i].title);
// }

// 5. Написать цикл, который выводит для каждого товара стоку по маске “<название> (<цена>)”

// for(let i = 0; i < products.length; i++){
//     // let {title, price} = products[i];
//     // console.log(`${title}: ${price}`);
//     console.log(`${products[i].title}: ${products[i].price}`);
// }

function expensive(array){
    let item = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i].price > item.price){
            item = array[i];
        }
    } 
    return item;
}
    console.log(expensive(products));
