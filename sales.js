var pdxAirport = {
    Location: 'PDX Airport',
    minCustomer: 23,
    maxCustomer: 65,
    Avg: 6.3,
   calculate: function () {
      console.log(this.maxCustomer - this.minCustomer);
      console.log(this.minCustomer - this.maxCustomer);
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
   },
    avgSale: function () {
      return this.calculate() * this.Avg;
    }
}

pdxAirport.calculate();

