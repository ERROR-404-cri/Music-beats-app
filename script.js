let circle = document.getElementById('circle');
let h1 = document.getElementById('heading');
let timer, prvTime = 0,
    currTime, num1, num2, audioObj = null,
    sound = null,colorVal=null;
let flrstClick = true;

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

function soundSelectAndPlay(ev) {
    h1.innerText=`key:${ev.key}\\ keycode: ${ev.keyCode}\\ which ${ev.which}\\code ${ev.code}`
    if (/^[a-z]{1}$/.test(ev.key)) {
        sound = ev.key.charCodeAt(0) - 'a'.charCodeAt(0);

    } else {
        sound = ev.key.charCodeAt(0) - 'A'.charCodeAt(0);
    }
    audioObj = new Audio(`./Beats/sounds/${sound}.mp3`);
    audioObj.play();
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

//play all prv complete songs