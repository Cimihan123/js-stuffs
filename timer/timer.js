
var tikaDay = new Date("2020-11-16").getTime()

var timerVar = setInterval(tikaCounter , 1000);



function tikaCounter(){
    var currentTime = new Date().getTime();

    var countDown = tikaDay - currentTime;


    var seconds = Math.floor( countDown/1000 );
    var days = Math.floor( seconds / 86400 );
    var hours = Math.floor( (seconds)%86400 / 3600 );
    var minutes = Math.floor( (seconds)%3600 / 60 );
    var seconds =  Math.floor( (seconds)%60 );

    document.getElementById("timer").innerHTML = days + "  " + hours + "  " + minutes + "  " + seconds;

    
    if ( countDown == 0 ) {
        stopCounter();
    }


}

function stopCounter(){

    clearInterval(timerVar);

}

