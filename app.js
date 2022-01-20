let lightBtnOn = document.querySelector('#lightBtnOn');
let lightBtnOff = document.querySelector('#lightBtnOff');
let fanBtnOn = document.querySelector('#fanBtnOn');
let fanBtnOff = document.querySelector('#fanBtnOff');
let val1 = 0;

function switchlightOn(data){
    console.log('Light switched on');
    console.log(data);
}

function switchlightOff(data){
    console.log('Light switched off');
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