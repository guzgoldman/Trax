import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import CartList from "./CartList";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart} = useCart();
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    useEffect(() => {
        cart.length === 0 ? setIsCartEmpty(true) : setIsCartEmpty(false)
    }, [cart])

    return (
        <>
            {isCartEmpty ? <div className="container cart-empty">Tu carrito está vacío <Link to='/'>Ir al inicio</Link> </div> : <CartList/>}
        </>
    )
}

export default Cart