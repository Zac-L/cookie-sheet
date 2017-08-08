
function Store (storeLocation, minCustomer, maxCustomer, avgCookies, id, openHours ) {
    this.storeLocation = storeLocation;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.id = id;
    this.cookiesPerHour = [];
    this.openHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
    this.addToDom();
}

Store.prototype.calculateCust = function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}

Store.prototype.calCookieData = function () {
        console.log(this.cookiesPerHour);
    for (var i = 0; i < this.openHours.length; i++) {
        this.cookiesPerHour.push(Math.floor( this.calculateCust() * this.avgCookies ));
    }
    return this.cookiesPerHour;
}

Store.prototype.addToDom = function () {
    this.calCookieData();
    var container = document.getElementById("stores");
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', this.id);
    newRow.innerHTML = this.storeLocation;
    container.appendChild(newRow);


    for (var i = 0; i < 15; i++ ) {
        var container = document.getElementById(this.id);
        var newTableData = document.createElement('td')
        newTableData.innerText = this.cookiesPerHour[i]
        container.appendChild(newTableData);
    }
}
// BobStore.prototype.addToDom = function () {
      
//     this.calCookieData();

//       var listAdd = document.getElementById('list');
//       var newList = document.createElement('li');

//     for ( var i = 0; i < this.openHours.length; i++) {
//         var cookieLi = document.createElement('li');
//         cookieLi.innerText = (this.openHours[i] + this.cookiesPerHour[i] + ' Cookies');
//         newList.appendChild(cookieLi);
//     }
//}

var pdxAirport = new Store('PDX Airport', 23, 65, 6.3, 'pdx-airport');
var pioneerSquare = new Store('Pioneer Square', 3, 24, 1.2, 'pioneer-square');
var powells = new Store('Powell\'s', 11, 38, 3.7, 'powells');
var stJohns = new Store('St. John\'s', 20, 38, 2.3, 'st-johns');
var waterFront = new Store('Waterfront', 2, 16, 4.6, 'waterfront');