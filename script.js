function myfuncs(tag){  // tag has an input field
    document.getElementById('demo').innerHTML = tag.value; 
}

function myfuncs2(tag2){  
     document.getElementById("demo2").innerHTML = "you pressed a key inside the input field";
}

function myfuncs3(tag3){  
    document.getElementById("demo3").innerHTML = "Hi";
}

function myfuncs4(tag4){  
    let x = document.getElementById("fname")
    x.value = x.value.toUpperCase();
}

function myfuncs5(x){  
    x.style.background = "pink";
}

function myfuncs6(){  
    let x = document.getElementById("fname1")
    x.value = x.value.toUpperCase();
}


//Add eventlistener//
document.getElementById("btn").addEventListener("click",myfunction)

document.getElementById("btn2").addEventListener("click",()=>{
    //remove the event listener of the button
    document.getElementById("btn").removeEventListener("click",myfunction)
        console.log("Button will no longer work");
})

function myfunction(){
    console.log("Button clicked");
}

//----- On session task -----//
// design a stopwatch having the following features 
// "start", 
// "Stop", 
// "reset"

const watch = document.querySelector('#watch');
let milliseconds = 0;
let timer;

function startWatch() {
  watch.classList.remove('paused');
  clearInterval(timer);
  timer = setInterval(()=>{ 
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);
    watch.innerHTML = 
      ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
  },10);
};

function pauseWatch() {
  watch.classList.add('paused');
  clearInterval(timer);
};

function resetWatch() {
  watch.classList.remove('paused');
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML= '00:00:00:00';
};

document.addEventListener('click', (e) =>{
  const el = e.target;
  if (el.id === 'start') startWatch();
  if (el.id === 'pause') pauseWatch();
  if (el.id === 'reset') resetWatch();
});

