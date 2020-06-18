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
$(document).ready(function () {
    var Vehicle = /** @class */ (function () {
        function Vehicle(model, year, fuelType, kilometers, performance) {
            this.model = "";
            this.year = 0;
            this.fuelType = "";
            this.kilometers = 0;
            this.performance = 0;
            this.model = model;
            this.year = year;
            this.fuelType = fuelType;
            this.kilometers = kilometers;
            this.performance = performance;
        }
        Vehicle.prototype.getData = function () {
            return "Details of the vehicle: " + this.model + ", \n         " + this.year + ", " + this.fuelType + ", \n         " + this.kilometers + ", " + this.performance + ".";
        };
        Vehicle.prototype.calculatePrice = function () {
            return (this.year - this.kilometers) * this.performance;
        };
        return Vehicle;
    }());
    var Motor = /** @class */ (function (_super) {
        __extends(Motor, _super);
        function Motor(model, year, fuelType, kilometers, performance, numberOfWheels) {
            var _this = _super.call(this, model, year, fuelType, kilometers, performance) || this;
            _this.numberOfWheels = 0;
            _this.numberOfWheels = numberOfWheels;
            return _this;
        }
        Motor.prototype.getNumberOfWheels = function () {
            return this.numberOfWheels;
        };
        return Motor;
    }(Vehicle));
    var Truck = /** @class */ (function (_super) {
        __extends(Truck, _super);
        function Truck(model, year, fuelType, kilometers, performance, numberOfSeats) {
            var _this = _super.call(this, model, year, fuelType, kilometers, performance) || this;
            _this.numberOfSeats = 0;
            _this.numberOfSeats = numberOfSeats;
            return _this;
        }
        Truck.prototype.getNumberOfSeats = function () {
            return this.numberOfSeats;
        };
        return Truck;
    }(Vehicle));
    $('#motor').on('click', function () {
        if (this.value == 1) {
            motor1 = new Motor("Harley Davidson", 2019, "Diesel", 300, 9, 2);
            var price = motor1.calculatePrice();
            document.getElementById("result").innerHTML = motor1.getData() +
                ("<br><button type=\"button\" class=\"btn btn-danger mt-3\" onclick=\"alert('" + price + " Euro')\">Calculate Price</button>");
        }
        if (this.value == 2) {
            motor2 = new Motor("Ducati", 2014, "Diesel", 700, 5, 2);
            var price = motor2.calculatePrice();
            document.getElementById("result").innerHTML = motor2.getData() +
                ("<br><button type=\"button\" class=\"btn btn-danger mt-3\" onclick=\"alert('" + price + " Euro')\">Calculate Price</button>");
        }
        if (this.value == 3) {
            motor3 = new Motor("Honda", 2017, "Diesel", 900, 7, 2);
            var price = motor3.calculatePrice();
            document.getElementById("result").innerHTML = motor3.getData() +
                ("<br><button type=\"button\" class=\"btn btn-danger mt-3\" onclick=\"alert('" + price + " Euro')\">Calculate Price</button>");
        }
    });
    $('#truck').on('click', function () {
        if (this.value == 1) {
            truck1 = new Truck("Mercedes", 2020, "Diesel", 40000, 10, 3);
            var price = truck1.calculatePrice();
            document.getElementById("result").innerHTML = truck1.getData() +
                ("<br><button type=\"button\" class=\"btn btn-danger mt-3\" onclick=\"alert('" + price + " Euro')\">Calculate Price</button>");
        }
        if (this.value == 2) {
            truck2 = new Truck("Ford", 2019, "Diesel", 130000, 7, 2);
            var price = truck2.calculatePrice();
            document.getElementById("result").innerHTML = truck2.getData() +
                ("<br><button type=\"button\" class=\"btn btn-danger mt-3\" onclick=\"alert('" + price + " Euro')\">Calculate Price</button>");
        }
        if (this.value == 3) {
            truck3 = new Truck("Volkswagen", 2019, "Diesel", 70, 7, 2);
            var price = truck3.calculatePrice();
            document.getElementById("result").innerHTML = truck3.getData() +
                ("<br><button type=\"button\" class=\"btn btn-danger mt-3\" onclick=\"alert('" + price + " Euro')\">Calculate Price</button>");
        }
    });
});
