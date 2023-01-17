//Compra de motocicletas 

let marca1 = "Honda"
let marca2 = "Yamaha"
let marca3 = "Suzuki"
let okay = false
let okay2 = false
let pideMarca



function Cotizador() {
    do {
        pideMarca = prompt("Bienvenidos para comprar una moto, por favor  ingrese una de las tres marcas de motos que hay a continuación: Honda, Yamaha o Suzuki") 
        let pideAnio      
        console.log(pideMarca)
        switch(pideMarca){
            case marca1:
                resuelveAnio(pideAnio) 
                okay = false 
                break;   
            case marca2:
                resuelveAnio(pideAnio)
                okay = false
                break;
            case marca3:
                resuelveAnio(pideAnio) 
                okay = false
                break;
            default:
                    alert("Por favor, ingrese una marca válida de las descritas anteriormente")
                    okay = true
                    console.log(okay)
              break;
            } 
      
    }while (okay == true)

}


function resuelveAnio(pideAnio) {
    do {
        pideAnio = prompt("Ingrese año de la moto (Entre 1900 a 2022)")
        if (pideAnio != "") {
            console.log(pideAnio)
            if (pideAnio >= 1900 && pideAnio <= 2009) {
                alert("El precio es de $50000")
                okay2 = false
            }
            else {
                if(pideAnio >= 2010 && pideAnio <= 2019) {
                    alert("El precio es de $100000")
                    okay2 = false
                }
                else {
                    if(pideAnio >= 2020 && pideAnio <= 2022){
                        alert("El precio es de $150000")
                        okay2 = false
                    }
                    else {
                        if(pideAnio < 2000 || pideAnio > 2022){
                        alert("Se introdujo un año inválido, intente nuevamente")
                        okay2 = true
                        }
                    }
                }
            }
        }

    } while (okay2 == true)
}



Cotizador()
