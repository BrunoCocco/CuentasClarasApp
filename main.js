class Usuarios {
    constructor(nombre, montoAdeu) {
        this.nombre = nombre,
        this.monto = montoAdeu
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
            this.monto = deuda / cantUsers
            );
            almacenamiento.push(user)
        };
    
    console.log(almacenamiento)

});
