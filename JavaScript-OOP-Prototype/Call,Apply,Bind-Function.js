const obj1 = {

    number1:10,
    number2:20
}
const obj2 = {
    number1:100,
    number2:200
}

function addNumbers(number3,number4){

    console.log(this.number1+this.number2+ number3+number4);
}
//Call kullanımı
addNumbers.call(obj1,300,400);
addNumbers.call(obj2,300,400);

//Apply kullanımı dizi şeklinde veriliyor
addNumbers.apply(obj1,[300,400]);
addNumbers.apply(obj2,[300,400]);

//Bind Kullanımı
const bind1 = addNumbers.bind(obj1);
const bind2 = addNumbers.bind(obj2);

bind1(300,400);
bind2(300,400);