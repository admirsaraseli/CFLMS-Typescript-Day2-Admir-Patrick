// Basic 1
class Person {

   name = "";
   age = "";  
   jobTitle = "";
   

  constructor(name, age, jobTitle) { 
       this.name = name;
       this.age = age;
       this.jobTitle = jobTitle;
       
   }

   getData() { 
       return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
   }

}

let person1 = new Person("Admir Saraseli", "33", "Developer");

document.getElementById("result1").innerHTML = person1.getData()


// Basic 2
class Student extends Person {
   salary = "";
   jobLocation = "";

   constructor(name, age, jobTitle, salary, jobLocation) {
       super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
   }

   getAllData() {
       return `${super.getData()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
   }
}

let student = new Student("Admir Saraseli", "33", "Developer", "30K", "Wien");

document.getElementById("result2").innerHTML = student.getAllData()