function movSa(){       //el jugador saluda   
    $("#armap").css('transition', 'transform 2s');
    $("#armap").css('transform', 'translate(20px, 20px) rotate(410deg) scale(0.95) skewX(-15deg)');
    $("#cuerpo").css('transition', 'transform 1s');
    $("#cuerpo").css('transform', 'translate(0px, 0px) rotate(20deg) scale(1) skewX(-15deg)'); 

};  
function movSb(){
    $("#armam").css('transition', 'transform 2s');    
    $("#armam").css('transform', 'translate(20px, 20px) rotate(360deg) scale(1.20) skewX(-5deg)');
    $("#malo").css('transition', 'transform 1s');
    $("#malo").css('transform', 'translate(0px, 0px) rotate(-20deg) scale(1.2) skewX(15deg)'); 
};
function mov1a(){      //atacar
    $("#armap").css('transition', 'transform 1s');
    $("#armap").css('transform', 'translate(10px, 0px) rotate(720deg) scale(1.2) skewX(-15deg)');   
    $("#cuerpo").css('transition', 'transform 1s');
    $("#cuerpo").css('transform', 'translate(0px, 0px) rotate(0deg) scale(1.2) skewX(-15deg)');   
};
function mov1b(){
    $("#armam").css('transition', 'transform 1s');
    $("#armam").css('transform', 'translate(-90px, 0px) rotate(-420deg) scale(1.5) skewX(0deg)');
    $("#malo").css('transition', 'transform 1s');
    $("#malo").css('transform', 'translate(-30px, 0px) rotate(-25deg) scale(1.5) skewX(-10deg)');
};

function mov11a(){      //vuelta a guardia
    $("#armap").css('transition', 'transform 1.2s');
    $("#armap").css('transform','translate(20px, 20px) rotate(60deg) scale(0.95) skewX(-15deg)');
    $("#cuerpo").css('transition', 'transform 1.3s');
    $("#cuerpo").css('transform', 'translate(0px, 0px) rotate(0deg) scale(1) skewX(0deg)');
    distancia(1);
};
function mov11b(){
    $("#armam").css('transition', 'transform 1.2s');
    $("#armam").css('transform', 'translate(0px, 0px) rotate(-15deg) scale(1) skewX(0deg)');     
    $("#malo").css('transition', 'transform 1.3s');
    $("#malo").css('transform', 'translate(0px, 0px) rotate(0deg) scale(1) skewX(0deg)');
    distancia(1);
};
function mov2a(){      //parada
    $("#armap").css('transition', 'transform 0.5s');
    $("#armap").css('transform', 'translate(60px, -60px) rotate(-400deg) scale(1.2) skewX(-15deg)');
    $("#cuerpo").css('transition', 'transform 0.5s');
    $("#cuerpo").css('transform', 'translate(0px, 0px) rotate(-10deg) scale(1.1) skewX(10deg)');
};
function mov2b(){
    $("#armam").css('transition', 'transform 0.5s');
    $("#armam").css('transform', 'translate(0px, 0px) rotate(0deg) scale(1) skewX(0deg)');     
    $("#malo").css('transition', 'transform 0.5s');
    $("#malo").css('transform', 'translate(30px, 5px) rotate(10deg) skewX(5deg)');
};   
                    
