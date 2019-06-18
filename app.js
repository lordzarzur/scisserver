var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static('./public'));
    //lo primero es la llamada https://..../lo que pongas
    // ./public es la carpeta que se peude acceder desde client
var Player = require('./mod/player');
function start_new_game(socket1, socket2){  //envia los nombres de los jugadores enemigos
	socket1.player = new Player(socket1, socket2);
	socket2.player = new Player(socket2, socket1);

	socket1.emit('start_new_game', socket2.nickname);//arranca juego
	socket2.emit('start_new_game', socket1.nickname);
};
function get_players_list(){
	var sockets = io.sockets.sockets;
	var l = [];
	for(let socket_id in sockets){ //recorrer por id de sockets
		var client = io.sockets.sockets[socket_id];
		if(client.nickname)l.push(client.nickname);
	};
	return l;
};


function pvaServ(a,socket){
	socket.player.vida += a;
    console.log(socket.nickname+" vida "+a);
};
function durabaServ(a,socket){
	socket.player.durab -= 1;
    console.log(socket.nickname+" durabilidad "+a);
};
function wait(socket){	//si tenemos las 2 acciones, palante
	socket.player.ready = 1;
	if (socket.player.enemy.player.ready == 1){	
        console.log("+ + elegidos los dos w1");	socket.emit('accionEnemy',socket.player.enemy.player.accion);
		socket.player.enemy.emit('accionEnemy', socket.player.accion);
        //alert("acciones elegidas"+socket.player.accion+" "+socket.player.enemy.player.accion);
        socket.player.ready = 0;
        socket.player.enemy.player.ready = 0;
        resolucionServ(socket);
	}
};
function wait2(socket){	//para botones2, minijuego
	socket.player.ready = 1;
	if (socket.player.enemy.player.ready == 1){
        console.log("+ + elegidos los dos w2");
        socket.player.ready = 0;
        socket.player.enemy.player.ready = 0;
        socket.player.enemy.emit('resolucionIntro',socket.player.accion);
        socket.emit('resolucionIntro',socket.player.enemy.player.accion);
		resoluminiServ(socket);
		//llama a resolucion, tambien envia la accion del enemigo para su visualizacion y animacion
	}
};
function wait3(socket){	//para botones 3, eleccion de mejoras
	socket.player.ready = 1;
socket.player.enemy.emit('setPeleleS',socket.player.accion);
	switch(socket.player.accion){
		case 1://azul
			socket.player.durab += 3;
			socket.player.vida += 6;
			socket.player.pv += 6;
			break;
		case 2://amaril
			socket.player.fue += 1;
			socket.player.vida += 4;
			socket.player.pv += 4;
			break;
		case 3://rojo
			socket.player.fue += 3;
			break;
		default:
			return;
	};
	if (socket.player.enemy.player.ready == 1){
        console.log("+ + elegidos los dos w3 "+socket.nickname);
        socket.player.ready = 0;
        socket.player.enemy.player.ready = 0;
        socket.emit('inic');
        socket.player.enemy.emit('inic');
        inicioS();
	};
};
function inicioS(){
    console.log("la batalla va a empezar!!");
};
function checkeaServ(socket){
    console.log("// checkeaServ \\");
    socket.player.ready = 1;
	if (socket.player.enemy.player.ready == 1){
        console.log("-   -checked-    - " +socket.nickname);
        socket.player.ready = 0;
        socket.player.enemy.player.ready = 0; 
        if (socket.player.vida < 1){
            console.log("FIN ganador: - "+socket.player.enemy.nickname);
            socket.emit('muereA');
            socket.player.enemy.emit('muereB');
        }else if(socket.player.durab < 1){
            console.log("FIN ganador: - "+socket.player.enemy.nickname);
            socket.emit('rotoA');
            socket.player.enemy.emit('rotoB');
        }else if (socket.player.enemy.player.vida < 1){
            console.log("FIN ganador: - "+socket.nickname);
            socket.emit('muereB');
            socket.player.enemy.emit('muereA');
        }else if(socket.player.enemy.player.durab < 1){
            console.log("FIN ganador: - "+socket.nickname);
            socket.emit('rotoB');
            socket.player.enemy.emit('rotoA');
        }else{
            socket.emit('sendCheck',socket.player.ventaja);
            socket.player.enemy.emit('sendCheck',socket.player.enemy.player.ventaja);
            socket.player.ready = 0;
            socket.player.enemy.player.ready = 0;
            socket.player.accion = 0;
            socket.player.enemy.player.accion = 0;
        }   
    };
};

