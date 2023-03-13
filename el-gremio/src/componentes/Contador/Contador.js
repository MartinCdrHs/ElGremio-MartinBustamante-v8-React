import { useState } from "react"
import "./Contador.scss"


const Contador = ()=> {

    const [contador, setContador] = useState (1)

    const handleSuma = ()=> {
        setContador (contador + 1)
    }
    const handleResta = ()=> {
        if(contador>1){
            setContador (contador - 1)
        }
        
    }

    return(
        <div className="caja-contador" id="cont">
            <button onClick={handleResta} className="btn-resta">-</button>
            <span className="show-counter">{contador}</span>
            <button onClick={handleSuma} className="btn-suma">+</button>
            
        </div>
    )

}

export default Contador; 