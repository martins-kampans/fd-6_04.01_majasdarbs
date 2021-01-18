function zinasanuVertesana(){
    var input = prompt("Ievadi balli!");
    var balle, rezultats;
    switch(input) {
        case "10":
            balle = input;
            rezultats = "Izcili. Tu esi nokārtojis eksāmenu.";
        break;
        case "9":
            balle = input;
            rezultats = "Teicami. Tu esi nokārtojis eksāmenu.";
        break;
        case "8":
            balle = input;
            rezultats = "Ļoti labi. Tu esi nokārtojis eksāmenu.";
        break;
        case "7":
            balle = input;
            rezultats = "Labi. Tu esi nokārtojis eksāmenu.";
        break;
        case "5":
            balle = input;
            rezultats = "Viduvēji. Tu esi nokārtojis eksāmenu.";
        break;
        case "4":
            balle = input;
            rezultats = "Gandrīz viduvēji. Tu esi nokārtojis eksāmenu.";
        break;
        case "3":
            balle = input;
            rezultats = "Vāji. Tu neesi nokārtojis eksāmenu.";
        break;
        case "2":
            balle = input;
            rezultats = "Ļoti vāji. Tu neesi nokārtojis eksāmenu.";
        break;
        case "1":
            balle = input;
            rezultats = "Ļoti ļoti vāji. Tu neesi nokārtojis eksāmenu.";
        break;
        default:
            balle = input;
            // if(balle == ""){
            //     balle = "atstāts tukšs lauks";
            // }
            rezultats = "Nav pareizi ievadīta balle";    
    }
    document.write(`Balle: ${balle}<br>${rezultats}`)
};
zinasanuVertesana();