function mov3a(){      //avanza- carga!
    $("#armap").css('transition', 'transform 0.6s');
    $("#armap").css('transform', 'translate(200px, 20px) rotate(90deg) scale(1) skewX(0deg)');
    $("#cuerpo").css('transition', 'transform 0.6s');
    $("#cuerpo").css('transform', 'translate(60px, 10px) rotate(20deg) scale(1.2) skewX(-20deg)');
    distancia(1.3);
};
function mov3b(){
    $("#armam").css('transition', 'transform 0.6s');
    $("#armam").css('transform', 'translate(-100px, 0px) rotate(-370deg) scale(1) skewX(0deg)');     
    $("#malo").css('transition', 'transform 0.6s');
    $("#malo").css('transform', 'translate(-130px, 5px) rotate(-18deg) skewX(10deg)');
    distancia(1.3);
};
function mov4a(){      //retrocede, pecador!
    $("#armap").css('transition', 'transform 0.4s');
    $("#armap").css('transform', 'translate(20px, 20px) rotate(90deg) scale(1) skewX(0deg)');
    $("#cuerpo").css('transition', 'transform 0.4s');
    $("#cuerpo").css('transform', 'translate(-50px, -10px) rotate(-20deg) skewX(24deg)');
    distancia(0.8);
};
function mov4b(){
    $("#armam").css('transition', 'transform 0.4s');
    $("#armam").css('transform', 'translate(0px, 0px) rotate(10deg) scale(1) skewX(0deg)');     
    $("#malo").css('transition', 'transform 0.4s');
    $("#malo").css('transform', 'translate(30px, 5px) rotate(-35deg) skewX(-30deg)');
    distancia(0.8);
};

function mov0a(){      //muertes
    fraseA("he caído");
    $("#accionm").hide();
    $("#armap").css('transition', 'transform 1.5s');
    $("#armap").css('transform', 'translate(200px, 200px) rotate(30deg) scale(1) skewX(0deg)');
    $("#cuerpo").css('transition', 'transform 1.5s');
    $("#cuerpo").css('transform', 'translate(100px, 20px) rotate(90deg) skewX(10deg)');
};
function mov0b(){
    $("#accionm").hide();
    $("#pvm").hide();
    $("#durabm").hide();
    fraseB("muero");
    $("#armam").css('transition', 'transform 1.5s');
    $("#armam").css('transform', 'translate(0px, 90px) rotate(-95deg) scale(1) skewX(0deg)'); 
    $("#malo").css('transition', 'transform 1.5s');
    $("#malo").css('transform', 'translate(0px, 0px) rotate(-90deg) skewX(-10deg)');
};
function mov01a(){      //celebraciones
    //fraseA("Al fin !");
    $("#frasem").hide();
    $("#armap").css('transition', 'transform 1.5s');
    $("#cuerpo").css('background-image', 'url("'+protag.frontal+'")');
    $("#armap").css('transform', 'translate(-100px, 150px) rotate(100deg) scale(1.2) skewX(0deg)');
    $("#cuerpo").css('transition', 'transform 1.5s');
    $("#cuerpo").css('transform', 'rotate(0deg) scale (1.4) skewX(0deg)');
    $("#prota").css('transition', 'transform 1.5s');
    $("#prota").css('transform', 'translate(100px, 10px)');
};
function mov01b(){
    fraseB("No has podido conmigo");
    $("#frase").hide();
    $("#armam").css('transition', 'transform 1.5s');
    $("#armam").css('transform', 'translate(0px, 0px) rotate(10deg) scale(1) skewX(0deg)'); 
    $("#malo").css('transition', 'transform 1.5s');
    $("#malo").css('transform', 'translate(0px, 0px) rotate(0deg) skewX(0deg)');
};

function remataA(){      //rematar, y celebrar
    mov1a();
    mov0b();
    crono3= setTimeout(mov01a,1500);
};
function remataB(){      
    mov0a();
    mov1b();
    crono3= setTimeout(mov01b,1500);
};

