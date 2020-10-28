class program{

    constructor(name, day, hour, min_){
        this.name = name;
        this.day = day;
        this.hour = hour;
        this.min_ = min_;
        this.factor = 1///3.3*Math.pow(10, 10);
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
        console.log(seconds_left);
        // Falta comprobar cuando se ha emitido ya el programa ese día
        var seconds = seconds_left % 60; var minutes = Math.floor(seconds_left/60);
        var mins = minutes % 60; var hours_ = Math.floor(minutes/60);
        var hours = hours_ % 24; var days = Math.floor(hours_/24);
        console.log(days, hours, mins, seconds)
        document.getElementById(id).innerHTML = days + ' dias ' + hours + ' horas ' + mins + ' minutos ' + seconds + ' segundos restantes';
    }
}

function calc(){
    
    let SE = new program('SE', 0, 20, 30);
    let ciencia = new program('100cia',1, 19, 0);
    let crespos = new program('Crespación', 3, 20, 30);
    let boson = new program('Bosón', 5, 20, 30);
    
    var now = new Date();
    
    var SE_time = SE.calc_time(now, 'SE_Time');
    var ciencia_time = ciencia.calc_time(now,'ciencia_Time');
    var crespos_time = crespos.calc_time(now, 'crespos_Time');
    var boson_time = boson.calc_time(now, 'Boson_Time');
    
}

