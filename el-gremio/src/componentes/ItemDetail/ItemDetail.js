import "./ItemDetail.scss" 
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    return (
        <div className="caja-detalle">
            <h2 className="nombre-detalle">{item.nombre}</h2>
            <img src={item.imagen} alt={item.nombre} className="img-detalle"/>
            <p className="desc-detalle">{item.descripcion}</p>
            <p className="precio-detalle">Precio: ${item.precio}</p>

            <Link><button className="boton-detalle">Volver</button></Link>
                
        </div>
    )
}

export default ItemDetail;