function modocerca(){   
    $("#frasem").hide();
    camara(38,0,1); 
    $("#armap").css('transition', 'transform 0.1s');
    $("#armap").css('transform', 'translate(80px, -80px) rotate(25deg) scale(1.6) skewX(0deg)');
    $("#cuerpo").css('transition', 'transform 0.4s');
    $("#cuerpo").css('transform', 'translate(50px, 0px) rotate(15deg) scale(1.5) skewX(0deg)');
    $("#frase").hide();
    $("#armam").css('transition', 'transform 0.1s');
    $("#armam").css('transform', 'translate(-50px, 0px) rotate(-15deg) scale(1.7) skewX(10deg)'); 
    $("#malo").css('transition', 'transform 0.4s');
    $("#malo").css('transform', 'translate(-30px, 20px) rotate(-20deg) skewX(0deg)');
    distancia(1.6);
    $("#botones").hide();
    $("#botones2").show();
};
function modolejos(){
    $("#botones2").hide();
    camara(50,18,1.2); 
    mov11a();
    mov11b();
    distancia(1);
}
function movARa(){      //arriba
    ef5.play();
    $("#frasem").hide();
    $("#armap").css('transition', 'transform 0.1s');
    $("#armap").css('transform', 'translate(-60px, -150px) rotate(20deg) scale(1) skewX(0deg)');  
};
function movARb(){
    $("#frase").hide();
    $("#armam").css('transition', 'transform 0.1s');
    $("#armam").css('transform', 'translate(-50px, -60px) rotate(-30deg) scale(1.5) skewX(0deg)'); 
};
function movABa(){      //abajo
    ef5.play();
    $("#frasem").hide();
    $("#armap").css('transition', 'transform 0.1s');
    $("#armap").css('transform', 'translate(80px, 40px) rotate(120deg) scale(1.3) skewX(-10deg)');
};
function movABb(){
    $("#frase").hide();
    $("#armam").css('transition', 'transform 0.1s');
    $("#armam").css('transform', 'translate(50px, 40px) rotate(10deg) scale(1.5) skewX(10deg)');  
};
function movDEa(){      //derecha
    ef5.play();
    $("#frasem").hide();
    $("#armap").css('transition', 'transform 0.1s');
    $("#armap").css('transform', 'translate(100px, 0px) rotate(50deg) scale(1.3) skewX(-10deg)');
};
function movDEb(){
    $("#frase").hide();
    $("#armam").css('transition', 'transform 0.1s');
    $("#armam").css('transform', 'translate(-60px, 10px) rotate(10deg) scale(1.5) skewX(20deg)'); 
};

//roto, aun por saber si incluir en turns o aqui
function movRa(){
    $("#armap").css('transition', 'transform 0.4s');
    $("#armap").css('background-image', 'url("'+protag.roto+'")');
    $("#armap").css('transform', 'translate(0px, 0px) rotate(0deg) scale(1.3) skewX(0deg)');
    distancia(1);
    };
function movRb(){
    $("#armam").css('transition', 'transform 0.4s');
    $("#armam").css('transform', 'translate(0px, 0px) rotate(10deg) scale(1) skewX(0deg)'); 
    $("#armam").css('background-image', 'url("'+pelele.roto+'")');
    $("#malo").css('transition', 'transform 0.4s');
    $("#malo").css('transform', 'translate(0px, 0px) rotate(0deg) skewX(0deg)');
    distancia(1);
};
    //          ARENA

function movNext(){
    $("#tablamalo").css('transition', 'transform 2.8s');    
    $("#tablamalo").css('transform', 'translate(1200px, 200px)');  
    crono2= setTimeout(movNext2,3000);
    };
function movNext2(){
    $("#tablamalo").css('transition', 'transform 2.8s');
    $("#tablamalo").css('transform', 'translate(0px, 0px)');
    fraseA("preparados...");
    mov11a();
    mov11b();
    crono = setTimeout(inicio1,5000);
    };


    //          QUEST

function entraMalo(){
    $("#tablamalo").css('transition', 'transform 2.1s');    
    $("#tablamalo").css('transform', 'translate(0px, 0px)');  
    apareceMalo();
    };
function saleMalo(){
    $("#tablamalo").css('transition', 'transform 2.1s');    
    $("#tablamalo").css('transform', 'translate(1200px, 200px)'); 
    };
function apareceMalo(){
    $("#tablamalo").fadeIn(1);
    $("#tablamalo").show();
    };
function desapareceMalo(){
    $("#tablamalo").fadeOut(1);
    };
function questCambio2(){
    apareceMalo();
    entraMalo();
    camara(50,18,1);
        };
function questCambio(){
    desapareceMalo();
    cron = setTimeout(questCambio2,3000);
    //transicion de fondo negro en que se oculta todo excepto al personaje. 
            //fondo negro, etc. después se le da nuevo fondo  y escena
    //background image:  la que toque
        };    
