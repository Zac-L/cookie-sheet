function Store(storeLocation, minCustomer, maxCustomer, avgCookies, id, openHours) {
    this.storeLocation = storeLocation,
        this.minCustomer = minCustomer,
        this.maxCustomer = maxCustomer,
        this.avgCookies = avgCookies,
        this.id = id,
        this.cookiesPerHour = [],
        this.dailyStoreTotal = 0,
        this.addToDom();
        
}


Store.prototype.calculateCust = function () {
    return Math.floor(Math.random() * (parseInt( this.maxCustomer ) - parseInt( this.minCustomer) ) + parseInt( this.minCustomer));
}

Store.prototype.avgSalePerCustomer = function () {
    return this.calculateCust() * this.avgCookies;
}

//total sales per hr (customersPerHr * amt of cookies per customer)
Store.prototype.calcCookiesPerHour = function () {
    for (var i = 0; i < 15; i++) {
        this.cookiesPerHour.push(Math.floor(this.avgSalePerCustomer()));
    }
    return this.cookiesPerHour;
}

Store.prototype.dailyStoreTotalCalc = function () {
    this.dailyStoreTotal = this.cookiesPerHour.reduce( function (a, b) { return a + b} );
}



Store.prototype.addToDom = function () {
    this.calcCookiesPerHour();
    var containerStore = document.getElementById("stores");
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', this.id);
    newRow.innerHTML = this.storeLocation;
    containerStore.appendChild(newRow);
    
    //populating the row with cookies per hr data
    var container = document.getElementById(this.id);
    for (var i = 0; i < 15; i++) {
        var newTableData = document.createElement('td');
        newTableData.innerText = this.cookiesPerHour[i]; //[i]
        container.appendChild(newTableData);
        this.dailyStoreTotal += this.cookiesPerHour[i];
    }
    var newTotalCol = document.createElement('td');
    newTotalCol.innerHTML = this.dailyStoreTotal;
    container.appendChild(newTotalCol);
} 


function renderHourlyTotals () {
    console.log(allShops)
    var tbody = document.getElementById("stores")
    var hourlyTotalsRow = document.createElement( 'tr' );
    hourlyTotalsRow.id = 'total row';

    var hourlyHeader = document.createElement( 'th' );
    hourlyHeader.innerText = 'Hourly Totals';

    hourlyTotalsRow.appendChild( hourlyHeader );
    tbody.appendChild( hourlyTotalsRow);

    for ( var i = 0; i < 15; i++ ) { //loop over hours/columns
        var newCell = document.createElement( 'td' );
        var colTotal = 0
        for ( var j = 0; j < allShops.length; j ++ ) { //loop over shop instances
            //console.log('what shop iteration: ' allShops[j])
            //console.log( 'thats shows cookie num at hour ' + i + ':' + allShops.cookiesPerHour[i])
            colTotal += allShops[j].cookiesPerHour[i];
        }

        newCell.innerText = colTotal;
        hourlyTotalsRow.appendChild( newCell );
    }
    var grandTotalContainer = document.createElement('td');
    grandTotalContainer.innerText = grandTotal();
    hourlyTotalsRow.appendChild(grandTotalContainer);
}
//TODO create another for loop to iterate over allShops to give allShopTOtaltotal

var pdxAirport = new Store('PDX Airport', 23, 65, 6.3, 'pdx-airport');
var pioneerSquare = new Store('Pioneer Square', 3, 24, 1.2, 'pioneer-square');
var powells = new Store('Powell\'s', 11, 38, 3.7, 'powell');
var stJohns = new Store('St. John\'s', 20, 38, 3.7, 'st-johns');
var waterfront = new Store('Waterfront', 2, 16, 4.6, 'waterfront');

var allShops = [pdxAirport, pioneerSquare, powells, stJohns, waterfront]
renderHourlyTotals();

//TODO Build form 
var form = document.getElementById("newStore");
form.addEventListener( 'submit', function () {
    event.preventDefault();
    var something = document.getElementById('total row');
    something.innerHTML = '';
    var newStore = new Store( this.storeLocation.value, this.minCustomer.value, this.maxCustomer.value, this.avgCookie.value, this.storeId.value)
renderHourlyTotals();
});

function grandTotal () {
    var grandTotal = 0;
    for (var i = 0; i < allShops.length; i++ ) {
        grandTotal += allShops[i].dailyStoreTotal;
    }
    return grandTotal;
}
