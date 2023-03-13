import "./ItemDetail.scss" 
import { Link } from "react-router-dom";
import{useNavigate} from "react-router-dom"


const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handleVolver = ()=> {
        navigate(-1)
    }

    return (
        <div className="caja-detalle">
            <p className="nombre-detalle" id="nombre">{item.nombre}</p>
            <img src={item.imagen} alt={item.nombre} className="img-detalle" id="img"/>
            <p className="desc-detalle" id="desc">{item.descripcion}</p>
            <p className="precio-detalle" id="precio">Precio: ${item.precio}</p>

            <Link><button onClick={handleVolver} className="boton-detalle" id="volver">Volver</button></Link>
            
                
        </div>
    )
}

export default ItemDetail;