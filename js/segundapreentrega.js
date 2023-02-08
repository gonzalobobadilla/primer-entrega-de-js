//llamado de funciones
menu()

// funciones
//funciones de menu
function menu(){
    let menu = prompt(`Bienvenidos a la tienda de mates mas grande de neuque, que desea realizar:
    1. iniciar seccion / registrarse
    2. observar catalogo
    3. elejir mate
    4. personalizar mate
    5. visualizar carrito
    6. eliminar carrito
    7.salir`)
    switch (menu){
        case "1":
            inicio()
            break
        case "2":
            console.log("error")
            break
        case "3":
            elejirMate()    
        case "4":
            console.log("error")
            break
        case "5":
            console.log("error")
        break
        case "6":
            console.log("error")
        case "7":
            console.log("usted salio de registrarse") 
        break
        }
}


//   1)   FUNCIONES DE INICIO

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
            console.log("usted salio de registrarse")      
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

//    2. observar catalogo






    //   3)  FUNCIONES ELEJIR MATE


function elejirMate(){
    let catalogo = prompt(`¿que mate desea adquirir?, los que tenemos disponibles son:
    1. mate pampa boca chica.
    2. mate pampa comun.
    3. mate pampa xl
    4. mate pampa xl AFA`)
    switch(catalogo){
        case "1":
        mateChico()
        break
        case "2":
            mateComun()
        break
        case "3":
            mateXl()
        break            
        case "4":
            mateAfa()
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
    if(color == "1"){
        let colorElejido = "negro"
        return colorElejido
    } else if(color =="2"){
        let colorElejido = "rojo"
        return colorElejido
    }else if(color == "3"){ 
        let colorElejido = "azul"
        return colorElejido
    }else if(color == "4"){
        let colorElejido = "lila"
        return colorElejido
    }else if (color == "5"){
        let colorElejido = "verde oliva"
        return colorElejido
    }else if(color == "6"){
        let colorElejido= "borgoña"
        return colorElejido
    }else{
        console.log (alert(`${color} no es un color valido`))
    }
    return colorElejido
}

function mateChico(){
    const mateChico = {
    color: elejirColor(),
    precio :"$3500",
    tipo :"boca chica",
        }   
        return (alert(`el mate que usted elijio es el mate pampa ${mateChico.tipo}, que tiene un precio de ${mateChico.precio} y es de color ${mateChico.color}`)) }

function mateComun(){
    const mateComun = {
    color : elejirColor(),
    precio:"$3600",
    tipo:"boca grande",
    }
    return (alert(`el mate que usted elijio es el mate pampa ${mateComun.tipo}, que tiene un precio de ${mateComun.precio} y es de colo{mateComun.color}`))
}
function mateXl(){
    const mateXl = {
    color : elejirColor(),
    precio :"$7000",
    tipo :"mate xl",
    }
    return (alert(`el mate que usted elijio es el mate pampa ${mateXl.tipo}, que tiene un precio de ${mateXl.precio} y es de color ${matecolor}`))
}
function mateAfa(){
    const mateAfa = {
        color: elejirColor(),
        precio:"$3500",
        tipo:"mate xl afa",
    }
    return (alert(`el mate que usted elijio es el mate pampa ${mateAfa.tipo}, que tiene un precio de ${mateAfa.precio} y es de color ${mateAfa.color}`))
}


//    4. personalizar mate





//    5. visualizar carrito


//    6. eliminar carrito


//     7) SALIR


// //funcion constructora
// function mate(color,precio,tipo){
//     this.color=color
//     this.precio=precio
//     this.tipo=tipo
// }
// //vaariables para crear mate personalizado
// let colorElejido=prompt("que color de mate desea?")
// let precioElejido=prompt("que precio elijio?")
// let TipoElejido=prompt("que mate elijio?")

// //uso una funcion constructora para crear un mate

// const mateElejido= new mate (colorElejido,precioElejido,TipoElejido)
// console.log(mateElejido)


// array
const catalogo = [mateComun,mateAfa,mateChico,mateXl]
console.log (catalogo)


function ingreso(){
    alert(`ingresaste correctamente a tecnoshop, BIENVENIDO!`)
}

let botonIngresar =  document.getElementById(`ingreso`)

botonIngresar.onclick = ingreso 

function NoDisponible(){
    alert(`No tenemos stock`)
}

let botonNoDisponible = document.getElementById(`NoDisponible`)

botonNoDisponible.onclick= NoDisponible

localStorage.setItem("ubicacion", "cipolletti")
localStorage.setItem("tipo","tienda virtual")

let localidad = localStorage.getItem("ubicacion")
let tipoTienda = localStorage.getItem("tipo")
console.log(`Tecno shop se encuentra en la localidad de ${localidad} y es una ${tipoTienda}`)