function eleccionS(socket){
	abreeleccion(socket);
};
function abreeleccion(socket){
    console.log("-turno nuevo --- "+socket.nickname);
	socket.emit('eleccionCom');
    socket.player.enemy.emit('eleccionCom');
	socket.player.accion = 0;
    socket.player.enemy.player.accion = 0;
};
function resolucionServ(socket){
    console.log("-resolviendo-");
	socket.emit('resolucionIntro',socket.player.enemy.player.accion);
    socket.player.enemy.emit('resolucionIntro',socket.player.accion);
resolver1s(socket.player.accion,socket.player.enemy.player.accion,socket);
	socket.player.ready = 0;
    socket.player.enemy.player.ready = 0;
};

function resolver1s(a,b,socket){ //ventaja y movimientos movAa
	console.log("__r1_"+socket.nickname);
    switch(a){ 
		case 0:
			switch(b){
				case 0:     // ! nada
					break;
				case 1:     //daño arma a, ventaja a
					socket.player.ventaja=1;
					break;
				case 2:     //ventaja b
					socket.player.ventaja=2;
					break;
				case 3:     //gana vida a
					break;
				default:
					break;
			}    
			break;
		case 1:
			switch(b){
				case 0:// ! daño arma b, ventaja b
					socket.player.ventaja=2;
					break;
				case 1:
					switch(socket.player.ventaja){
						case 1:
							socket.player.ventaja=0; 
							break;
						case 2:
                    		pvaServ(-socket.player.enemy.player.fue,socket);
							socket.player.ventaja=0; 
							break;
						default:
							minijuegoServ(socket); 
							break;
					}
					break;
				case 2://daño b
					socket.player.ventaja=0; 
					break;
				case 3://ventaja b
                    socket.player.enemy.player.ventaja= 1;
					socket.player.ventaja=2; 
					break;
			} 
			break;
		case 2:
			switch(b){
				case 0:// ! ventaja a
				socket.player.ventaja=1; 
                socket.player.enemy.player.ventaja= 2;
					break;
				case 1://daño a
				socket.player.ventaja=0; 
					break;
				case 2://ventaja pega/choque de espadas
					switch(socket.player.ventaja){
						case 1:
							socket.player.ventaja=0; 
							break;
						case 2:
							socket.player.ventaja=0; 
                    		pvaServ(-socket.player.enemy.player.fue,socket);
							break;
						default:
							minijuegoServ(socket); 
							break;
					}
				case 3://daño b
					socket.player.ventaja=0; 
					break;
			} 
			break;
		case 3:
			switch(b){
				case 0:// ! +1 vida b
					socket.player.ventaja=0;
					break;
				case 1://ventaja a
					socket.player.ventaja=1;
                    socket.player.enemy.player.ventaja= 2;
					break;
				case 2://daño a
					socket.player.ventaja=0;
					break;
				case 3://+1 vida
					socket.player.ventaja=0;
					break;
			} 
			break;
		default:
			return;
		}
    resolver2s(a,b,socket);
};
function resolver2s(a,b,socket){    //daño movimientos movAAa
	console.log("__r2_"+socket.nickname);
	switch(a){
		case 0:
			switch(b){
				case 0:
					break;
				case 1://daño arma a, ventaja a
					durabaServ(-1,socket);
					break;
				case 2://ventaja b
					break;
				case 3://esquivado, gana vida a
					socket.player.ventaja=0; 
                    pvaServ(1,socket);
					break;
			}    
			break;
		case 1:
			switch(b){
				case 0:// ! daño arma b, ventaja b
					break;
				case 1://la ventaja pega
					break;
				case 2://daño b
					socket.player.ventaja=0; 
					break;
				case 3://ventaja b
					break;
			} 
			break;
		case 2:
			switch(b){
				case 0:// ! ventaja a
					break;
				case 1://daño a
					pvaServ(-socket.player.enemy.player.fue,socket);
					socket.player.ventaja=0; 
					break;
				case 2://ventaja pega/choque de espadas
					break;
				case 3://daño b
					socket.player.ventaja=0; 
					break;
			} 
			break;
		case 3:
			switch(b){
				case 0:// ! +1 vida b
					socket.player.ventaja=0; 
					break;
				case 1://ventaja a
					break;
				case 2://daño a
					pvaServ(-socket.player.enemy.player.fue,socket);
					socket.player.ventaja=0; 
					break;
				case 3://+1 vida
					pvaServ(1,socket);
					socket.player.ventaja=0; 
					break;
			} 
			break;
		default:
			return;
		}
};
function minijuegoServ(socket){ 
    console.log("_minijuego_"+socket.nickname);
	socket.player.accion = 1;
	socket.player.enemy.player.accion = 1;
	socket.player.ready = 0;
	socket.player.enemy.player.ready = 0;
	socket.emit('eleccionmini');
};
function resoluminiServ(socket) {
	var i ;
	i = socket.player.enemy.player.accion;
    var l;
    l = socket.player.accion;
    switch(l){            // 1 ab, 2 arri, 3 dcha
        case 1:
            switch(i){
                case 1:
                    break;
                case 2:         //daño b
                    break;
                case 3:         //daño a
                    pvaServ(-socket.player.enemy.player.fue,socket);
                    break;
                default:
                    return;
            }
            break;
        case 2:
            switch(i){
                case 1:         //daño a
					pvaServ(-socket.player.enemy.player.fue,socket);
                    break;
                case 2:
                    
                    break;
                case 3:         //daño b
                    
                    break;
                default:
                    return;    
            } 
            break;
        case 3:
            switch(i){
                case 1:         //daño b
                    break;
                case 2:         //daño a
					pvaServ(-socket.player.enemy.player.fue,socket);
                    break;
                case 3:
                    break;
                default:
                    return;
            }
            break;
        default:
            return;
        }
    socket.player.ventaja=0;
};


