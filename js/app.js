'use strict';

let sales = document.getElementById('sales');
let hours =  [' ','6am:' ,'7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:', '7pm:','daily total'];


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


City.prototype.render = function(){

  

  // for(let i=0 ; i < hours.length ; i++ ){

  //   let liEle = document.createElement('li');
  //   liEle.textContent= `${hours[i]} ${this.cookiesSales[i]} cookies`;
  //   ulEle.appendChild(liEle);

  // }

  // let totalLiEle = document.createElement('li');
  // totalLiEle.textContent= `Total: ${this.total} cookies`;
  // ulEle.appendChild(totalLiEle);



};





// City.prototype.render = function(){

//   let h2Ele =document.createElement('h2');
//   h2Ele.textContent=this.name;
//   sales.appendChild(h2Ele);

//   let ulEle =document.createElement('ul');
//   sales.appendChild(ulEle);

//   for(let i=0 ; i < hours.length ; i++ ){

//     let liEle = document.createElement('li');
//     liEle.textContent= `${hours[i]} ${this.cookiesSales[i]} cookies`;
//     ulEle.appendChild(liEle);

//   }

//   let totalLiEle = document.createElement('li');
//   totalLiEle.textContent= `Total: ${this.total} cookies`;
//   ulEle.appendChild(totalLiEle);



// };


function randomNUmber(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random()*(max-min+1)+min);

}


let seattle = new City('Seattle' , 23 , 65 , 6.3);
// seattle.getCookies();
// seattle.render();

let tokyo = new City('Tokyo' , 3 ,24 , 1.2);
// tokyo.getCookies();
// tokyo.render();

let dubai = new City('Dubai' , 11 , 38 , 3.7);
// dubai.getCookies();
// dubai.render();

let paris = new City('Paris' , 20 , 38 , 2.3);
// paris.getCookies();
// paris.render();

let lima = new City('Lima' ,2, 16 , 4.6);
// lima.getCookies();
// lima.render();

let arr= [seattle , tokyo ,paris,dubai , lima];
for(let i=0;i < arr.length; i++){
  arr[i].getCookies();

 
//  console.log(arr[i].getCookies())
  // arr[i].render();
}
// console.log(arr[0].name)

console.log(arr[0].total);





function createTable (){
  let tableEl = document.createElement('table');
  sales.appendChild(tableEl);

  let rowHeadTablelEle = document.createElement('tr');
  tableEl.appendChild(rowHeadTablelEle);

  let firsHeadTablelEle =document.createElement('th');
      firsHeadTablelEle.textContent =' ';
      rowHeadTablelEle.appendChild(firsHeadTablelEle);

  for(let i =0 ; i < hours.length ;i++){
    let HeadTablelEle =document.createElement('th');
    HeadTablelEle.textContent =hours[i];
    rowHeadTablelEle.appendChild(HeadTablelEle);
  }


  for(let i= 0; i< arr.length ;i++){

    let rodataTablelEle =document.createElement('tr');
    tableEl.appendChild(rodataTablelEle);

    let fdataTablelEle = document.createElement('td');
      fdataTablelEle.textContent = arr[i].name;
      rodataTablelEle.appendChild(fdataTablelEle);

    for(let x=0 ; x < hours.length ; x++){

      
      let dataTablelEle = document.createElement('td');
      dataTablelEle.textContent = arr[i].cookiesSales[x];
      rodataTablelEle.appendChild(dataTablelEle);

    }

  }


  let rowfootTablelEle = document.createElement('tr');
  tableEl.appendChild(rowfootTablelEle);

  let firstfootTablelEle =document.createElement('td');
  firstfootTablelEle.textContent ='Total';
  rowfootTablelEle.appendChild(firstfootTablelEle);

  for(let i =0 ; i <hours.length ;i++){
    let footTablelEle =document.createElement('td');
    footTablelEle.textContent =10;
    rowfootTablelEle.appendChild(footTablelEle);
  }


}


console.log(seattle);
createTable ();
// let sales = document.getElementById('sales');
// let hours =  ['6am:' ,'7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:', '7pm:'];


// let Seattle = {

//   name:'Seattle',
//   minCus:23,
//   maxCus:65,
//   avg:6.3,
//   cookiesSales: [],
//   total : 0,
//   getCookies: function(){

//     for(let i= 0 ; i< hours.length ; i++){

//       let randAVGCus = Math.floor(randomNUmber(this.minCus,this.maxCus)*this.avg);

//       this.cookiesSales.push(randAVGCus );

//       this.total += randAVGCus;

//     }

//     console.log(this.cookiesSales);

//   },

//   render: function(){

//     let h2Ele =document.createElement('h2');
//     h2Ele.textContent=this.name;
//     sales.appendChild(h2Ele);

//     let ulEle =document.createElement('ul');
//     sales.appendChild(ulEle);

//     for(let i=0 ; i < hours.length ; i++ ){

//       let liEle = document.createElement('li');
//       liEle.textContent= `${hours[i]} ${this.cookiesSales[i]} cookies`;
//       ulEle.appendChild(liEle);

//     }

//     let totalLiEle = document.createElement('li');
//     totalLiEle.textContent= `Total: ${this.total} cookies`;
//     ulEle.appendChild(totalLiEle);



//   }

// };

// Seattle.getCookies();
// Seattle.render();





