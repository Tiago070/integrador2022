const char = document.getElementById("char");

function enemys_life(dmg){
    var enemys_life_value = parseInt(document.getElementById("enemys_life").getAttribute("value"));

    enemys_life_value -= parseInt(dmg);

    document.getElementById("enemys_life").setAttribute("value", enemys_life_value);

    if (enemys_life_value <= 0){
        window.alert("die")
    };

    console.log(enemys_life_value);
};

function atk(){

    //ANIMATION BY CSS CLASS:
        char.classList.add("atk");

        setTimeout( () => {
            char.classList.remove("atk")
        }, 50);

        console.log("atk")

    enemys_life(10)
};
 
