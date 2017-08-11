
function Store (storeLocation, minCustomer, maxCustomer, avgCookies, id, ) {
    this.storeLocation = storeLocation;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.id = id;
    this.cookiesPerHour = [];
    this.dailyStoreTotal = 0;
    this.addToDom();
}

//Calculating avg customer per hour.
Store.prototype.calculateCust = function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}

//Calculating total cookies per hour for each store. 
Store.prototype.calCookiePerHour = function () {
        console.log(this.cookiesPerHour);
    for (var i = 0; i < 15; i++) {
        this.cookiesPerHour.push(Math.floor( this.calculateCust() * this.avgCookies ));
    }
    return this.cookiesPerHour;
}

Store.prototype.dailyStoreTotalCalc = function () {
   this.dailyStoreTotal = this.cookiesPerHour.reduce(function( a , b ) { return a + b });
}

// getting stores to display on DOM
Store.prototype.addToDom = function () {
    this.calCookiePerHour();
    var containerStore = document.getElementById("stores");
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', this.id);
    newRow.innerHTML = this.storeLocation;
    containerStore.appendChild(newRow);


    var containerRow = document.getElementById(this.id);

//getting data to display on DOM
    for (var i = 0; i < 15; i++ ) {
        var newTableData = document.createElement('td')
        newTableData.innerText = this.cookiesPerHour[i]
        containerRow.appendChild(newTableData);
    }

    // this.dailyStoreTotalCalc();
    // tdStoreTotal.innerText = this.dailyStoreTotal;
    // containerRow.appendChild(tdStoreTotal);
}

Store.prototype.allStoreTotal = function () {
    var tdStoreTotal = document.createElement('td');
    tdStoreTotal.setAttribute('class', 'daily-total' );
    var dailyTotalIntegers = 0;
    var dailyTotalList = document.getElementsByClassName('daily-total');
    for (var i = 0; i < 5; i++ ) {
        console.log(dailyTotalIntegers, dailyTotalList)
    dailyTotalIntegers = parseInt(dailyTotalIntegers + dailyTotalList[i]);
    return dailyTotalIntegers;
    console.log(dailyTotalList[0]);
    }
}

var pdxAirport = new Store('PDX Airport', 23, 65, 6.3, );
var pioneerSquare = new Store('Pioneer Square', 3, 24, 1.2, 'pioneer-square');
var powells = new Store('Powell\'s', 11, 38, 3.7, 'powells');
var stJohns = new Store('St. John\'s', 20, 38, 2.3, 'st-johns');
var waterFront = new Store('Waterfront', 2, 16, 4.6, 'waterfront');

var allShops = [pdxAirport, pioneerSquare, powells, stJohns, waterFront];



function renderHourlyTotal () {
    var addRow =  document.getElementById('stores');
    var hourlyTotalsRow = document.createElement('tr');

    var hourlyHeader = document.createElement('th');
    hourlyHeader.innerText = 'Hourly Totals';

    hourlyTotalsRow.appendChild (hourlyHeader);

        for (var i = 0; i <14; i ++ ) {
            var newCell = document.createElement('td');
            
            var colTotal = 0 ;
            for (var j = 0; j < allShops.length; j ++ ) {
                colTotal += allShops[j].cookiesPerHour[i];
            }

            newCell.innerText = colTotal
            hourlyTotalsRow.appendChild(newCell);
        }

    addRow.appendChild(hourlyTotalsRow);
}