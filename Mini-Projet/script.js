const testwrapper = document.querySelector('.Input');
const testarea = document.querySelector('#textArea');
const origintext = document.querySelector('.Display').innerHTML
const resetbutton = document.querySelector('.reset');
const thetimer = document.querySelector('.time');

let tiime=[0,0,0,0];
let interval;
let timerunning = false;

function zero(Time){
  if(Time<=9){
    Time = "0"+ Time;
  }
  return Time;
}

function timer(){
  let currentTime=zero(tiime[0])+":"+zero(tiime[1])+":"+zero(tiime[2]);
  thetimer.innerHTML=currentTime;
  tiime[3]++;

  tiime[0] = Math.floor((tiime[3]/100)/60);
  tiime[1] = Math.floor((tiime[3]/100) - (tiime[0]*60));
  tiime[2] = Math.floor(tiime[3] - (tiime[1] * 100)-(tiime[0] * 6000));
}

function restar(){
  clearInterval(interval);
  interval =null;
  tiime=[0,0,0,0];
  thetimer = false;
  testarea.value="",
  thetimer.innerHTML="00:00:00";
  testwrapper.style.borderColor='green';
}

function spel(){
  let textenterde=textarea.value;
  let origintextmatch = origintext.substring(0,textentered.length);

  if(textentered == origintext){
    testwrapper.style.borderColor ='orange';
    clearInterval(interval);
  }else{
    if(textentered == originetextmatch){
      testwrapper.style.borderColor ='green';
    }else{
      testwrapper.style.borderColor='red';
    }
  }

}



function start() { 
  let textentered = testarea.value.length;
  if(textenteredlength === 0){
    timerunning = true;
    interval=setInterval(timer,10);

  }
}

testarea.addEventListener('keypress',start,false);
testarea.addEventListener('keyup',spel,false);
resetbutton.addEventListener('click', restar ,false);