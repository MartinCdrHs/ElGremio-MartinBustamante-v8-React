import "./CartWidget.scss"

const CartWidget = () => {
    
    return (
        <div className="cart-widget">
            <button type="button" id="boton"><img src="./bolsa.png" alt="bolsa" className="icon-bolsa"/></button>
            <span className="contador">0</span>
        </div>
    )
}

export default CartWidget;