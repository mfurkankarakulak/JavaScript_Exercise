// Eger bir obje oluştururken  prototype'ını başka bir objeden almak istersek Object.Create() methodunu kullanıyoruz.

const obj = {

    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}

//Bu kullanımla tst objemiz protoyu gösterir hale geldi. Kalıtım için bu kullanım önemlidir.
const tst = Object.create(obj);
//Objemize özellik ekleme
tst.name =  "Mustafa";
console.log(tst);

//Bir objenin prototype'ı kendini gösterir onun prototype'ı objeyi gösterir


//Aşagıdaki örnekte Employee nesnesinin prototype'ı başka bir nesnenin prototype'ını göstermektedir.
function Person(){

}
Person.prototype.Deneme1 = function(){
    console.log("Deneme 1");
} 
Person.prototype.Deneme2 = function(){
    console.log("Deneme 2");
}

function Employee(name,age){
    this.name = name,
    this.age = age
}
Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Mustafa Furkan Karakulak",34);
console.log(emp1);
