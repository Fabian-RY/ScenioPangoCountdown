class program{

    constructor(name, day, hour, min_){
        this.name = name;
        this.day = day;
        this.hour = hour;
        this.min_ = min_;
        this.factor = 1/3.3*Math.pow(10, 10);
    }
    
    
    
    calc_time(time, id){
        var days_left = this.day*24*60- time.getDay()*24*60
        var hours_left = this.hour*60 - time.getHours()*60
        var minuts_left = this.min_ - time.getMinutes()
        var minutes_now = time.getDay()*24*60 + time.getHours()*60 + time.getMinutes();
        var minutes_program = this.day*24*60 + this.hour*60 + this.min_;
        var minutes_left = minutes_program - minutes_now;
        console.log(24*7*60, minutes_left, this.name);
        if (minutes_left <0) {
            minutes_left = 7*24*60 + minutes_left;
        }
        console.log(minutes_left);
        // Falta comprobar cuando se ha emitido ya el programa ese día
        var time = minutes_left*this.factor;
        document.getElementById(id).innerHTML = time.toExponential() + ' pangolines luz';
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

