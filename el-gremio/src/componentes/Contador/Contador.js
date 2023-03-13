import { useState } from "react"
import "./Contador.scss"


const Contador = ({initial, stock, onAdd})=> {

    const [contador, setContador] = useState (1)

    const handleSuma = ()=> {
        if(contador<stock){
            setContador (contador + 1)
        }
        
    }
    const handleResta = ()=> {
        if(contador>initial){
            setContador (contador - 1)
        }
        
    }

    return(
        <div className="carrito-controller">
            <div className="caja-contador" id="cont">
                <button onClick={handleResta} className="btn-resta">-</button>
                <span className="show-counter">{contador}</span>
                <button onClick={handleSuma} className="btn-suma">+</button>
            </div>
            <div>
                <button className="add-bolsa"> A la bolsa!</button>
            </div>
            
        </div>
    )

}

export default Contador; 