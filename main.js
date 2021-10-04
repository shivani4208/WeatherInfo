window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription=document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree=document.querySelector(".temperature-degree");
    let locationTimezone=document.querySelector(".location-timezone");
    let temperatureSpan=document.querySelector('.temperature span');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            //For temperature in Fahrenheit use units=imperial
            // For temperature in Celsius use units=metric
            // Temperature in Kelvin is used by default, no need to use units parameter in API call
            const api=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d9863be497c785ff8b7dfb21f9b61540&units=imperial`;
            fetch(api)
                .then(response=>{
                    return response.json();
                })
                .then(data=>{
                    console.log(data);
                    const {main:{temp},weather:{0:{description}}}= data;
                    temperatureDegree.textContent=temp;
                    temperatureDescription.textContent=description;
                    locationTimezone.textContent=data.name;
                    let celsius=(temp-32)*(5/9);
                    temperatureSpan.addEventListener('click',()=>{
                        if(temperatureSpan.textContent==='F'){
                            temperatureSpan.textContent="C";
                            temperatureDegree.textContent=celsius;
                        }else{
                            temperatureSpan.textContent="F";
                            temperatureDegree.textContent=temp;
                        }
                    });
                });
        });
    }

});