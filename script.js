let input = document.getElementById("input");
let button = document.getElementById("img_show");
let spiderman = document.getElementById("spiderman");
let ironman = document.getElementById("ironman");
let sound = document.getElementById("sound");
let thor = document.getElementById("thor");
let captainamerica = document.getElementById("captainamerica");
let hulk = document.getElementById("hulk");

input.addEventListener("keydown" , (a) => {
   
    if(a.key === "Enter") {
         let hero = input.value.toLowerCase();
        navigator.vibrate(500);
        // sound.currentTime = 0;
        // sound.play()
         ironman.style.display = "none";
        spiderman.style.display = "none";
        captainamerica.style.display = "none";
        hulk.style.display = "none";
        thor.style.display = "none";

        if(hero === "ironman"){
            ironman.style.display = "block";
           
        }else if(hero === "spiderman") {
            spiderman.style.display = "block";
          
        }else if(hero === "captainamerica"){
            captainamerica.style.display = "block";
           
        }else if(hero === "hulk") {
            hulk.style.display = "block";
           

        }else if(hero === "thor") {
            thor.style.display = "block"

        }
    }
})
button.addEventListener("click" , () => {
     navigator.vibrate(500);
    // sound.currentTime = 0;
    // sound.play()
    ironman.style.display = "none";
        spiderman.style.display = "none";
        captainamerica.style.display = "none";
        hulk.style.display = "none";
        thor.style.display = "none";
         if(hero === "ironman"){
            ironman.style.display = "block";
           
        }else if(hero === "spiderman") {
            spiderman.style.display = "block";
          
        }else if(hero === "captainamerica"){
            captainamerica.style.display = "block";
           
        }else if(hero === "hulk") {
            hulk.style.display = "block";
           

        }else if(hero === "thor") {
            thor.style.display = "block"

        }

})