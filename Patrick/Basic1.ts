class Person {
    name = "";
    age = "";
    JobTitle = "";
    salary = "";
    jobLocation = "";

    constructor(name, age, JobTitle, jobLocation, salary) {
        this.name = name;
        this.age = age;
        this.JobTitle = JobTitle;
        this.jobLocation = jobLocation;
        this.salary = salary;
    }
    getData() {
        return `Hello there, My name is ${this.name} and i am ${this.age} years old, and I am a ${this.JobTitle}
        and i get ${this.salary} every month, and i work in ${this.jobLocation}.`;
    }
}

let person1 = new Person("Patrick", "30", "Developer", "Vienna", "36.000€");

document.getElementById("person").innerHTML = person1.getData()
