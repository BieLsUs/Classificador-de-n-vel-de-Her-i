//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

let nomeDoHeroi = "SUPERBIEL"
let nivelDoHeroi = 0.001

while (nivelDoHeroi < 10) {
    nivelDoHeroi++

if (nivelDoHeroi < 1.000) {
    let patente = "Ferro"
    console.log( "O Herói do nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi.toFixed(3) + " e está na patente " + patente );
}
else if (nivelDoHeroi >= 1.001 && nivelDoHeroi <= 2.000) {
    let patente = "Bronze"
    console.log( "O Herói do nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi.toFixed(3) + " e está na patente " + patente );
}
else if (nivelDoHeroi >= 2.001 && nivelDoHeroi <= 5.000) {
    let patente = "Prata"
    console.log( "O Herói do nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi.toFixed(3) + " e está na patente " + patente );
}
else if (nivelDoHeroi >= 5.001 && nivelDoHeroi <= 7.000) {
    let patente = "Ouro"
    console.log( "O Herói do nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi.toFixed(3) + " e está na patente " + patente );
}
else if (nivelDoHeroi >= 7.001 && nivelDoHeroi <= 8.000) {
    let patente = "Platina"
    console.log( "O Herói do nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi.toFixed(3) + " e está na patente " + patente );
}
else if (nivelDoHeroi >= 8.001 && nivelDoHeroi <= 9.000) {
    let patente = "Ascendente"
    console.log( "O Herói do nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi.toFixed(3) + " e está na patente " + patente );
}
else if (nivelDoHeroi >= 9.001 && nivelDoHeroi <= 10.000) {
    let patente = "Imortal"
    console.log( "O Herói do nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi.toFixed(3) + " e está na patente " + patente );
}
else {
    let patente = "Radiante"
    console.log( "O Herói do nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi.toFixed(3) + " e está na patente " + patente );
}

}