var h=0, s=00, min=00,ms=00;
var time;
var tim=document.querySelector('.tim');
function start() {
    if(!time){
       time=setInterval(run,10);} 
    }
    
function run() {
    tim.textContent=h+":"+min+":"+s+":"+ms;
    ms++;
    if(ms ==100){
        ms=0;
        s++;}
    if(s==60){
        s=0;
        min++;}
    if(min==60){
        min=0;
        h=h+1;}
}
function stop() {
    clearInterval(time);
    time=false;    
}
function reset() {
    clearInterval(time);
    time=false;
    ms=00;
    s=00;
    min=00;
    h=0;
    tim.textContent=h+":"+min+":"+s+":"+ms;
}