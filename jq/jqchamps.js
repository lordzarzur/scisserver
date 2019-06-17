function malorojo() {
    pelele.accion = 0; 
    pelele.vida=10,
    pelele.pv=10,
    pelele.durab=6,
    pelele.fue=6,
    pelele.IA=99,
    pelele.cuerpo='carac/niga-win.png',
    pelele.arma='item/enemigo/scisword1.png',
    pelele.roto="item/enemigo/brokenscisword1.png",
    pelele.timing=7,
    pelele.svoz='',
    pelele.sarma='';
    $("#malo").css('background-image', 'url("'+pelele.cuerpo+'")');
    $("#armam").css('background-image', 'url("'+pelele.arma+'")');
    $("#accionm").hide();
    $("#frasem").css('font-family','rojo');
    $("#frasem").css('color','crinsom');
    $("#vidam").css('font-family','rojo');
    $("#vidam").css('color','crinsom');
};
function maloazul() {
    pelele.accion = 0; 
    pelele.vida=16,
    pelele.pv=16,
    pelele.durab=9,
    pelele.fue=3,
    pelele.IA=99,
    pelele.cuerpo='carac/prota-azul-front.png',
    pelele.arma='item/enemigo/shield.png',
    pelele.arma2='',
    pelele.roto="item/enemigo/brokenshield.png",
    pelele.timing=7,
    pelele.svoz='',
    pelele.sarma='';
    $("#malo").css('background-image', 'url("'+pelele.cuerpo+'")');
    $("#armam").css('background-image', 'url("'+pelele.arma+'")');
    $("#accionm").hide();
    $("#frasem").css('font-family','azul');
    $("#frasem").css('color','darkblue');
    $("#vidam").css('font-family','azul');
};
function maloamarillo() {
    pelele.accion = 0; 
    pelele.vida=14,
    pelele.pv=14,
    pelele.durab=6,
    pelele.fue=4,
    pelele.IA=99,
    pelele.cuerpo='carac/prota-amarillo-front.png',
    pelele.arma='item/enemigo/maza.png',
    pelele.arma2='',
    pelele.roto="item/enemigo/brokenmaza.png",
    pelele.timing=7,
    pelele.svoz='',
    pelele.sarma='';
    $("#malo").css('background-image', 'url("'+pelele.cuerpo+'")');
    $("#armam").css('background-image', 'url("'+pelele.arma+'")');
    $("#accionm").hide();
    $("#frasem").css('font-family','amarillo');
    $("#frasem").css('color','brown');
    $("#vidam").css('font-family','amarillo');
    $("#vidam").css('color','brown');
};


function camprojo(){
    protag.fue=6,
    protag.pv = 10,
    protag.vida = 10,
    protag.durab = 6,
    protag.cuerpo = 'carac/niga.png',
    protag.frontal = 'carac/niga-win.png',
    protag.arma= 'item/scisword1a.png',    
    protag.roto= 'item/brokenscisworda.png';
    setProtag();
    $("#frase").css('font-family','rojo');
    $("#frase").css('color','crinsom');
    $("#frase").text("");
};
function campazul(){
    protag.fue=3,
    protag.pv = 16,
    protag.vida = 16,
    protag.durab = 9,
    protag.cuerpo = 'carac/prota-azul.png',
    protag.frontal = 'carac/prota-azul-fron.png',
    protag.arma= 'item/shielda.png',    
    protag.roto= 'item/brokenshielda.png';
    setProtag();
    $("#frase").css('font-family','azul');
    $("#frase").css('color','darkblue');
};
function campamarillo(){
    protag.fue=4,
    protag.pv = 14,
    protag.vida = 14,
    protag.durab = 6,
    protag.cuerpo = 'carac/prota-amarillo.png',
    protag.frontal = 'carac/prota-amarillo-fron.png',
    protag.arma= 'item/mazaa.png',    
    pelele.roto="item/enemigo/brokenmaza.png";
    setProtag();
    $("#frase").css('font-family','amarillo');
    $("#frase").css('color','brown');
};

