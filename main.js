class Usuarios {
    constructor(nombre, montoAdeu) {
        this.nombre = nombre,
        this.montoAdeudado = montoAdeu
    }
}

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    
    let deuda = document.getElementById("deuda").value
    let cantUsers = document.getElementById("cantUser").value

    let almacenamiento = [];

    for (let i = 0; i < cantUsers; i++) {
        
        let user = new Usuarios(
            this.nombre = prompt("ingreser nombre del participante."),
            this.montoAdeudado = deuda / cantUsers
            );
            almacenamiento.push(user)
        };
    
    console.table(almacenamiento);

    dibujarPantalla()
});

function dibujarPantalla(){
    //TODO: Tenemos que pintar tarjetas aca con los nombres de los pibitos.
    console.log("nos ejecutamo perro primo")
    
    let print = document.getElementById("print")

    print.innerHTML = `
    <div>
        <h3>Tenemos que poder pintar aca a las personas en tarjetitas!
    </div>
    `
    
};
