class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim : " + this.name + "Yas : " + this.age);
    }
}

class Employee extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }

    //Override yapılmak istenirse
    showInfos(){
        console.log("İsim : " + this.name + " Yas : " + this.age+ " Maas : " + this.salary);
    }
}

const emp1 =  new Employee("Mustafa Furkan" ,25, 4000);
emp1.showInfos(); //Employee daki showInfos mEthodu kullandı. Override yaptı.