import "./ItemDetail.scss" 
import { Link } from "react-router-dom";
import{useNavigate} from "react-router-dom"
import Contador from "../Contador/Contador";


const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handleVolver = ()=> {
        navigate(-1)
    }

    const onAdd = (quantity) =>{
        console.log(quantity)
    }

    

    return (
        <div className="caja-detalle">
            <p className="nombre-detalle" id="nombre">{item.nombre}</p>
            <img src={item.imagen} alt={item.nombre} className="img-detalle" id="img"/>
            <p className="desc-detalle" id="desc">{item.descripcion}</p>
            <p className="precio-detalle" id="precio">Precio: ${item.precio}</p>

            <Link><button onClick={handleVolver} className="boton-detalle" id="volver">Volver</button></Link>
            
            <Contador initial={1} stock={item.stock} onAdd={onAdd} />
                
        </div>
    )
}

export default ItemDetail;