const char = document.getElementById("char");
const enemy = document.getElementById("enemy");
const stamina = document.getElementById("stamina");
var stamina_value = parseInt(stamina.getAttribute("value"));
const life = document.getElementById("life");
var life_value = parseInt(life.getAttribute("value"));

function enemys_life(dmg){
    var enemys_life_value = parseInt(document.getElementById("enemys_life").getAttribute("value"));

    if(((enemys_life_value)-dmg) <= 0){
        document.getElementById("enemys_life").setAttribute("value", enemys_life_value);
        
        window.alert("die");
        
        dying();
    }else{
        
        enemys_life_value -= parseInt(dmg);

        document.getElementById("enemys_life").setAttribute("value", enemys_life_value);

    }

    document.getElementById("enemys_life").innerHTML = enemys_life_value;
};

function atk_opt(){
    document.getElementById("atk_opt").style.display = "block";
};

function cancel_atk(){
    document.getElementById("atk_opt").style.display = "none";
};

function sta_fun(v){
    stamina_value += v;
    stamina.setAttribute("value", stamina_value);
};

function atk1(dmg, sta){
    if(stamina_value >= (-1*sta)){    
        //ANIMETION BY CSS CLASS:
        char.classList.add("atk");
        
        setTimeout( () => {
            char.classList.remove("atk")
        }, 50);
        
        console.log("atk");
        
        enemys_life(dmg);
        
        sta_fun(sta);
    };

    enemy_IA();
};

function atk2(dmg, sta){
    if(stamina_value >= (-1*sta)){    
        //ANIMETION BY CSS CLASS:
        char.classList.add("atk");
        
        setTimeout( () => {
            char.classList.remove("atk")
        }, 50);
        
        console.log("atk");
        
        enemys_life(dmg);
        
        sta_fun(sta)
    };

    enemy_IA();
};

function dfs(sta){
    sta_fun(sta)
    enemy_IA()
}

function dying(){

    //ANIMETION BY CSS CLASS:
        enemy.classList.add("dying");

        console.log("dying")
};


// Project ENEMY's I.A.:

var e_sta = 100;
const status = [life_value, stamina_value];


function enemy_IA(atk_frq, dfs_frq){





    atk = Math.random() * (atk_frq + 1);
    dfs = Math.random() * (dfs_frq + 1);


}

