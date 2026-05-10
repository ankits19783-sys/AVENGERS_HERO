let input = document.getElementById("input");
let button = document.getElementById("img_show");
let spiderman = document.getElementById("spiderman");
let ironman = document.getElementById("ironman");
let sound = document.getElementById("sound");

input.addEventListener("keydown" , (a) => {
    if(a.key === "Enter") {
        sound.currentTime = 0;
        sound.play()
        if(input.value == "ironman"){
            ironman.style.display = "block";
            spiderman.style.display = "none";
        }else if(input.value == "spiderman") {
            spiderman.style.display = "block";
            ironman.style.display = "none";
        }
    }
})
button.addEventListener("click" , () => {
    sound.currentTime = 0;
    sound.play()
    if(input.value == "spiderman"){
         spiderman.style.display = "block";
         ironman.style.display = "none";
    }else if(input.value == "ironman"){
         ironman.style.display = "block";
         spiderman.style.display = "none";
    }

})