const object = new Object(); //En Temel Obje 
const object2 = new Object();

object.Name = "Mustafa Furkan Karakulak";

console.log(object);
console.log(object2);

function ConstEmpObje(name,age) {

    this.Name = name,
    this.age = age
    
}
//her yaratılan nesnesin proto su her protonun temel objesi vardır. 
//Buna Proto Chain denir. Bir özellik kullanmak istediginde mesela .toString() bunu biz tanımlamasak bile kulanırız. Temel alınan objeden gelmektedir.
//.toString() methodunu ararken yukardan aşagı dogru arar.
//Kalıtım yapmamızı saglar (Inherit)
const emp1 = new ConstEmpObje("Mustafa","24");
console.log(emp1);

//////////////////////////////////////////////////////////////////////////////////////////////////////
function ConstEmpObje2(name,age) {

    this.Name = name,
    this.age = age,
    this.toString = function (){
        console.log("Bilgiler yazdırılıyor");
    }
}
// Bu kullanımda Temel objenin .toString() methodunu degil, Bizim yazdığımızı kullanır.
// Yukardan aşağı inerken ilk karşılaştıgını kullanır.
const emp2 = new ConstEmpObje2("Mustafa","24");
console.log(emp2);


///////////////////////////////////////////////////////////////////////////////////////////////////////

//Yukardaki ConstEmpObje2 fonksiyonunda kullanmakta oludumuz showInfo methodu yaratılan her nersen için ayrı olarak bellekte yer kaplar.
//Bu istenmeyen bir durum. Biz Prota Chain yapısından faydalanaraktan kalıtım saglayabiliriz.
// Bu showInfo methodunu ConstEmpObje3 altındaki proto da tanımlarsak bellekte oluşturlan nesne sayısı kadar degil, Sadece bir tane tutulur.
function ConstEmpObje3(name,age) {

    this.Name = name,
    this.age = age
}

ConstEmpObje3.prototype.showInfo = function(){
    console.log("bilgiler yazdırılıyor")
}

const emp3 = new ConstEmpObje3("Mustafa","24");
const emp4 = new ConstEmpObje3("Mustafa","23");
console.log(emp3);
console.log(emp4);