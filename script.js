let progress = localStorage.getItem("progress") 
? parseInt(localStorage.getItem("progress")) : 20;

function showMessage(){
let mood=document.getElementById("mood").value;
let msg="";

if(mood=="sad")
msg="💙 Sadness is temporary. You are growing stronger every day.";
if(mood=="anxious")
msg="🌿 Breathe deeply. You are capable of handling this moment.";
if(mood=="happy")
msg="✨ Keep spreading positivity and gratitude!";
if(mood=="angry")
msg="🔥 Calm mind brings powerful decisions.";
if(mood=="tired")
msg="🌙 Rest is productive. Recharge and rise stronger.";

document.getElementById("motivation").innerText=msg;
}

function goPage3(){
window.location.href="page3.html";
}

function selectOption(btn){
btn.style.background="green";
btn.style.color="white";
}

function goPage4(){
localStorage.setItem("progress",progress);
window.location.href="page4.html";
}

function loadGraph(){
document.getElementById("bar").style.width=progress+"%";

let result="";
if(progress<=30) result="🔴 Emotional Burnout Level High.";
else if(progress<=70) result="🟡 Recovery In Progress.";
else result="🟢 Emotionally Strong & Energized!";

let res=document.getElementById("emotionResult");
if(res) res.innerText=result;
}

function completeTask(){

let tasks=document.querySelectorAll(".task");
let allDone=true;

tasks.forEach(t=>{
if(!t.checked) allDone=false;
});

if(!allDone){
alert("Please complete all tasks 😊");
return;
}

progress+=20;
if(progress>100) progress=100;

localStorage.setItem("progress",progress);
document.getElementById("bar").style.width=progress+"%";

tasks.forEach(t=>t.checked=false);

if(progress==100){
document.getElementById("celebrate").classList.remove("hidden");
setTimeout(function(){
goHome();
},4000);
}
}

function goHome(){
localStorage.clear();
window.location.href="index.html";
}
