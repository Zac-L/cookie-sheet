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
  },

addToDom: function () {
    openHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
    var listAdd = document.getElementById('cookie');
        for (var i = 0; i < 15; i++) {
    var newList = document.createElement('li');
    newList.innerHTML = (openHours[i] + this.cookieData()[i] + ' cookies');
    listAdd.appendChild(newList);
        }
  }
}
pdxAirport.addToDom();

console.log(Object.keys(pdxAirport));

console.log(pdxAirport.cookieData());

