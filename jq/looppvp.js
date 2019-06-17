    function pvp(){
       
    };
    function pvp2(){

    };
    function pvp3(){

    };
function eleccProtag(){ //set de stats y skin, al elejir combatiente
    switch(protag.accion){
        case 1:
            campazul();
        break;
        case 2:
            campamarillo();
        break;
        case 3:
            camprojo();
        break;
        default:
            return;
    }
};     
function setPelele(a){//set combatiente del enemigo
    switch(a){
        case 1:
            maloazul();
        break;
        case 2:
            maloamarillo();
        break;
        case 3:
            malorojo();
        break;
        default:
            return;
    }
};    

function inicio1(){
        mov11a();
        mov11b();
        piensa("¿estilo de lucha preferido?");
        $("#botones3").show();
    pva(0);
    pvb(0);
    duraba(0);
    durabb(0);
    //crono= setTimeout(eleccion,3000);
    };  
function inicio2(){
    piensa("esto empieza");
    $("#contadores").show();
    //var e="_entracrono_";
    //socket.emit('log',e);
    crono= setTimeout(eleccion,3000);
    //socket.emit('log',"_entra crono_");
    //socket.emit('log','__eleccion__');
    protag.accion=0;
    pelele.accion=0;
};
function eleccion(){
    //socket.emit('log',"__eleccion__");
    protag.accion=0;
    pelele.accion=0;
    mov11a();
    mov11b();
        callaA();
        callaB();
        $("#botones3").hide();
        $("#botones").show();
        replay(son);   //4seg para elegir
        timer();
    };
function resolucion(socket){
    //socket.emit('log','__resolucion__');
        accionma();
        callaA();
        callaB();
        $("#botones").hide();
        $("#time").hide();
        resettimer();
        score.acciones += 1;
        resolver1(protag.accion,pelele.accion,socket);
    };
function minijuego(){   //opciones 1-2-3
        timer();
        protag.accion=1;
        pelele.accion=1;
        clearTimeout(crono);
        crono = setTimeout (resolumini(socket),(tiempo*1000));
        fraseB(protag.accion+1);
    };
/*function checkea() {
        replay(son);
        modolejos();
        $("#frase").hide();
        $("#frasem").hide();
        clearTimeout(crono);
        if (protag.vida < 1){
            fraseB("rindete!");
            mov0a();
            mov01b();
            crono = setTimeout (scores,1500);
        }else if(protag.durab < 1){
            $("#armap").css('background-image', 'url("'+protag.roto+'")');
            crono2= setTimeout (remataB,500);
            crono = setTimeout (scores,1500);
        }else if (pelele.vida < 1){
            fraseA("uno menos...");
            score.enemigos += 1;
            mov0b();
            mov01a();
            crono = setTimeout (scores,1500);
            crono3 = setTimeout(rewards,8000);      
        }else if(pelele.durab < 1){
            score.enemigos += 1;
            $("#armam").css('background-image', 'url("'+pelele.roto+'")');
            fraseA("Su arma esta rota"); 
            crono2= setTimeout (remataA,500);
            crono = setTimeout (scores,2500);  
            crono3 = setTimeout(rewards,7000);
        }else{
            if (ventaja == 0) {
                $("#at").css('background-image', 'url("img/ataca.png")'); 
                $("#av").css('background-image', 'url("img/avance.png")');
            }else if (ventaja == 1) {
                $("#at").css('background-image', 'url("img/atacaventaja.png")'); 
                $("#av").css('background-image', 'url("img/avanceventaja.png")'); 
            }else{
                $("#at").css('background-image', 'url("img/atacadesventaja.png")'); 
                $("#av").css('background-image', 'url("img/avancedesventaja.png")');
            }
            mov11a();
            mov11b();
            eleccion(); 
        }
    };*/
