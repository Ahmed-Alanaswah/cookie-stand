'use strict';

let sales = document.getElementById('sales');
let hours =  ['','6am:00' ,'7am:00','8am:00','9am:','10am:00','11am:00','12pm:00','1pm:00','2pm:00','3pm:00','4pm:00','5pm:00','6pm:00', '7pm:00','daily total'];


function City(name , minCus,  maxCus,avg) {

  this.name= name;
  this.minCus= minCus;
  this.maxCus=maxCus;
  this.avg=avg;
  this.cookiesSales= [];
  this.total = 0;

  

}


City.prototype.getCookies = function(){

  for(let i= 0 ; i< hours.length ; i++){

    let randAVGCus = Math.floor(randomNUmber(this.minCus,this.maxCus)*this.avg);

    this.cookiesSales.push(randAVGCus );

    this.total += randAVGCus;

  }

  // console.log(this.cookiesSales);

};


function randomNUmber(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random()*(max-min+1)+min);

}


let seattle = new City('Seattle' , 23 , 65 , 6.3);

let tokyo = new City('Tokyo' , 3 ,24 , 1.2);

let dubai = new City('Dubai' , 11 , 38 , 3.7);

let paris = new City('Paris' , 20 , 38 , 2.3);


let lima = new City('Lima' ,2, 16 , 4.6);

let arr= [seattle , tokyo ,paris,dubai , lima];
for(let i=0;i < arr.length; i++){
  arr[i].getCookies();
}

// console.log(arr[0].total);






let table2 = document.createElement('table');
sales.appendChild(table2);

let row = document.createElement('tr');
table2.appendChild(row);

for(let i =0 ; i < hours.length ;i++){
  let HeadTable =document.createElement('th');
  HeadTable .textContent = hours[i];
  row.appendChild(HeadTable );
}





City.prototype.createTable2 =function() {


  let fitstrowDATA = document.createElement('tr');
  table2.appendChild(fitstrowDATA);

  let fitstrowName = document.createElement('td');
  fitstrowName.textContent = this.name;
  fitstrowDATA.appendChild(fitstrowName);

  for(let i=0; i < hours.length-2; i++){
    let rowDATA = document.createElement('td');
    rowDATA.textContent = this.cookiesSales[i];
    fitstrowDATA.appendChild(rowDATA);
  }

  let lastrowDATA = document.createElement('td');
  lastrowDATA.textContent = this.total;
  fitstrowDATA.appendChild(lastrowDATA);

};



let footer = document.createElement('tr');
table2.appendChild(footer );

let firstItemfooter = document.createElement('td');
firstItemfooter.textContent='total';
footer.appendChild(firstItemfooter );
let sumCountry  = 0;
let Arr = [];


for(let i= 0;i< hours.length;i++){

  for (let x= 0; x < arr.length ; x++){

    sumCountry += arr[x].cookiesSales[i];
  
    
  }
  
  Arr.push(sumCountry);
 

}




for(let i =  0 ; i < hours.length-1 ;i++){
  let footerTable = document.createElement('td');
  
  footerTable.textContent = Arr[i];

  footer.appendChild(footerTable );

  

}




seattle.createTable2();
tokyo.createTable2();
dubai.createTable2();
paris.createTable2();
lima.createTable2();


