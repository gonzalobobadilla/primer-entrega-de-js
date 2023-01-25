//llamado de funciones
inicio()
mostrarCatalogo()
elejirColor()

// funciones
//funcion de inicio
function inicio(){
    let bienvenida=prompt(`bienvenido a la paguina de tecnoShop.
    1. ingresar secion.
    2. registrarse.
    3. salir`)
    switch (bienvenida){
        case "1":
            inicioSecion()
            break
        case "2":
        crearUsuario()
            break
        case "3":
            console.log("usted salio de tecno shop")      
        }
}
// funcion de inicio de secion
function inicioSecion(){
    let usuarioIngresado= prompt("coloque su nombre de usuario")
    let contraseñaUsuario= prompt("coloque su contraseña")
    console.log(`su nombre de usuario es ${usuarioIngresado}, y su contraseña es ${contraseñaUsuario}`)
    const usuario1=[usuarioIngresado,contraseñaUsuario]
    console.log (usuario1)
    return usuario1
    }

// funcion de  registrarse
function crearUsuario(){
    let crearUsuario= prompt("indique el nombre de usuario que desea tener")
    let contraseñaVerificada = false
    while(!contraseñaVerificada){
        let crearContraseña= prompt("indique la contraseña")
        let verisificacionContraseña= prompt("verifique su contraseña")
        if (crearContraseña === verisificacionContraseña){
        console.log(alert("gracias por registrarse en tecnoShop"))
        contraseñaVerificada=true
        }
        else{
        console.log(alert("su contraseña no coincide"))
        }
        }      
    }

//funcion de mostrar catalogo
function mostrarCatalogo(){
    let catalogo = prompt(`¿que mate desea adquirir?, los que tenemos disponibles son:
    1. mate pampa.
    2. mate pampa boca chica
    3. mate pampa xl
    4. mate pampa xl AFA`)
    switch(catalogo){
        case "1":
            console.log(`usted elijio un mate pampa`)
            return ("mate pampa")
        break
        case "2":
            console.log(`usted elijio un mate pampa boca chica`)
        break
        case "3":
            console.log(`usted elijio un mate pampa xl`)
        break            
        case "4":
            console.log(`usted elijio un mate pampa xl AFA`)
        break
    }
}

//funcion de elejir el color
function elejirColor(){
    let color = prompt(`¿de que color desea su mate?. indique el numero:
    1. negro.
    2. rojo.
    3. azul.
    4. lila.
    5. verde oliva.
    6. borgoña.`)
    switch(color){
        case "1":
            console.log(`usted elijio un mate pampa de color negro`)
        break
        case "2":
            console.log(`usted elijio un mate pampa de color rojo`)
        break
        case "3":
            console.log(`usted elijio un mate pampa de color azul`)
        break            
        case "4":
            console.log(`usted elijio un mate pampa de color lila`)
        break
        case "5":
            console.log(`usted elijio un mate pampa de color verde oliva`)
        break            
        case "6":
            console.log(`usted elijio un mate pampa de color borgoña`)
        break
    }
}


//objetos

const mateChico = {
    color: "negro",
    precio :"$3500",
    tipo :"boca chica",
}

const mateComun = {
    color: "negro",
    precio:"$3600",
    tipo:"boca grande",
}

const mateXl = {
    color : "negro",
    precio :"$7000",
    tipo :"mate xl",
}

const mateAfa = {
    color: "negro",
    precio:"$3500",
    tipo:"mate xl afa",
}
//funcion constructora
function mate(color,precio,tipo){
    this.color=color
    this.precio=precio
    this.tipo=tipo
}
//vaariables para crear mate personalizado
let colorElejido=prompt("que color de mate desea?")
let precioElejido=prompt("que precio elijio?")
let TipoElejido=prompt("que mate elijio?")

//uso una funcion constructora para crear un mate

const mateElejido= new mate (colorElejido,precioElejido,TipoElejido)
console.log(mateElejido)


// array
const catalogo = [mateComun,mateAfa,mateChico,mateXl]
console.log (catalogo)
//agrego mi mate elejido por un usuario a mi catalogo
catalogo.push(mateElejido)











