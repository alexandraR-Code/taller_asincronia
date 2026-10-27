function consultarClima(ciudad){
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if(!ciudad || ciudad.trim() === " "){
                reject(`Error: Debes ingresar una cuidad`);
                return 
            }else{
                const clima = {
                    ciudad: ciudad,
                    temperatura: "24 C",
                    condicion: "Soleado"
                }
                resolve(clima)

            }
 
        }, 1500);
    });
}

async function mostarClima(ciudad){
    try {
        const clima = await consultarClima(ciudad);
        console.log("***CONSULTA DE CLIMA***");
        console.log("Ciudad: " + clima.ciudad);
        console.log("Temperatura: " + clima.temperatura);
        console.log("Condicion: " + clima.condicion);
    } catch (error) {
        console.log(error);
    }
}
mostarClima("Quito");
mostarClima("");