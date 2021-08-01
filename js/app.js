"use strict";


let list = document.getElementById('list');

let Seattle ={

  minOurlyCustomers :23,
  maxOurlyCustomers : 65,
  avCookeisPerCostumers: 6.3,

  randomCostumersPerOur: function(max,min){
    let randomNumber =  Math.floor(Math.random()*(max - min ) + min);

    return randomNumber;
        
  },


  amountCookiesHour: function(avCookeis){

    let cookiesOur=Math.floor(Seattle.randomCostumersPerOur(Seattle.maxOurlyCustomers,Seattle.minOurlyCustomers) * avCookeis);

    return cookiesOur;
  },



  createHtmlindex: function (){
    let h1lElement = document.createElement('h1');
    h1lElement.textContent = 'Seattle';
    list.appendChild(h1lElement);

    let arrTime =  ['6am:' ,'7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:', '7pm:'];

    let sum = 0;

    for(let x = 0; x<arrTime.length;x++){
      let ulElement = document.createElement('ul');
      list.appendChild(ulElement);
      let liElement = document.createElement('li');

      let Amount = Seattle.amountCookiesHour(Seattle.avCookeisPerCostumers);

      liElement.textContent =  arrTime[x] +  Amount + ' cookies';
      
      ulElement.appendChild(liElement);

      

      sum += Amount;


      
    }

    let totallElement = document.createElement('p');
    totallElement.textContent = `Total: ${sum} cookeis`;
    list.appendChild(totallElement);
    
  }




    
};

Seattle.createHtmlindex();


let Tokyo ={

  minOurlyCustomers :3,
  maxOurlyCustomers : 24,
  avCookeisPerCostumers: 1.2,
  
  randomCostumersPerOur: function(max,min){
    let randomNumber =  Math.floor(Math.random()*(max - min ) + min);
  
    return randomNumber;
          
  },
  
  
  amountCookiesHour: function(avCookeis){
  
    let cookiesOur=Math.floor(Tokyo.randomCostumersPerOur(Tokyo.maxOurlyCustomers,Tokyo.minOurlyCustomers) * avCookeis);
  
    return cookiesOur;
  },
  
  
  
  createHtmlindex: function (){
    let h1lElement = document.createElement('h1');
    h1lElement.textContent = 'Tokyo';
    list.appendChild(h1lElement);
  
    let arrTime =  ['6am:' ,'7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:', '7pm:'];
  
    let sum = 0;
  
    for(let x = 0; x<arrTime.length;x++){
      let ulElement = document.createElement('ul');
      list.appendChild(ulElement);
      let liElement = document.createElement('li');
  
      let Amount =Tokyo.amountCookiesHour(Tokyo.avCookeisPerCostumers);
  
      liElement.textContent =  arrTime[x] +  Amount + ' cookies';
        
      ulElement.appendChild(liElement);
  
        
  
      sum += Amount;
  
  
        
    }
  
    let totallElement = document.createElement('p');
    totallElement.textContent = `Total: ${sum} cookeis`;
    list.appendChild(totallElement);
      
  }
  
  
  
  
      
};
  
Tokyo.createHtmlindex();



