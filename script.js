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
        sound.currentTime = 0;
        sound.play()
         ironman.style.display = "none";
        spiderman.style.display = "none";
        captainamerica.style.display = "none";
        hulk.style.display = "none";
        thor.style.display = "none";
        if(input.value == "ironman"){
            ironman.style.display = "block";
           
        }else if(input.value == "spiderman") {
            spiderman.style.display = "block";
          
        }else if(input.value == "captainamerica"){
            captainamerica.style.display = "block";
           
        }else if(input.value == "hulk") {
            hulk.style.display = "block";
           
        }else if(input.value == "thor") {
            thor.style.display = "block"
            
        }
    }
})
button.addEventListener("click" , () => {
    sound.currentTime = 0;
    sound.play()
    ironman.style.display = "none";
        spiderman.style.display = "none";
        captainamerica.style.display = "none";
        hulk.style.display = "none";
        thor.style.display = "none";
        if(input.value == "ironman"){
            ironman.style.display = "block";
           
        }else if(input.value == "spiderman") {
            spiderman.style.display = "block";
          
        }else if(input.value == "captainamerica"){
            captainamerica.style.display = "block";
           
        }else if(input.value == "hulk") {
            hulk.style.display = "block";
           
        }else if(input.value == "thor") {
            thor.style.display = "block"
            
        }
})