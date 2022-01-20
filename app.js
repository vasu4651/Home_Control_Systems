let lightBtnOn = document.querySelector('#lightBtnOn');
let lightBtnOff = document.querySelector('#lightBtnOff');
let fanBtnOn = document.querySelector('#fanBtnOn');
let fanBtnOff = document.querySelector('#fanBtnOff');

function switchlightOn(data){
    console.log('Light switched on');
    console.log(data);
}

function switchlightOff(data){
    console.log('Light switched off');
    console.log(data);
}

function switchfanOn(data){
    console.log('Fan switched on');
    console.log(data);
}

function switchfanOff(data){
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