let Dubai ={

    minOurlyCustomers :11,
    maxOurlyCustomers : 38,
    avCookeisPerCostumers: 3.7,
    
    randomCostumersPerOur: function(max,min){
      let randomNumber =  Math.floor(Math.random()*(max - min ) + min);
    
      return randomNumber;
            
    },
    
    
    amountCookiesHour: function(avCookeis){
    
      let cookiesOur=Math.floor(Dubai.randomCostumersPerOur(Dubai.maxOurlyCustomers,Dubai.minOurlyCustomers) * avCookeis);
    
      return cookiesOur;
    },
    
    
    
    createHtmlindex: function (){
      let h1lElement = document.createElement('h1');
      h1lElement.textContent = 'Dubai';
      list.appendChild(h1lElement);
    
      let arrTime =  ['6am:' ,'7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:', '7pm:'];
    
      let sum = 0;
    
      for(let x = 0; x<arrTime.length;x++){
        let ulElement = document.createElement('ul');
        list.appendChild(ulElement);
        let liElement = document.createElement('li');
    
        let Amount =Dubai.amountCookiesHour(Dubai.avCookeisPerCostumers);
    
        liElement.textContent =  arrTime[x] +  Amount + ' cookies';
          
        ulElement.appendChild(liElement);
    
          
    
        sum += Amount;
    
    
          
      }
    
      let totallElement = document.createElement('p');
      totallElement.textContent = `Total: ${sum} cookeis`;
      list.appendChild(totallElement);
        
    }
    
    
    
    
        
  };
    
  Dubai.createHtmlindex();
  



  let Paris ={

    minOurlyCustomers :20,
    maxOurlyCustomers : 38,
    avCookeisPerCostumers: 2.3,
    
    randomCostumersPerOur: function(max,min){
      let randomNumber =  Math.floor(Math.random()*(max - min ) + min);
    
      return randomNumber;
            
    },
    
    
    amountCookiesHour: function(avCookeis){
    
      let cookiesOur=Math.floor(Paris.randomCostumersPerOur(Paris.maxOurlyCustomers,Paris.minOurlyCustomers) * avCookeis);
    
      return cookiesOur;
    },
    
    
    
    createHtmlindex: function (){
      let h1lElement = document.createElement('h1');
      h1lElement.textContent = 'Paris';
      list.appendChild(h1lElement);
    
      let arrTime =  ['6am:' ,'7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:', '7pm:'];
    
      let sum = 0;
    
      for(let x = 0; x<arrTime.length;x++){
        let ulElement = document.createElement('ul');
        list.appendChild(ulElement);
        let liElement = document.createElement('li');
    
        let Amount =Paris.amountCookiesHour(Paris.avCookeisPerCostumers);
    
        liElement.textContent =  arrTime[x] +  Amount + ' cookies';
          
        ulElement.appendChild(liElement);
    
          
    
        sum += Amount;
    
    
          
      }
    
      let totallElement = document.createElement('p');
      totallElement.textContent = `Total: ${sum} cookeis`;
      list.appendChild(totallElement);
        
    }
    
    
    
    
        
  };
    
  Paris.createHtmlindex();
  
  
  


  
  let Lima ={

    minOurlyCustomers :2,
    maxOurlyCustomers : 16,
    avCookeisPerCostumers: 4.6,
    
    randomCostumersPerOur: function(max,min){
      let randomNumber =  Math.floor(Math.random()*(max - min ) + min);
    
      return randomNumber;
            
    },
    
    
    amountCookiesHour: function(avCookeis){
    
      let cookiesOur=Math.floor( Lima.randomCostumersPerOur( Lima.maxOurlyCustomers, Lima.minOurlyCustomers) * avCookeis);
    
      return cookiesOur;
    },
    
    
    
    createHtmlindex: function (){
      let h1lElement = document.createElement('h1');
      h1lElement.textContent = ' Lima';
      list.appendChild(h1lElement);
    
      let arrTime =  ['6am:' ,'7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:', '7pm:'];
    
      let sum = 0;
    
      for(let x = 0; x<arrTime.length;x++){
        let ulElement = document.createElement('ul');
        list.appendChild(ulElement);
        let liElement = document.createElement('li');
    
        let Amount =Paris.amountCookiesHour( Lima.avCookeisPerCostumers);
    
        liElement.textContent =  arrTime[x] +  Amount + ' cookies';
          
        ulElement.appendChild(liElement);
    
          
    
        sum += Amount;
    
    
          
      }
    
      let totallElement = document.createElement('p');
      totallElement.textContent = `Total: ${sum} cookeis`;
      list.appendChild(totallElement);
        
    }
    
    
    
    
        
  };
    
  Lima.createHtmlindex();
  
  
  