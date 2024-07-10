
let startbtn = document.getElementById("start")
let stopbtn = document.getElementById("stop")
let resetbtn = document.getElementById("reset")
let hour=0;
let minute=0;
let second=0;
let count=0;

startbtn.addEventListener('click',function(){
  timer=true;
  stopwatch()
})

stopbtn.addEventListener('click',function(){
  timer=false;
})

resetbtn.addEventListener('click',function(){
  timer=false;
hour=0;
 minute=0;
 second=0;
count=0;
document.getElementById("hr").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("sec").innerHTML="00";
document.getElementById("count").innerHTML="00";
})

function stopwatch(){
  if(timer)
    count++;
  if(count==100){
    second++;
    count=0;
  }
  if(second==60){
    minute++;
    second=0;
  }
  if(minute==60){
    hour++;
    minute=0;
    second=0;
  }
document.getElementById("hr").innerHTML=padzero(hour);
document.getElementById("min").innerHTML=padzero(minute);
document.getElementById("sec").innerHTML=padzero(second);
document.getElementById("count").innerHTML=padzero(count);
setTimeout(stopwatch,10)
}
function padzero(num){
  return num<10?"0"+num:num;
}