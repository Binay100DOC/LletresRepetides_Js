console.log("!!!!!!!!!!!!!!!!!Fase 1!!!!!!!!!!!!!!!!!");
var caracterNomArray = ["B", "i", "n", "a", "y"];
caracterNomArray.forEach(element => {
    console.log(element);
});

console.log("!!!!!!!!!!!!!!!!!Fase 2!!!!!!!!!!!!!!!!!");
var esVocalOConsonante = ["B", "i", "n", "a", "y", '9'];

for (var i = 0; i < esVocalOConsonante.length; i++) {
    if (esVocalOConsonante[i] == "a" || esVocalOConsonante[i] == "e" || esVocalOConsonante[i] == "i" || esVocalOConsonante[i] == "o" || esVocalOConsonante[i] == "u") {
        console.log(esVocalOConsonante[i] + " - Vocal");
    } else if (esVocalOConsonante[i] >= 'A' || 'Z' <= esVocalOConsonante[i]) {
        console.log(esVocalOConsonante[i] + " - Consonant");
    } else if (esVocalOConsonante[i] >= 'a' || 'z' <= esVocalOConsonante[i]) {
        console.log(esVocalOConsonante[i] + " - Consonant");
    } else if (esVocalOConsonante[i] >= '0' && '9' <= esVocalOConsonante[i]) {
        console.log(esVocalOConsonante[i] + " - El nom no pot contenir numeros.");
    } else {
        console.log(esVocalOConsonante[i] + " - ?????");
    }
}

console.log("!!!!!!!!!!!!!!!!!Fase 3!!!!!!!!!!!!!!!!!");


console.log("!!!!!!!!!!!!!!!!!Fase 4!!!!!!!!!!!!!!!!!");

var nomComplet = ["B", "i", "n", "a", "y", " ", "T", "i", "m", "i", "l", "s", "i", "n", "a",];
nomComplet.forEach(element => {
    console.log(element);
});


