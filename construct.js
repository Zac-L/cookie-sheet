function Animal (name, species, food) {

this.name = name;
this.species = species;
this.food = food;

}

Animal.prototype.askForFood = function () {
    alert('Give me some ' + this.food + ' -' + this.name);
}

Animal.prototype.addToDom = function () {
    var listId = document.getElementById (this.species);
    var listItem = document.createElement('li');
    listItem.innerText = this.name; //concat to html here
    list.appendChild(listItem);
}

var zebra0 = new Animal('Zach', 'Zebra', 'grass');
var lion0 = new Animal('Leo', 'Lion', 'Hay');
var redPanda0 = new Animal('Lisa', 'Panda', 'Bamboo');

var animals = [zebra0, lion0, redPanda0];
for ( var i = 0; i < animals.length; i++) {
    animals[i].addToDom();
}

Show.prototype.render = function () {
    var tbody = document.getElementsByTagName('tbody')[0];
    var newRow = document.createElement('tr');

    var titleCell = document.createElement('td');
    titleCell.innerText = this.title

    var timeCell = document.createElement('td');
    timeCell.innerText = this.time; 

    var locationCell = document.createElement('td');
    locationCell.innerText = this.location;
    
    newRow.appendChild(titleCell);
    newRow.appendChild(timeCell);
    newRow.appendChild(locationCell);

    tbody.appendChild();

    console.log('tbody = ', tbody);
    console.log('newRow' )
}

