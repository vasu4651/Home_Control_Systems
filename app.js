let refreshIcon = document.querySelector('#refreshIcon');
let lightBtnOn = document.querySelector('#lightBtnOn');
let lightBtnOff = document.querySelector('#lightBtnOff');
let fanBtnOn = document.querySelector('#fanBtnOn');
let fanBtnOff = document.querySelector('#fanBtnOff');
let bulbImage = document.querySelector('#bulbImage');
let fanImage = document.querySelector('#fanImage');


// Temperature
function setTemperature(){
    fetch('https://api.thingspeak.com/channels/1636583/fields/3.json?results=1')
    .then(res => {
        return res.json();
    })
    .then(data => {
        if(data.feeds[0].field3 != null)
        {
            document.querySelector('#tempSpan').innerHTML = data.feeds[0].field3 + ` °C`;
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setTemperature();
});

refreshIcon.addEventListener('click', () => {
    console.log('f');
    setTemperature();
})


// Light and Fan
function switchlightOn(data){
    bulbImage.innerHTML = `<img class="bulb" src="/img/onbulb.png" alt="">`;
    console.log('Light switched on');
    console.log(data);
}

function switchlightOff(data){
    bulbImage.innerHTML = `<img class="bulb" src="/img/offbulb.png" alt="">`;
    console.log('Light switched off');
    console.log(data);
}

function switchfanOn(data){
    fanImage.innerHTML = `<img class="fan" id="fanon" src="/img/fan.png" alt="">`
    console.log('Fan switched on');
    console.log(data);
}

function switchfanOff(data){
    fanImage.innerHTML = `<img class="fan" id="fanoff" src="/img/fan.png" alt="">`;
    console.log('Fan switched off');
    console.log(data);
}

lightBtnOn.addEventListener('click', ()=>{
    fetch('https://api.thingspeak.com/update?api_key=WWO63DEOP62JURH0&field1=1')
        .then(res => {
            return res.text();
        })
        .then(data => {
            if(data!=0)
                switchlightOn(data);
        })
});

lightBtnOff.addEventListener('click', ()=>{
    fetch('https://api.thingspeak.com/update?api_key=WWO63DEOP62JURH0&field1=0')
        .then(res => {
            return res.text();
        })
        .then(data => {
            if(data!=0)
                switchlightOff(data);
        })
});

fanBtnOn.addEventListener('click', ()=>{
    fetch('https://api.thingspeak.com/update?api_key=WWO63DEOP62JURH0&field2=1')
        .then(res => {
            return res.text();
        })
        .then(data => {
            if(data!=0)
                switchfanOn(data);
        })
});

fanBtnOff.addEventListener('click', ()=>{
    fetch('https://api.thingspeak.com/update?api_key=WWO63DEOP62JURH0&field2=0')
        .then(res => {
            return res.text();
        })
        .then(data => {
            if(data!=0)
                switchfanOff(data);
        })
});
