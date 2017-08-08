var pdxAirport = {
    Location: 'PDX Airport',
    minCustomer: 23,
    maxCustomer: 65,
    Avg: 6.3,
    tempArr: [],
    totalCookies: 0,

    getTotal: function() {
        for (var i = 0; i < 15; i++) {
            this.totalCookies += this.tempArr[i];
        }
    },

   calculate: function () {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
   },

    avgSale: function () {
      return this.calculate() * this.Avg;
    },

    cookieData: function () {
      for (i=0; i < 15; i++) {
this.tempArr.push(Math.floor(this.avgSale() ) );
    }
    return this.tempArr;
  },

addToDom: function () {
    openHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
    var listAdd = document.getElementById('cookie');
    // var savedData = this.cookieData()[i];
        for (var i = 0; i <= 15; i++) {
            if (i < 15) {
                var newList = document.createElement('li');
                newList.innerHTML = (openHours[i] + this.cookieData()[i] + ' cookies');
                listAdd.appendChild(newList);
            } else {
                var newList = document.createElement('li');
                this.getTotal();
                newList.innerText = ('Total cookies: ' + this.totalCookies);
                listAdd.appendChild(newList);
            }
        } 
  }
}
pdxAirport.addToDom();

// console.log(this.tempArr);

// console.log(totalCookies);

// console.log(Object.keys(pdxAirport));

// console.log(pdxAirport.cookieData());

var pioneerSquare = {
    Location: 'pioneerSquare',
    minCustomer: 3,
    maxCustomer: 24,
    Avg: 1.2,
    tempArr: [],
    totalCookies: 0,

    getTotal: function() {
        for (var i = 0; i < 15; i++) {
            this.totalCookies += this.tempArr[i];
        }
    },

   calculate: function () {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
   },

    avgSale: function () {
      return this.calculate() * this.Avg;
    },

    cookieData: function () {
      for (i=0; i < 15; i++) {
this.tempArr.push(Math.floor(this.avgSale() ) );
    }
    return this.tempArr;
  },

addToDom: function () {
    openHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
    var listAdd = document.getElementById('cookie');
    // var savedData = this.cookieData()[i];
        for (var i = 0; i <= 15; i++) {
            if (i < 15) {
                var newList = document.createElement('li');
                newList.innerHTML = (openHours[i] + this.cookieData()[i] + ' cookies');
                listAdd.appendChild(newList);
            } else {
                var newList = document.createElement('li');
                this.getTotal();
                newList.innerText = ('Total cookies: ' + this.totalCookies);
                listAdd.appendChild(newList);
            }
        } 
  }
}
pioneerSquare.addToDom();


