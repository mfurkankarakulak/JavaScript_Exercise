
function ConsturucterEmp(name,age,salary){

    this.name = name;
    this.age =  age;
    this.salary = salary;

    this.showInfo = function ShowInfos(){
        console.log(this);
    }
}

const newEmp = new ConsturucterEmp("Ahmet","30","5000"); // new object
newEmp.showInfo();