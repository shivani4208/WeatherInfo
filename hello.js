let input = document.getElementById("inputText");
let button = document.getElementById("btn");
let place = document.querySelector('.place');
let temperatureDegree=document.querySelector(".temperature-degree");
let temperature=document.querySelector('.degree-section');
let temperatureSpan=document.querySelector('.degree-section span');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    const api=`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d9863be497c785ff8b7dfb21f9b61540&units=metric`;
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const { main: { temp } } = data;
        place.textContent = input.value;
        temperatureDegree.textContent = temp;
        let Fahrenheit = (temp*9)/5+32;  
        temperatureSpan.addEventListener('click', () => {
            if (temperatureSpan.textContent === "C") {
                temperatureSpan.textContent = "F";
                temperature.style.margin='20px';
                temperatureDegree.textContent = Math.floor(Fahrenheit);
            } else {
                temperatureSpan.textContent = "C";
                temperatureDegree.textContent = temp;
                temperature.style.margin='0px';
            }
        });
    });
});