var btn = document.querySelector("#btn-search");
var containerHistoricCities = document.querySelector("#historic-Cities");
var containerCurrent = document.querySelector("#targetCity");
var containerForecast = document.querySelector("#infoCity");



var dataStore = JSON.parse(localStorage.getItem('cities')) || [];

var urlIcon;
    if (location.protocol === 'http:') {
        urlIcon = 'http://openweathermap.org/img/wn/';
     } else {
        urlIcon = 'https://openweathermap.org/img/wn/';
     }


   
    
 var weatherCondition = [];



 function start() {

    loadCity();

} 


var loadCity = function(){


    cleaningElement(containerHistoricCities);

        if(dataStore){
           
            var ulElement = document.createElement("ul");
            ulElement.classList.add("list-unstyled");
            ulElement.classList.add("w-100");
            
          
            for(var i = 0; i < dataStore.length; i++){
                
                var liElement = document.createElement("li");
               
                liElement.innerHTML = "<button type='button' class='list-group-item list-group-item-action' attr='"+dataStore[i]+"'>" + dataStore[i] + "</button>";
               
                ulElement.appendChild(liElement);
                }

                containerHistoricCities.appendChild(ulElement); 
            }
};