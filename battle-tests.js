const char = document.getElementById("char");

const atk = () => {
    char.classList.add("atk");

    setTimeout( () => {
        char.classList.remove("atk")
    }, 50);
    console.log("atk")
};

document.addEventListener("keydown",  atk);