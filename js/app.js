'use strict';

let sales = document.getElementById('sales');
let hours =  ['6:00am' ,'7:00am','8:00am','9:00am','100:am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm', '7:00pm'];


function City(name , minCus, maxCus,avg) {

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


// console.log(arr[0].total);



let table2 = document.createElement('table');
sales.appendChild(table2);

function createHeader(){

  let row = document.createElement('tr');
  table2.appendChild(row);

  hours.unshift('');
  hours.push('daily total ');


  for(let i =0 ; i < hours.length ;i++){
    let HeadTable =document.createElement('th');
    HeadTable .textContent = hours[i];
    row.appendChild(HeadTable );
  }

}




City.prototype.createTable2 =function() {


  let fitstrowDATA = document.createElement('tr');
  table2.appendChild(fitstrowDATA);

  let fitstrowName = document.createElement('th');
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



function createfooter( ){





  let footer = document.createElement('tr');
  table2.appendChild(footer );

  let firstItemfooter = document.createElement('th');
  firstItemfooter.textContent='total';
  footer.appendChild(firstItemfooter );

  let Arr = [];


  for(let i= 0;i < hours.length -2;i++){
    let footerTable = document.createElement('td');

    let sumCountry  = 0;
    
    for (let x= 0; x < arr.length ; x++){

      sumCountry += arr[x].cookiesSales[i];


    }

    Arr.push(sumCountry);

    footerTable.textContent = Arr[i];

    footer.appendChild(footerTable );
    footerTable.classList.add("hide");
  }



  let SumTotal = document.createElement('td');
  let sumCountry  = 0;

  for (let x= 0; x < arr.length ; x++){

    sumCountry += arr[x].total;


  }




  SumTotal.textContent = sumCountry;
  footer.appendChild(SumTotal );

}









createHeader();
// seattle.createTable2();
// tokyo.createTable2();
// dubai.createTable2();
// paris.createTable2();
// lima.createTable2();


for(let i=0;i < arr.length; i++){
  arr[i].getCookies();
  arr[i].createTable2();
}

// japan.createTable2();

// if(addNewLocation){

// }else{

// }


createfooter( );


let formLocation= document.getElementById('formlocation');

formLocation.addEventListener('submit',addNewLocation);


function addNewLocation(event) {

  event.preventDefault();

  let location = event.target.location.value;
  let max = event.target.max.value;
  let min = event.target.min.value;
  let avg = event.target.avg.value;


  let newLocation = new City(location , min , max , avg);

  arr.push(newLocation);
  newLocation.getCookies();
  newLocation.createTable2();
  
  table2.removeChild(table2.childNodes[arr.length]);
 
  createfooter( );
  

}



