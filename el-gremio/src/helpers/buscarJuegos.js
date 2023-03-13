import MOCK_DATA from "../Data/MOCK_DATA.json";

export const buscarJuegos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            resolve (MOCK_DATA)
        }, 3000)
    })
}

export const buscarDetalles = (id) => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve (MOCK_DATA.find( juego => juego.id === id))
        }, 2000)
    })
}


