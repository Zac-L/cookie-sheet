var pdxAirport = {
    Location: 'PDX Airport',
    minCustomer: 23,
    maxCustomer: 65,
    Avg: 6.3,
   calculate: function () {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
   },
    avgSale: function () {
      return this.calculate() * this.Avg;
    },
    cookieData: function () {
      var tempArr = [];
      for (i=0; i < 15; i++) {
tempArr.push(Math.floor(this.avgSale() ) );
    }
    return tempArr;
  }
}

pdxAirport.calculate();

console.log(pdxAirport.cookieData());

