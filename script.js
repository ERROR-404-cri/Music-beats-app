let circle = document.getElementById('circle');
let h1 = document.getElementById('heading');
let loader= document.getElementById('loader');
let timer, prvTime = 0,
    currTime, num1, num2, audioObj = null,
    sound = 0,colorVal=null;
let flrstClick = true;
let tracks=[];

window.onload= ()=>{
    for(let i=0;i<26;i++){
        tracks[i]= new Audio(`./Beats/sounds/${i}.mp3`);
    }
    loader.remove();
};

document.onkeydown = (ev) => {

    if (!/^[a-z]{1}$/i.test(ev.key)) { //only single alphbet allowed
        return;
    }
    if (flrstClick) {
        circle.style.display = "block";
        flrstClick = !flrstClick;
    };
    soundSelectAndPlay(ev);
    makeCircle();
};

document.onclick = () => {
    if (flrstClick) {
        circle.style.display = "block";
        flrstClick = !flrstClick;
    };
    soundSelectAndPlayMobile();
    makeCircle();
};

function makeCircle() {
    currTime = new Date().getTime();
    if (currTime - prvTime > 0 && currTime - prvTime < 999) {
        clearTimeout(timer);
    };
    circle.remove();
    prvTime = new Date().getTime();
    num1 = Math.random();
    num2 = Math.random();
    circle.style.top = `${(num1<2) ? (num1+0.4)*50: num1*50}vh`;
    circle.style.left = `${(num2<2) ? (num2)*80: num2*80}vw`;
    circle.style.background= `#${hexColorGenerator()}${hexColorGenerator()}${hexColorGenerator()}${hexColorGenerator()}${hexColorGenerator()}${hexColorGenerator()}`;

    h1.append(circle);
    timer = setTimeout(() => {
        circle.remove();
    }, 1000);
}

let newOne=null;
function soundSelectAndPlay(ev) {
    if (/^[a-z]{1}$/.test(ev.key)) {
        newOne = ev.key.charCodeAt(0) - 'a'.charCodeAt(0);
    } else {
        newOne = ev.key.charCodeAt(0) - 'A'.charCodeAt(0);
    }
    // audioObj = new Audio(`./Beats/sounds/${sound}.mp3`);
    if(newOne===sound){
        tracks[sound].currentTime =0;
    }
    sound= newOne;
    tracks[sound].play();
}

function soundSelectAndPlayMobile() {

    newOne = Math.floor(Math.random()*26);
    // audioObj = new Audio(`./Beats/sounds/${sound}.mp3`);
    if(newOne===sound){
        tracks[sound].currentTime =0;
    }
    sound= newOne;
    tracks[sound].play();
}

function hexColorGenerator(){
    colorVal= Math.floor(Math.random()*16);
    if(colorVal>9){
        if(colorVal===10){
            return `a`;
        }
        if(colorVal===11){
            return `b`;
        }
        if(colorVal===12){
            return `c`;
        }
        if(colorVal===13){
            return `d`;
        }
        if(colorVal===14){
            return `e`;
        }
        if(colorVal===15){
            return `f`;
        }
    }
    else {
        return `${colorVal}`;
    }
}

//play prv songs too
//GET http://127.0.0.1:5500/favicon.ico 404 (Not Found)