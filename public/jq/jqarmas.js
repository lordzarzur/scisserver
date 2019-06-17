function hoz() {        //cambios en los stats, armas
    protag.fue= 1;
    protag.durab=3;
    protag.arma = 'item/hoza.png';
    protag.arma2 = '';
    protag.roto = 'item/brokenhoz.png';
    setArma();
    };
function armor1() {        //cambios en los stats, armaduras
    protag.pv = 13;
    protag.vida = 13;
    protag.cuerpo = '';
    protag.frontal = '';
    setArma();
    };

    
function equipaplatano(){
//aquí los procedimientos de override (redefinir procesos)
    var resetplatano = function(){
        //resetea stats y funciones originales
    };
};


function espada (){
    protag.fue= 4;
    protag.durab = 6;
    protag.arma = 'item/sworda.png';
    protag.arma2 = '';
    protag.roto = 'item/brokensworda.png';
    setArma();
};
function scisword (){
    protag.fue += 2;
    protag.durab = 6;
    protag.arma = 'item/scisword1a.png';
    protag.arma2 = 'item/scisword2a';
    protag.roto = 'item/brokenscisworda.png';
    setArma();
};
function escudoazul (){
    protag.fue -=  2;
    protag.durab = 15;
    protag.arma = 'item/shielda.png';
    protag.arma2 = '';
    protag.roto = 'item/brokenshielda.png';
    setArma();
};
function mazadorada (){
    protag.fue += 1;
    protag.durab = 8;
    protag.arma = 'item/mazaa.png';
    protag.arma2 = '';
    protag.roto = 'item/brokenmazaa.png';
    setArma();
};
function greensword (){
    protag.fue= 10;
    protag.durab = 7;
    protag.arma = 'item/greenkinga.png';
    protag.arma2 = '';
    protag.roto = 'item/brokengreenkinga.png';
    setArma();
};

function armaduraroja(){
    protag.cuerpo='carac/prota-rojo.png';
    protag.frontal='carac/prota-rojo-front.png';
    protag.fue += 3;
    protag.pv += 3;
    protag.vida += 3;
    setProtag();
    armor = 1;
};
function armaduraazul(){
    protag.cuerpo='carac/prota-azul.png';
    protag.frontal='carac/prota-azul-front.png';
    protag.fue += 0;
    protag.pv += 9;
    protag.vida += 9;
    setProtag();
    armor = 2;
};
function armaduraamarilla(){
    protag.cuerpo='carac/prota-amarillo.png';
    protag.frontal='carac/prota-amarillo-front.png';
    protag.fue += 2;
    protag.pv += 5;
    protag.vida += 5;
    setProtag();
    armor = 3;
};

function amuleto1(){ //cura
    amul=1;
    cargaamul = 1;
    $("#item").css('background-image','item/quest/afullheal.png');
};
function amuleto2(){ //repara
    amul=2;
    cargaamul = 3;
    $("#item").css('background-image','item/quest/arepara.png');
};
function amuleto3(){ //maldito de la muerte
    amul=1;
    cargaamul = 20;
    $("#item").css('background-image','item/quest/amaldito.png');
};

function usaamuleto(){  //ninguno,cura,repara, maldito
    switch(amul){
        case 0:

        break;
        case 1:
            if(cargaamul > 0){
                cargaamul -= 1;
                protag.vida = protag.pv;
            };
        break;
        case 2:
            if(cargaamul > 0){
                cargaamul -= 1;
                duraba(3);
                };
        break;    
        case 3:
            if(cargaamul > 0){
                cargaamul -= 1;
                pva(-1);
                pvb(-3);
                };
        break;
        default:
            return;
    };
    if(cargaamul <= 0){
        $("#items").css('background-image',"url('img/vacio.png')");
        fraseA("he agotado la magia del talisman");
    };
};