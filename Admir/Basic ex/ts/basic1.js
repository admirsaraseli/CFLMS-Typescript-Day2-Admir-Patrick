var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic 1
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.getData = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var person1 = new Person("Admir Saraseli", "33", "Developer");
document.getElementById("result1").innerHTML = person1.getData();
// Basic 2
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Student.prototype.getAllData = function () {
        return _super.prototype.getData.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return Student;
}(Person));
var student = new Student("Admir Saraseli", "33", "Developer", "30K", "Wien");
document.getElementById("result2").innerHTML = student.getAllData();
