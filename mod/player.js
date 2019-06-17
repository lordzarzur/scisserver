module.exports = class player{       //meter un machete para Dimitar
	constructor(socket, enemy){        //asigna dos ids para crear el combate
                                    //posibles parametros en fn
		this.socket = socket;
		this.enemy = enemy;       //this.enemy.player--socket.enemy
        // this.enemy.player.socket
        // this.enemy
		this.accion = 0;
		this.vida = 10;
		this.pv = 10;
		this.durab = 6;
		this.fue = 3;
		this.ventaja =0 ;
		this.arma = ''; 
		this.cuerpo = '';
		this.frontal = '';
		this.roto = '';
		this.ready = 0;
	}

	/*atack(dmg){//el ataque de dimitar
		var enemy = this.enemy.player;
		enemy.health -= (this.power - enemy.shield);
		this.enemy.emit('set_health', enemy.health);
	}*/
}
/*	//del original protag
var protag = {accion:0, 
             vida:11,
             pv:11,
             durab:5,
             fue:5,
             cuerpo:'',
             frontal:'',
             arma:'',
             roto:""
			 };
 */