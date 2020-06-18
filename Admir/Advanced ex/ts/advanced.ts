$(document).ready(function () {
  class Vehicle {
   model = "";
   year = 0;
   fuelType = "";
   kilometers = 0;
   performance = 0;
     
    constructor(model, year, fuelType, kilometers, performance) { 
         this.model = model;
         this.year = year;
         this.fuelType = fuelType;
         this.kilometers = kilometers;
         this.performance = performance;    
     }

     getData() { 
         return `Details of the vehicle: ${this.model}, 
         ${this.year}, ${this.fuelType}, 
         ${this.kilometers}, ${this.performance}.`;
     }

     calculatePrice() {
       return (this.year - this.kilometers) * this.performance
     }
  }

  class Motor extends Vehicle {
      numberOfWheels = 0;
      constructor(model, year, fuelType, kilometers, performance, numberOfWheels) {
         super(model, year, fuelType, kilometers, performance);
         this.numberOfWheels = numberOfWheels;
     }

      getNumberOfWheels() {
          return this.numberOfWheels;
      }
  }

  class Truck extends Vehicle {
      numberOfSeats = 0;
      constructor(model, year, fuelType, kilometers, performance, numberOfSeats) {
         super(model, year, fuelType, kilometers, performance);
         this.numberOfSeats = numberOfSeats;
     }

      getNumberOfSeats() {
          return this.numberOfSeats;
      }
  }

  $('#motor').on('click', function () {
    if (this.value == 1) {
      motor1 = new Motor("Harley Davidson", 2019, "Diesel", 300, 9, 2);
      let price = motor1.calculatePrice();
      document.getElementById("result").innerHTML = motor1.getData() +
      `<br><button type="button" class="btn btn-danger mt-3" onclick="alert('${price} Euro')">Calculate Price</button>`;
    }
    if (this.value == 2) {
      motor2 = new Motor("Ducati", 2014, "Diesel", 700, 5, 2);
      let price = motor2.calculatePrice();
      document.getElementById("result").innerHTML = motor2.getData() +
      `<br><button type="button" class="btn btn-danger mt-3" onclick="alert('${price} Euro')">Calculate Price</button>`;
    }
    if (this.value == 3) {
      motor3 = new Motor("Honda", 2017, "Diesel", 900, 7, 2);
      let price = motor3.calculatePrice();
      document.getElementById("result").innerHTML = motor3.getData() +
      `<br><button type="button" class="btn btn-danger mt-3" onclick="alert('${price} Euro')">Calculate Price</button>`;
    }
  });

   $('#truck').on('click', function () {
    
    if (this.value == 1) {
      truck1 = new Truck("Mercedes", 2020, "Diesel", 40000, 10, 3);
      let price = truck1.calculatePrice();
      document.getElementById("result").innerHTML = truck1.getData() +
      `<br><button type="button" class="btn btn-danger mt-3" onclick="alert('${price} Euro')">Calculate Price</button>`;
    }
     if (this.value == 2) {
      truck2 = new Truck("Ford", 2019, "Diesel", 130000, 7, 2);
      let price = truck2.calculatePrice();
      document.getElementById("result").innerHTML = truck2.getData() +
      `<br><button type="button" class="btn btn-danger mt-3" onclick="alert('${price} Euro')">Calculate Price</button>`;
    }
     if (this.value == 3) {
      truck3 = new Truck("Volkswagen", 2019, "Diesel", 70, 7, 2);
      let price = truck3.calculatePrice();
      document.getElementById("result").innerHTML = truck3.getData() +
      `<br><button type="button" class="btn btn-danger mt-3" onclick="alert('${price} Euro')">Calculate Price</button>`;
    }

  });

});