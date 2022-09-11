/*array de productos*/
let mangas = [
    {manga: "Bleach", valor: 750, paginas:420},
    {manga: "Demon Slayer", valor: 750, paginas:420},
    {manga: "Evangelion", valor: 750, paginas:420},
    {manga: "Gantz", valor: 1350, paginas:600},
    {manga: "My Hero Academia", valor: 750, paginas:420},
    {manga: "Naruto", valor: 750, paginas:420},
    {manga: "Promise Neverland", valor: 750, paginas:420},
    {manga: "Akame Ga Kill", valor: 950, paginas:520},
    {manga: "Attack on Titan", valor: 1350, paginas:600},
    {manga: "Dragon Ball Super", valor: 1350, paginas:600},
    {manga: "Haiikyu", valor: 750, paginas:420},
    {manga: "Tokyo Revengers", valor: 1350, paginas:600},   
];

let CarroDeCompras = []

let seleccionar = prompt("Hi, queres leer mangas?")

while (seleccionar != "si" && seleccionar != "no") {
    alert("responde la pregunta")
    seleccionar = prompt("Hi, queres leer mangas?")
}

if(seleccionar == "si"){
    alert("nuestros mangas en stock son")
    let todoslosMangas = mangas.map((Tomo) => Tomo.manga + " " + Tomo.valor+ "$" + Tomo.paginas );
    alert(todoslosMangas.join(" - "))
} else if (seleccionar == "no"){
    alert("gracias por chusmear")
}

 while(seleccionar != "no"){
    let Tomo = prompt("Elegi tus tomos")
    let valor = 0

    if(Tomo == "Bleach" || Tomo == "Demon Slayer" || Tomo == "Evangelion" || Tomo == "Gantz" || Tomo == "My Hero Academia" || Tomo == "Naruto" || Tomo == "Promise Neverland" || Tomo == "Akame Ga Kill" || Tomo == "Attack on Titan" || Tomo == "Dragon Ball Super" || Tomo == "Haiikyu" || Tomo == "Tokyo Revengers"){
        switch(mangas){
            case "Bleach":
                valor = 750;
                paginas = 420;
                break;
            case "Demon Slayer":
                valor = 750;
                paginas = 420;
                break;
            case "Evangelion":
                valor = 750;
                paginas = 420;
                break;
            case "Gantz":
                valor = 1350;
                paginas = 600;
                break;
            case "My Hero Academia":
                valor = 750;
                paginas = 420;
                break;
            case "Naruto":
                valor = 750;
                paginas = 420;
                break;
            case "Promise Neverland":
                valor = 750;
                paginas = 420;
                break;
            case "Akame Ga Kill":
                valor = 950;
                paginas = 520;
                break;
            case "Attack on Titan":
                valor = 1350;
                paginas = 600;
                break;
            case "Dragon Ball Super":
                valor = 1350;
                paginas = 600;
                break;
            case "Haiikyu":
                valor = 750;
                paginas = 420;
                break;
            case "Tokyo Revengers":
                valor = 1350;
                paginas = 600;
                break;
            default:
                break;
        }
        let Tomo = parseInt(prompt("Cuantos Tomos llevas???"))
        CarroDeCompras.push({Tomo, valor})
            console.log(CarroDeCompras)
    } else{
        alert("No tenemos este Tomo")
    }

    seleccionar = prompt("Desea Continuar?")

    while(seleccionar === "no"){
        alert("Gracias por Confiar en nosotros")
        CarroDeCompras.forEach((Carrofinal) => {
            console.log(`Tomo: ${Carrofinal.Tomo}, tomos: ${Carrofinal.tomos}, Total a pagar ${Carrofinal.tomos * Carrofinal.valor}`);
        })
    }
 }