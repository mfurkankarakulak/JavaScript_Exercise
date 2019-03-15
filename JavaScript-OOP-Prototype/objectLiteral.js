console.log(window); //Temel alınan obje

const emp1 = {  //Object Literal 

    name : "Mustafa Furkan",
    Age: 24,
}

emp1.Salary = 4000;

const emp2 = {
    name: "Mehmet",
    Title : "Software Engineer",
    Salary : function() { CalculatorSalary() }
}

function CalculatorSalary(){
    console.log("Salary is Calculating");
}

emp2.Salary();
console.log(emp1);
