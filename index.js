
const light1 = document.getElementById("light_1");
const light2 = document.getElementById("light_2");
const light3 = document.getElementById("light_3");
const light4 = document.getElementById("light_4");
const light5 = document.getElementById("light_5");

const buttonsDiv = document.getElementById("buttons");
const timeText = document.getElementById('time');

const readyButton = document.getElementById("Ready");
const clickButton = document.getElementById("reaction_clicker");

let isActive = false;
let oldTime = new Date;
let isReady = false;

readyButton.onclick = function() {
    if (isReady == true) {
        timeText.textContent = 'Already Ready!';
        timeText.style.color = 'red';
        window.location.reload()
    }

    isReady = true
    timeText.textContent = '0.000s';
    timeText.style.color = 'black';
    buttonsDiv.style.backgroundColor = 'rgb(20, 20, 20)';
    setTimeout(() => {
       light1.style.backgroundColor = 'rgb(255, 0, 0)' ;
       setTimeout(() => {
            light2.style.backgroundColor = 'rgb(255, 0, 0)';
            setTimeout(() => {
                light3.style.backgroundColor = 'rgb(255, 0, 0)';
                setTimeout(() => {
                    light4.style.backgroundColor = 'rgb(255, 0, 0)';
                    setTimeout(() => {
                        light5.style.backgroundColor = 'rgb(255, 0, 0)';
                        light1.style.transition = 'background-color 0.10s'
                        light2.style.transition = 'background-color 0.10s'
                        light3.style.transition = 'background-color 0.10s'
                        light4.style.transition = 'background-color 0.10s'
                        light5.style.transition = 'background-color 0.10s'
                        setTimeout(() => {
                            isActive = true;
                            oldTime = new Date;
                            light1.style.backgroundColor = 'rgb(0, 255, 0)';
                            light2.style.backgroundColor = 'rgb(0, 255, 0)';
                            light3.style.backgroundColor = 'rgb(0, 255, 0)';
                            light4.style.backgroundColor = 'rgb(0, 255, 0)';
                            light5.style.backgroundColor = 'rgb(0, 255, 0)';
                        }, (Math.random()*1000) +750);
                    }, (Math.random()*1000) + 350);
                }, (Math.random()*1000) + 350);
            }, (Math.random()*1000) + 350);
        }, (Math.random()*1000) + 350);
    }, (Math.random()*1000) + 350);
    
}

clickButton.onmousedown = function() {
    timeText.textContent = 'FALSE START';
    timeText.style.color = 'red';
    if (isActive !== true) {
        setTimeout(() => {
            window.location.reload()
        }, 500);
    } else {
        var newTime = new Date
        isActive = false;
        isReady = false;
        timeText.textContent = ((newTime - oldTime) / 1000) + ' seconds'
    }


    
    buttonsDiv.style.backgroundColor = 'rgb(255, 255, 255)';
    light1.style.backgroundColor = 'rgb(45, 45, 45)';
    light2.style.backgroundColor = 'rgb(45, 45, 45)';
    light3.style.backgroundColor = 'rgb(45, 45, 45)';
    light4.style.backgroundColor = 'rgb(45, 45, 45)';
    light5.style.backgroundColor = 'rgb(45, 45, 45)';
}
