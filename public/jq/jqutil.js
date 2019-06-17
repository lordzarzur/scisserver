
function scores(){
    var fscore=0;
    var s = "En "+score.acciones+" acciones:<br><br>";
    fscore += score.dealt*3;
    s= s+("SALUD ENEMIGA:   "+ score.dealt+ "  x3");
    fscore += score.healed*4;
    s=s+("<br>"+ "CURADO:  "+ score.healed+ "  x4<br>");
    fscore -= score.received;
    s=s+("SALUD FINAL:    -  "+ score.received+"<br>");
    fscore += protag.durab *2;
    s=s+("ARMA CONSERVADA:     "+ protag.durab +" x2<br>");
    fscore += score.romper *2;
    s=s+("ROMPER GUARDIA:     "+ score.romper +" x2<br>");
    fscore += score.duelos *5;
    s=s+("DUELOS GANADOS:    "+ score.duelos+"  x5<br><br>");
    fscore += score.enemigos*10;
    s=s+("VICTORIAS:   "+ score.enemigos+"  x5<br><br>");
    score.total += fscore;
    s = s+("TOTAL    >  " + score.total);
    $("#frasem").hide();
    $("#frase").hide();
    $("#score").html(s);
    crono = setTimeout(volver,6000);
};
function volver(){
    $("#todo").hide();
    $("#out_game").show();
    $("#score").html("");
    screenIn("src/portada2.png");
};
function fraseA(fras1) {
    $("#frase").show();
    $("#frase").text(fras1);
}; 
function fraseB(fras1) {
    $("#frasem").show();
    $("#frasem").text(fras1);
};
function habla(fras1) {
    $("#frase").show();
    $("#frase").text(fras1);
    $("#frase").css('background-image', 'url("carac/bocadilloa.png")');
};
function piensa(fras1) {
    $("#frase").show();
    $("#frase").text(fras1);
    $("#frase").css('background-image', 'url("carac/nubea.png")');
};
function callaA() {
    $("#frase").hide();
};
function callaB() {
    $("#frasem").hide();
};

function distancia(a) {
    $("#malo").css('transition', 'transform 1s');
    $("#malo").css('transform', "scale("+a+")");
};
function pva(a){       
    protag.vida = protag.vida + a;
    score.received = score.received - a ;
    if (protag.vida > protag.pv){
        protag.vida = protag.pv;
    }
    if(a > 0){
        score.healed = score.healed + a;
    }
    var i;
    i = (protag.vida/protag.pv) * 75; 
    $("#pv").show();
    $("#pv").css('transition', 'width 0.4s');
    $("#pv").width(i+'%');
    if (a>0){
        ef6.play();
    }else{
        ef3.play();
    };
};
function duraba(a){     
    protag.durab = protag.durab + a;
    var i;
    i = protag.durab*12;
    $("#durab").show();
    $("#durab").css('transition', 'width 0.3s');
    $("#durab").width(i+'%');
    ef1.play();
};
    //pvb probablemente inutil, no se enseña ni se calcula el enemigo en el client
function pvb(a){
    pelele.vida = pelele.vida + a;
    score.dealt = score.dealt - a;
    var i;
    $("#pvm").show();
    i = (pelele.vida/pelele.pv) * 60; 
    $("#pvm").css('transition', 'width 0.4s');
    $("#pvm").width(i+'%');
    if (a>0){
        ef6.play();
    }else{
        ef2.play();};
};
function durabb(a){     
    pelele.durab += a;
    score.romper -= a;
    var i;
    i = pelele.durab * 10; 
    $("#durabm").show();
    $("#durabm").css('transition', 'width 0.4s');
    $("#durabm").width(i+'%');
    ef1.play();
};
function camara(a,b,c){         
    // 0-100, 0-35
    //50,18 centrado
    $("body").css('transition','background-position '+c+'s');
    $("body").css('background-position',a+'% '+b+'%');
};
function setArma(){
    $("#armap").css('background-image', 'url("'+protag.arma+'")');
};
function setProtag(){
    $("#pvm").css('transition', 'width 0.4s');
    $("#armap").css('background-image', 'url("'+protag.arma+'")');
    $("#cuerpo").css('background-image', 'url("'+protag.cuerpo+'")');
};
function replay(song){
    if (song.currentTime >= song.duration) {
        song.currentTime=0;
    };
    song.play();
};
function sonEleccion(song){
    rblanco.currentTime = 0;
    rblanco.volume=1;
    song.volume = 0.35;
    rblanco.play();    
};
function sonEleccion2(song){
    rblanco.pause();
    song.volume = 0.9;
};

function setVols(){     //controlar volumen de audios, uno por uno, al iniciar un html

};

function screenIn(nScreen){
    $("body").css('transition', 'background-image 0.5s');
    $("body").css('background-image', 'url("'+nScreen+'")');
};

function screenOut(){
    $("body").css('transition', 'background-image 2 s');
    $("body").css('background-image', 'url("'+nScreen+'")');
};