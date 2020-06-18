class Person {
    name = "";
    age = "";
    JobTitle = "";

    constructor(name, age, JobTitle) {
        this.name = name;
        this.age = age;
        this.JobTitle = JobTitle;
    }
    getData() {
        return `Hello there, My name is ${this.name} and i am ${this.age} years old, and I am a ${this.JobTitle}`;
    }
}

class Students extends Person  {
    salary = "";
    jobLocation = "";

    constructor(name, age, JobTitle, jobLocation, salary) {
        super(name, age, JobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
}
    getAllData() {
        return `${super.getData()} and i get ${this.salary} every month, and i work in ${this.jobLocation}.`;
    }
}
// basic 1 //
let person1 = new Person("Patrick", "30", "Developer");

document.getElementById("person").innerHTML = person1.getData()

// basic 2 //
let students = new Students("Patrick", "30", "Developer","36.000€", "Vienna");

document.getElementById("person2").innerHTML = students.getAllData()
