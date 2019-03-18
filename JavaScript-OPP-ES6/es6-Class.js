//Syntactic Sugar

class Employee{

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){

        console.log(this.name + " " +this.age +" "+ this.salary);
    }

}

const emp1 = new Employee("Mustafa Furkan",25,4000);
emp1.showInfos();