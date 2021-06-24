
const StartTimer = document.getElementById("display");

let hour, min, sec, stopTimer;

hour= 0; 
min=0; 
sec=0;
csec = 0; 
stopTimer= true;

function startCount(){
    if (stopTimer == true){
        stopTimer = false;
        timerCycle();
    }
}

function stopCount(){
    if (stopTimer == false){
        stopTimer = true;
    }
}

function timerCycle(){
    if (stopTimer == false){
        csec = parseInt(csec);
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);

        csec += 1;

        if (csec == 100){
            sec +=1;
            csec=0;
        }

        if (sec == 60){
            min +=1;
            sec = 0; 
        }

        if (min == 60){
            hour += 1;
            min = 0;
            sec = 0; 
        }

        if (csec < 10 || csec == 0) {
            csec = "0" + csec;
        }
        if (sec < 10 || sec == 0){
            sec = "0" + sec;
        }
        if(min < 10 || min ==0){
            min = "0" + min; 
        }
        if(hour <10 || hour ==0){
            hour = "0" + hour;
        }

        StartTimer.innerHTML = hour + ":" + min + ":" + sec + ":" + csec;
        setTimeout("timerCycle()", 10);
    }       
}

function resetTime(){
    StartTimer.innerHTML = "00:00:00:00";
    stopTimer = true; 
    hour = 0; 
    min = 0; 
    sec = 0;
    csec = 0;
}