function resolver1(a,b,socket){ //ventaja y movimientos movAa
    //socket.emit('log',"-+ resolver 1 ");
    crono = setTimeout(resolver2(socket),2500);
    var b ;
    b = pelele.accion;
    var a;
    a = protag.accion;
switch(a){         //0 def, 1 at, 2 av, 3 retro
    case 0:
        mov2a();
        camara(50,15,1.8);
        switch(b){
            case 0:     // ! nada
                mov2b();
                fraseA("se diría que nos tenemos miedo");
                ventaja=0;
                break;
            case 1:     //daño arma a, ventaja a
                ventaja=1;
                mov1b();
                fraseA("tengo una oportunidad!");
                ef1.play();
                break;
            case 2:     //ventaja b
                ventaja=2;
                mov3b();
                fraseA("tiene ganada la posicion");
                camara(20,15,0.7);
                break;
            case 3:     //gana vida a
                fraseA("....me ha dado un respiro...");
                mov4b();
                distancia(1);
                break;
            default:
                break;
        }    
        break;
    case 1:
        mov1a();
        camara(50,15,1.8);
        switch(b){
            case 0:// ! daño arma b, ventaja b
                mov2b();
                fraseB("-desperfectos en el arma-");
                fraseA("puede contraatacar!");
                ventaja=2;
                ef1.play();
                break;
            case 1://la ventaja pega
                mov1b();
                distancia(1.3);
                $("#botones2").hide();
                ef1.play();
                switch(ventaja){
                    case 1:
                        pvb(-protag.fue);
                        ventaja=0; 
                        c2 = setTimeout(movABa,800);
                        c3 = setTimeout(movDEa,800);
                        break;
                    case 2:
                        pva(-pelele.fue);
                        ventaja=0;
                        c2 = setTimeout(movABa,800);
                        c3 = setTimeout(movDEa,800);
                        break;
                    default:
                        $("#botones2").show();
                        minijuego(); 
                        break;
                }
                break;
            case 2://daño b
                mov3b();
                ventaja=0;
                break;
            case 3://ventaja b
                ef0.play();
                mov4b();
                ventaja=2;
                break;
        } 
        break;
    case 2:
        mov3a();
        camara(50,15,1);
        switch(b){
            case 0:// ! ventaja a
                ventaja=1;
                mov2b();
                break;
            case 1://daño a
                mov1b();
                ventaja=0;
                break;
            case 2://ventaja pega/choque de espadas
                mov3b();
                modocerca();
                $("#botones2").hide();
                ef1.play;
                switch(ventaja){
                    case 1:
                        pvb(-protag.fue);
                        ventaja=0;
                        c2 = setTimeout(movABa,800);
                        c3 = setTimeout(movDEa,800);
                        break;
                    case 2:
                        pva(-pelele.fue);
                        ventaja=0;
                        c2 = setTimeout(movABa,800);
                        c3 = setTimeout(movDEa,800);
                        break;
                    default:
                        $("#botones2").show();
                        minijuego(); 
                        break;
                }
            case 3://daño b
                mov4b();
                ventaja=0;
                break;
        } 
        break;
    case 3:
        mov4a();
        camara(23,15,1.7);
        switch(b){
            case 0:// ! +1 vida b
                mov2b();
                ventaja=0;
                break;
            case 1://ventaja a
                ef0.play();
                mov1b();
                ventaja = 1;
                break;
            case 2://daño a
                mov3b();
                ventaja=0;
                break;
            case 3://+1 vida
                mov4b();
                ventaja=0;
                break;
        } 
        break;
    default:
        return;
    }
};
function resolver2(socket){    //daño movimientos movAAa
    //socket.emit('log',"-+ resolver 2 ");
    var i ;
    i = pelele.accion;
    var l;
    l = protag.accion;
    crono = setTimeout(pidecheck(socket),1500); 
    mov11a();
    mov11b();
    distancia(1);
switch(l){
//0 def, 1 at, 2 av, 3 retro
    case 0:
        switch(i){
            case 0:
                break;
            case 1://daño arma a, ventaja a
                duraba(-1);
                break;
            case 2://ventaja b
                break;
            case 3://esquivado, gana vida a
                ventaja=0;
                pva(1);
                score.healed += 1;
                break;
        }    
        break;
    case 1:
        switch(i){
            case 0:// ! daño arma b, ventaja b
                durabb(-1);
                break;
            case 1://la ventaja pega
                modolejos();
                break;
            case 2://daño b
                pvb(-protag.fue);
                ventaja=0;
                break;
            case 3://ventaja b
                break;
        } 
        break;
    case 2:
        switch(i){
            case 0:// ! ventaja a
                break;
            case 1://daño a
                pva(-pelele.fue);
                ventaja=0;
                break;
            case 2://ventaja pega/choque de espadas
                modolejos();
                break;
            case 3://daño b
                pvb(-protag.fue);
                ventaja=0;
                break;
        } 
        break;
    case 3:
        switch(i){
            case 0:// ! +1 vida b
                pvb(1);
                ventaja=0;
                break;
            case 1://ventaja a
                break;
            case 2://daño a
                pva(-pelele.fue);
                ventaja=0;
                break;
            case 3://+1 vida
                pva(1);
                pvb(1);
                score.healed += 1;
                ventaja=0;
                break;
        } 
        break;
    default:
        return;
    }
    
};
function resolumini(socket) {
    $("#botones2").hide();
    clearTimeout(crono);
    camara(50,18,0.2);
    var i ;
    i = pelele.accion;
    var l;
    l = protag.accion;
    switch(l){            // 1 ab, 2 arri, 3 dcha
        case 1:
            movABa();
            switch(i){
                case 1:
                    movABb();
                    fraseA(".muy empatado.");
                    break;
                case 2:         //daño b
                    movARb();
                    pvb(-protag.fue);
                    score.duelos += 1;
                    break;
                case 3:         //daño a
                    movDEb();
                    pva(-pelele.fue);
                    break;
                default:
                    return;
            }
            break;
        case 2:
            movARa();
            switch(i){
                case 1:         //daño a
                    movABb();
                    pva(-pelele.fue);
                    break;
                case 2:
                    movARb();
                    fraseA(".muy empatado.");
                    break;
                case 3:         //daño b
                    movDEb();
                    pvb(-protag.fue);
                    score.duelos += 1;
                    break;
                default:
                    return;    
            } 
            break;
        case 3:
            movDEa();
            pvb(-protag.fue); 
            switch(i){
                case 1:         //daño b
                    movABb();
                    pvb(-protag.fue);
                    score.duelos += 1;
                    break;
                case 2:         //daño a
                    movARb();
                    pva(-pelele.fue);
                    break;
                case 3:
                    movDEb();
                    fraseA(".muy empatado.");
                    break;
                default:
                    return;
            }
            break;
        default:
            return;
        }
    ventaja=0;
    crono = setTimeout(pidecheck(socket),1500); 
};

function pidecheck(socket){
    socket.emit('checkea');
    
};

function timer(){//en 4 segundos elejir
    timer1 = setTimeout(resettimer,(4000));
    $("#time").show();
    $("#time").css('transition', 'width '+tiempo+'s');
    $("#time").width('0px');
};
function resettimer(){
    $("#time").css('transition', 'width 0.01s');
    $("#time").width('100%');
    $("#time").hide();
};
function accionma(){
    $("#accionm").show();
    switch(pelele.accion){
        case 0:
            $("#accionm").css('background-image', 'url("img/defensa.png")');
            break;
        case 1:
            $("#accionm").css('background-image', 'url("img/ataca.png")');
            break;
        case 2:
            $("#accionm").css('background-image', 'url("img/avance.png")');
            break;
        case 3:
            $("#accionm").css('background-image', 'url("img/atras.png")');
            break;
        default:            
            break;
    }
};
function rewards(){
};
function regalo() {
};

//recepcion y transformacion de datos de enemigo a pelele