io.on('connection', function(socket){       //al iniciar
	console.log('a user connected'); //suponemos que esto salta con cada nuevo user
	socket.on('set_nickname', function(nickname){  //poner un nickk
		socket.nickname = nickname;
		io.emit('list_players', get_players_list()); // enviar evento a todos
	});
	socket.on('join', function(nickname){      //se resolvería antes el join que el nick?
		var sockets = io.sockets.sockets;
		for(let socket_id in sockets){
			var client = sockets[socket_id];
			if(client.nickname == nickname){     //por lo de los nombres repes 
				if(socket.in_game || client.in_game)return socket.emit('error', nickname + ' is already playing!');
				start_new_game(socket, client);
			}
		}
	});
    socket.on('log', function(na){  //checkea
        console.log(na + socket.nickname);
	});
    socket.on('checkea', function(){  //checkea
        console.log("-entra check-+"+socket.nickname);
        checkeaServ(socket);
	});
	socket.on('acciones', function(n){  //recurrente para cualquier boton de accion
		socket.player.accion = n;
		wait(socket);
	});
	socket.on('accion2', function(n){  //recurrente para cualquier boton de accion
		socket.player.accion = n;
		wait2(socket);
	});
	socket.on('playerN', function(n){  //recurrente para cualquier boton de accion
		socket.player.accion = n;
		wait3(socket);
	});
	socket.on('disconnect', function(){ //la siguientes 3 lineas ?? que coño de IF?
		if(socket.nickname)console.log(socket.nickname + ' has disconnect!');
		socket.emit('list_players', get_players_list());
		if(socket.player)socket.player.enemy.emit('enemy_disconnect');//emitir al enemigo
	});
	socket.on('surrend', function(){
		socket.player.enemy.emit('surrender');
		//emitir al enemigo
	});
	/*
    socket.on('action', function(action1){ //salta con al llegar el envio action
		switch(action1){ //parametro de la fn  
			case 'atack':
				socket.player.atack();//attack está dentro de la clase player
			break;
		}
	});
    */
});

http.listen(process.env.PORT, function(){
	console.log('escucha en localhost:5000');//puerto 5000
});