'use strict'
const hours=['6am','7am','8am','9am','10am','11am','12am'
,'1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parentElement=document.getElementById('salesData');
let seattle ={
name:'Seattel',
minCust:23,
maxCust:65,
avgCookies:6.3,
cookiesPerHour:[],
total:0,
getCustomer:function(){
  for(let i=0;i<hours.length;i++){
    let cookies =getRandomCustomer(this.minCust,this.maxCust)*this.avgCookies;
    this.cookiesPerHour.push(Math.ceil(cookies));
    this.total+=cookies;
  }
  
  
},
render:function(){
let h2=document.createElement('h2');
parentElement.appendChild(h2);
h2.textContent=this.name;

let ul =document.createElement('ul');
parentElement.appendChild(ul);

for(let i=0;i<hours.length;i++)
{
  let li =document.createElement('li');
  ul.appendChild(li);
  li.textContent =`${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
}
let totaly =document.createElement('li');
  ul.appendChild(totaly);
  totaly.textContent = 'Total is '+Math.floor(this.total);
  
}

}



function getRandomCustomer(min,max){
    return Math.floor(Math.random()*(max-min +1)+min);
}

seattle.getCustomer();
seattle.render();

// end seattel


let tokyo ={
name:'Tokyo',
minCust:3,
maxCust:24,
avgCookies:1.2,
cookiesPerHour:[],
total:0,
getCustomer:function(){
  for(let i=0;i<hours.length;i++){
    let cookies =getRandomCustomer(this.minCust,this.maxCust)*this.avgCookies;
    this.cookiesPerHour.push(Math.ceil(cookies));
    this.total+=cookies;
  }
  
  
},
render:function(){
let h2=document.createElement('h2');
parentElement.appendChild(h2);
h2.textContent=this.name;

let ul =document.createElement('ul');
parentElement.appendChild(ul);

for(let i=0;i<hours.length;i++)
{
  let li =document.createElement('li');
  ul.appendChild(li);
  li.textContent =`${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
}
let totaly =document.createElement('li');
  ul.appendChild(totaly);
  totaly.textContent = 'Total is '+Math.floor(this.total);
  
}

}



function getRandomCustomer(min,max){
    return Math.floor(Math.random()*(max-min +1)+min);
}

tokyo.getCustomer();
tokyo.render();

// end of tokyo

let dubai ={
name:'Dubai',
minCust:11,
maxCust:38,
avgCookies:3.7,
cookiesPerHour:[],
total:0,
getCustomer:function(){
  for(let i=0;i<hours.length;i++){
    let cookies =getRandomCustomer(this.minCust,this.maxCust)*this.avgCookies;
    this.cookiesPerHour.push(Math.ceil(cookies));
    this.total+=cookies;
  }
  
  
},
render:function(){
let h2=document.createElement('h2');
parentElement.appendChild(h2);
h2.textContent=this.name;

let ul =document.createElement('ul');
parentElement.appendChild(ul);

for(let i=0;i<hours.length;i++)
{
  let li =document.createElement('li');
  ul.appendChild(li);
  li.textContent =`${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
}
let totaly =document.createElement('li');
  ul.appendChild(totaly);
  totaly.textContent = 'Total is '+Math.floor(this.total);
  
}

}



function getRandomCustomer(min,max){
    return Math.floor(Math.random()*(max-min +1)+min);
}

dubai.getCustomer();
dubai.render();

//end of dubai


let paris ={
name:'Paris',
minCust:20,
maxCust:38,
avgCookies:2.3,
cookiesPerHour:[],
total:0,
getCustomer:function(){
  for(let i=0;i<hours.length;i++){
    let cookies =getRandomCustomer(this.minCust,this.maxCust)*this.avgCookies;
    this.cookiesPerHour.push(Math.ceil(cookies));
    this.total+=cookies;
  }
  
  
},
render:function(){
let h2=document.createElement('h2');
parentElement.appendChild(h2);
h2.textContent=this.name;

let ul =document.createElement('ul');
parentElement.appendChild(ul);

for(let i=0;i<hours.length;i++)
{
  let li =document.createElement('li');
  ul.appendChild(li);
  li.textContent =`${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
}
let totaly =document.createElement('li');
  ul.appendChild(totaly);
  totaly.textContent = 'Total is '+Math.floor(this.total);
  
}

}



function getRandomCustomer(min,max){
    return Math.floor(Math.random()*(max-min +1)+min);
}

paris.getCustomer();
paris.render();

// end of paris


let lima ={
name:'Lima',
minCust:2,
maxCust:16,
avgCookies:4.6,
cookiesPerHour:[],
total:0,
getCustomer:function(){
  for(let i=0;i<hours.length;i++){
    let cookies =getRandomCustomer(this.minCust,this.maxCust)*this.avgCookies;
    this.cookiesPerHour.push(Math.ceil(cookies));
    this.total+=cookies;
  }
  
  
},
render:function(){
let h2=document.createElement('h2');
parentElement.appendChild(h2);
h2.textContent=this.name;

let ul =document.createElement('ul');
parentElement.appendChild(ul);

for(let i=0;i<hours.length;i++)
{
  let li =document.createElement('li');
  ul.appendChild(li);
  li.textContent =`${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
}
let totaly =document.createElement('li');
  ul.appendChild(totaly);
  totaly.textContent = 'Total is '+Math.floor(this.total);
  
}

}



function getRandomCustomer(min,max){
    return Math.floor(Math.random()*(max-min +1)+min);
}

lima.getCustomer();
lima.render();

// end of Lima
