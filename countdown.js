class program{

    constructor(name, day, hour, min_){
        this.name = name;
        this.day = day;
        this.hour = hour;
        this.min_ = min_;
        this.factor = 3.3*Math.pow(10, 10)*60;
    }
       
    
    calc_time(time, id){
        var days_left = this.day*24*60- time.getDay()*24*60;
        var hours_left = this.hour*60 - time.getHours()*60;
        var minuts_left = this.min_ - time.getMinutes();
        var seconds_left = 60 - time.getSeconds();
        var minutes_now = time.getDay()*24*60*60 + time.getHours()*60*60 + time.getMinutes()*60 + time.getSeconds();
        var minutes_program = this.day*24*60*60 + this.hour*60*60 + this.min_*60;
        var seconds_left = minutes_program - minutes_now;
        //console.log(minutes_left, this.name);
        if (seconds_left <0) {
            seconds_left = 7*24*60*60 + seconds_left;
        }
        // Falta comprobar cuando se ha emitido ya el programa ese día
        var seconds = seconds_left % 60; var minutes = Math.floor(seconds_left/60);
        var mins = minutes % 60; var hours_ = Math.floor(minutes/60);
        var hours = hours_ % 24; var days = Math.floor(hours_/24);
        //document.getElementById(id).innerHTML = days + ' dias ' + hours + ' horas ' + mins + ' minutos ' + seconds + ' segundos restantes';
        document.getElementById(id).innerHTML = seconds_left*this.factor/Math.pow(10, 9) + ' Gigapangolines-luz restantes para la próxima emisión (' + days + ' días, '+ hours +' hours, '+ mins + ' minutes, ' + seconds +' segundos)' ;
    }
}


let time_c = new program('C', 0,0,0)
var time = 0;

function calc(){
    var time = window.time;
    console.log(time);
    if(!isNaN(time) && time < 0.01 && time > 0){
        alert('Se acabaron los pangolines :(');
    }
    if (!isNaN(time) && time >= 0){
        var seconds_left = time*60;
        var seconds = seconds_left % 60; var minutes = Math.floor(seconds_left/60);
        console.log(seconds, minutes);
        console.log(seconds_left*program.factor/Math.pow(10, 9));
        var left = seconds_left*3.3*Math.pow(10, 10)*60/Math.pow(10, 9);
        document.getElementById('C_Time').innerHTML = left.toFixed(0) + ' Gigapangolines-luz restantes para que acabe';//: ( ' + minutes + ' minutes, ' + seconds.toFixed(0) +' segundos)' ;
        window.time = window.time - 1/60;
    }
    let SE = new program('SE', 0, 20, 30);
    let ciencia = new program('100cia',1, 19, 0);
    let crespos = new program('Crespación', 3, 20, 30);
    let boson = new program('Bosón', 4, 21, 0);
    //let geek = new program('Geek', 0, 19, 0);
    
    var now = new Date();
    
    var SE_time = SE.calc_time(now, 'SE_Time');
    var ciencia_time = ciencia.calc_time(now,'ciencia_Time');
    var crespos_time = crespos.calc_time(now, 'crespos_Time');
    var boson_time = boson.calc_time(now, 'Boson_Time');
    
}
