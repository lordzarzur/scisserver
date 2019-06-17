var protag = {accion:0, 
             vida:11,
             pv:11,
             durab:5,
             fue:5,
             cuerpo:'',
             frontal:'',
             arma:'',
             arma2:'',
             roto:""
             }; 
var pelele = {
    accion:0, 
    vida:15,
    pv:15,
    durab:12,
    fue:0,
    IA:99,
    cuerpo:'',
    arma:'',
    arma2:'',
    roto:"",
    timing:4,
    svoz:'',
    sarma:''
    };   
var ventaja = 0;    
var crono;
var crono2;
var tiempo= 3;
var score = {dealt:0,
            received:0,
            healed:0,
            acciones:0,
            duelos:0,
            enemigos:0, 
            total:0,
            romper:0};
var son;
var rblanco;
var ef;
var ef0;
var ef1;
var ef2;
var ef3;
var ef4;
var ef5;
var ef6;

$(document).ready(function () {
    rblanco = $(".bso")[0];
    son = $(".bso")[1];
    ef0 = $(".efecto")[0];
    ef1 = $(".efecto")[1];
    ef2 = $(".efecto")[2];
    ef3 = $(".efecto")[3];
    ef4 = $(".efecto")[4];
    ef5 = $(".efecto")[5];
    ef6 = $(".efecto")[6];
    $('#out_game').show();  
    $("#todo").hide();
    $("#frase").hide();
    $("#frasem").hide();
    $("#botones3").hide();
    $("#botones2").hide();
    $("#botones").hide();
    $("#contadores").hide();
        //al elegir el combate, todo lo anterior aparece, y desaparece el menu lista_players
    
var socket = io.connect("");//(heroku... http server) 
    //ahora tenemos el objeto socket //declaramos conexion
var my_nick = prompt('Nickname: '); //prompt; alert con 
socket.emit('set_nickname', my_nick);  
  
socket.on('list_players', function(players){
	var j = $('#lista_players');     
	j.html('');
	for(let i = 0;i<players.length;i++){
		if(players[i] == my_nick)continue;
		var p = $('<p>');
		p.text(players[i]);
		p.click(function(){
			socket.emit('join', this.innerHTML);
		});
		j.append(p);
	}
});
socket.on('start_new_game', function(enemy_name){
	$('#out_game').hide();         
	$('#todo').show();
    screenIn("src/desierto.png");
    $('#pvm').text(enemy_name);   //nombre del enemigo
    inicio1();
});
socket.on('enemy_disconnect', function(){   //desconexión    
    alert('-has ganado por abandono-');
	$('#todo').hide();
    $('#out_game').show();
    screenIn("src/portada2.png");
});
socket.on('surrender', function(){   //desconexión    
	//meter funcion de victoria deshonrosa, por abandono
    //esconder el juego y sacar otra pantalla que nos de la info
    fraseB("me he rajado");
    saleMalo();
    clearTimeout(crono);
    crono2 = setTimeout(scores,2500);
});
         
socket.on('eventoreturn', function(code){  //escucha un envio de emit('eventoreturn')
    alert("entro en funcion");
  });

socket.on('pvaCon', function(a){   //solo sirve para la visualizacion
    pva(a);
});
socket.on('durabaCon', function(a){   //solo para visualizacion
    duraba(a);
});
socket.on('rotoA', function(){ 
    remataB();
    fraseA("no puedo defenderme!");
    crono= setTimeout(scores,3000);
});
socket.on('rotoB', function(){   
    remataA();
    fraseB("...mi arma...");
    crono= setTimeout(scores,3000);
});
socket.on('muereA', function(){  
    mov0a();
    mov01b();
    fraseB("enemigo caido");
    crono= setTimeout(scores,3000);
});
socket.on('muereB', function(){   
    mov0b();
    mov01a();
    fraseA("¡MUERE!");
    crono= setTimeout(scores,3000);
});
    
socket.on('accionEnemy', function(a){
    pelele.accion = a;
});
socket.on('sendCheck', function(a){ 
        ventaja=a;
		if (ventaja == 0) {
			$("#at").css('background-image', 'url("img/ataca.png")'); 
			$("#av").css('background-image', 'url("img/avance.png")');
		}else if (ventaja == 1) {
			$("#at").css('background-image', 'url("img/atacaventaja.png")'); 
			$("#av").css('background-image', 'url("img/avanceventaja.png")'); 
		}else{
			$("#at").css('background-image', 'url("img/atacadesventaja.png")'); 
			$("#av").css('background-image', 'url("img/avancedesventaja.png")');
		};
    crono=setTimeout(eleccion,1500);
});
socket.on('resolucionIntro',function(n){
    pelele.accion=n;
    resolucion(socket);
});
socket.on('inic',function(){
    inicio2();
});
socket.on('eleccionCom',function(){
    eleccion();
});
socket.on('eleccionmini',function(){
    minijuego();
});
socket.on('setPeleleS',function(ac){
    apareceMalo();
    entraMalo();
    switch(ac){
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
    };
});

            //funciones en los botones:
    $("#def").click(function(){
        $("#botones").hide();
        socket.emit('acciones', 0);
        protag.accion = 0;
    });
    $("#at").click(function(){ 
        $("#botones").hide();
        socket.emit('acciones', 1);
        protag.accion = 1;
     });
    $("#av").click(function(){
        $("#botones").hide();
        socket.emit('acciones', 2);
        protag.accion = 2;
    });
    $("#retro").click(function(){ 
        $("#botones").hide();
        socket.emit('acciones', 3);
        protag.accion = 3;
    }); 
    
    $("#ab").click(function(){
        $("#botones2").hide();
        socket.emit('accion2', 1);
        protag.accion = 1;
    });
    $("#ar").click(function(){ 
        $("#botones2").hide();
        socket.emit('accion2', 2);
        protag.accion = 2;
     });
    $("#der").click(function(){ 
        $("#botones2").hide();
        socket.emit('accion2', 3);
        protag.accion = 3;
     });  
    
    $("#opc1").click(function(){ 
        $("#botones3").hide();
        var n = 1;
        socket.emit('playerN',n);
        //socket.emit('accion3', 1);
        campazul();
        callaA();
    });
    $("#opc2").click(function(){ 
        $("#botones3").hide(); 
        var n = 2;
        socket.emit('playerN',n);
        //socket.emit('accion3', 2);
        protag.accion = 2;
        campamarillo();
        callaA();
     });
    $("#opc3").click(function(){ 
        $("#botones3").hide();
        var n = 3;
        socket.emit('playerN',n);
        //socket.emit('accion3', 3);
        protag.accion = 3;
        camprojo();
        callaA();
     });  

    $("#exit").click(function(){ //desvia
        //aqui te rindes
        socket.emit('surrend');
        $('#out_game').show();  
        $("#todo").hide();
         screenIn("src/portada2.png")
        alert("Te has rendido,<br> ¿tenías miedo de perder?");
     }); 
    
});