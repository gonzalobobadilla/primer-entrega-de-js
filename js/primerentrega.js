cuentaCliente()
credito ()
registrarse ()

function cuentaCliente(){
    let nombre=prompt("ingrese su nombre y apellido")
    console.log(`su nombre es ${nombre}`)

    let salarioAnual= parseInt(prompt("ingrese su salario anual"))
    console.log (`su salario anual es "${salarioAnual}`)

    let edad= parseInt(prompt("ingrese su edad"))
    console.log (`su edad es  ${edad}`)

    if (edad >=18 && salarioAnual>= 1500000 ){
        console.log (alert("usted si es apto para obtener un credito en este banco"))
    }
    else if(edad>= 18  && salarioAnual< 1500000){
        console.log(alert("usted no tiene el ingreso suficiente para obtener un credito en este banco"))
    }
    else if (edad<18 && salarioAnual>= 1500000){
        console.log(alert("usted no tiene la edad suficiente para obtener un credito en este banco"))
    }
    else{
        console.log(alert("no cumple los requisitos para obtener un credito"))
    }
    }

function credito(){
    let salarioMensual= prompt("¿cual es su salario mensual")
    if(salarioMensual>=200000){
        console.log(alert("el credito maximo que puede obtener es de 60 mil pesos"))
    }
    else if (salarioMensual>=150000){
        console.log(alert("el credito maximo que puede obtener es de 40 mil pesos"))
    }
    else if (salarioMensual>=125000){
        console.log(alert("el credito maximo que puede obtener es de 30 mil pesos"))
    }
    else {
        console.log(alert("el credito maximo que puede obtener es de 20 mil pesos"))
    }
}

function registrarse(){
    let usuario= prompt("coloque su nombre de usuario")
    console.log (usuario)
    let mail=prompt("coloque su mail")
    console.log(mail)
    let contraseña=prompt("coloque su contraseña")
    console.log(contraseña)

}
