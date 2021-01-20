// TODO: validate Tu esi/neesi nokārtojis
var validacijasRezultats = ballesIevade();
document.write(zinasanuVertesana(validacijasRezultats) + nokartojisNenokartojis(validacijasRezultats));

function ballesIevade(){
    var balle = prompt("Ievadi balli:");
    // console.log(balle);
    // console.log(typeof balle);
    ievadesValidacija(balle); 
    return balle;  
}
function ievadesValidacija(input){
    if(input > 0 && input <= 10){
        alert("Balles vērtība ir ievadīta pareizi!");
        ballesIevade();
        return true;
    }else if(input == null){
        alert("Balles vērtība nav ievadīta. Mēģiniet vēlreiz!");
        ballesIevade();
        return false;
    }else if(input == ""){
        alert("Ievades lauks ir atstāts tukšs. Mēģiniet vēlreiz!");
        ballesIevade();
        return false;        
    }else{
        alert("Ievadītā balle nav desmit baļļu skalā. Mēģiniet vēlreiz!");
        return false;  
    }
}
function zinasanuVertesana(input){
    var rezultats = "";
    switch(input) {
        case "10": 
            rezultats = "Izcili.";
        break;
        case "9": 
            rezultats = "Teicami.";
        break;
        case "8": 
            rezultats = "Ļoti labi.";
        break;
        case "7":        
            rezultats = "Labi.";
        break;
        case "6":  
            rezultats = "Viduvēji.";
        break;
        case "5": 
            rezultats = "Gandrīz viduvēji.";
        break;
        case "4":  
            rezultats = "Vāji.";
        break;
        case "3":
            rezultats = "Ļoti vāji.";
        break;
        case "1":
            rezultats = "Ļoti ļoti vāji.";
        break; 
    }
    return rezultats;
}

function nokartojisNenokartojis(balle){
    if(balle < 4){
        return ' Neesi nokārtojis.';
    }else{
        return ' Esi nokārtojis.';
    }
};




// ballesIevade();
// function ballesIevade(){
//     var balle = parseInt(prompt("Ievadi balli:"));
//     console.log(balle);
//     ievadesValidacija(balle);   
// }
// function ievadesValidacija(input){
//     if(input <= 0 || input > 10){
//         alert("Ievadiet pareizu balles vērtību");
//         ballesIevade();
//     }else if(input == null || input == ""){
//         alert("balles vērtība nav ievadīta");
//         ballesIevade();
//     }else{
//         zinasanuVertesana(input);
//     };
// }
// function zinasanuVertesana(input){
//     switch(input) {
//         case 10: 
//             rezultats = "Izcili. Tu esi nokārtojis eksāmenu.";
//         break;
//         case 9: 
//             rezultats = "Teicami. Tu esi nokārtojis eksāmenu.";
//         break;
//         case 8: 
//             rezultats = "Ļoti labi. Tu esi nokārtojis eksāmenu.";
//         break;
//         case 7:        
//             rezultats = "Labi. Tu esi nokārtojis eksāmenu.";
//         break;
//         case 6:  
//             rezultats = "Viduvēji. Tu esi nokārtojis eksāmenu.";
//         break;
//         case 5: 
//             rezultats = "Gandrīz viduvēji. Tu esi nokārtojis eksāmenu.";
//         break;
//         case 4:  
//             rezultats = "Vāji. Tu neesi nokārtojis eksāmenu.";
//         break;
//         case 3:
//             rezultats = "Ļoti vāji. Tu neesi nokārtojis eksāmenu.";
//         break;
//         case 1:
//             rezultats = "Ļoti ļoti vāji. Tu neesi nokārtojis eksāmenu.";
//         break;
//         default:
//             rezultats = "Nav pareizi ievadīta balle";    
//     }
//     document.write(rezultats);
// }
   
   


