'use strict'
const hours=['6am','7am','8am','9am','10am','11am','12am'
,'1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


var article = document.createElement('article');
var table = document.createElement('table');
var tbody = document.createElement('tbody');

function generateRandomeCookies(min, max) {
  var randomValue = Math.random();
  return Math.floor(randomValue * (max - min + 1)) + min;
}

var locationName = [];
var totalCookiesArray = [];

function TableOfData(location, minCustomer, maxCustomer, avgCookies) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.numberPerHour = 0;
    this.totalCookies = 0;
    this.cookiesPerHour = [];
    locationName.push(this);
}

TableOfData.prototype.renderedArray = function() {
    var parentElements = document.getElementById('NumberOfCustmer');

    parentElements.appendChild(article);
    article.appendChild(table);

    var tr = document.createElement('tr');
    table.appendChild(tbody);
    tbody.appendChild(tr);

    var td = document.createElement('td');
    td.textContent="Locations";
    tr.appendChild(td);

    for(var i = 0; i < hours.length; i++) {

        var td = document.createElement('td');

        this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
        this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);

        this.cookiesPerHour.push(this.numberPerHour * Math.floor(this.avgCookies));

        td.textContent = this.numberPerHour * Math.floor(this.avgCookies);
        tr.appendChild(td);
    }

    this.cookiesPerHour.push(this.totalCookies);
    totalCookiesArray.push(this.cookiesPerHour);
    var totlaLi = document.createElement('td');
    totlaLi.textContent = this.totalCookies;
    tr.appendChild(totlaLi);
};


var Seattle = new TableOfData('Seattle', 23, 65, 6.3);
Seattle.renderedArray();

var Tokyo = new TableOfData('Tokyo', 3, 24, 1.2);
Tokyo.renderedArray();

var Dubai = new TableOfData('Dubai', 11, 38, 3.7);
Dubai.renderedArray();

var Paris = new TableOfData('Paris', 20, 28, 2.3);
Paris.renderedArray();

var Lima = new TableOfData('Lima', 2, 16, 4.6);
Lima.renderedArray();

let form=document.getElementById("LocationForm");
function locationSubmission(event){

    event.preventDefault();
    
    let name=event.target.Cityname.value;
    let min=event.target.minCookies.value;
    let max=event.target.maxCookies.value;
    let avg=event.target.avgCookies.value;
    var newName = new TableOfData(name, min, max, avg);
    var minm=parseInt(min);
    var maxm=parseInt(max);
   if(minm>=maxm){
       alert("check the maximum grater than minimum");
   }
       else {newName.renderedArray();}
       form.reset();
}

form.addEventListener('submit',locationSubmission);


createTable();

function createTable() {
    

    hours.unshift('');
    
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    var footerRow = document.createElement('tr');
    tfoot.appendChild(footerRow);

    for(var i = 0; i < hours.length; i++) {
        var td = document.createElement('td');
        td.textContent = hours[i];
        tr.appendChild(td);
    }


    var b = [];
     	
    for(i = 0; i < totalCookiesArray[0].length; i++){						
       var count = 0;
        for(var j = 0; j < totalCookiesArray.length; j++){				
            count += totalCookiesArray[j][i];
        }
        b.push(count);
    }		
    

    b.unshift('Totals');
    for (var y = 0; y < b.length; y++) {
            var tdFoot = document.createElement('td');
            tdFoot.textContent = b[y];
            footerRow.appendChild(tdFoot);
    }

    
    var lasttd = document.createElement('td');
    lasttd.textContent = "Daily Location Total";
    tr.appendChild(lasttd);
}







