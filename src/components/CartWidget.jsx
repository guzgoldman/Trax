import React from "react";
import { useCart } from "./CartProvider";

const CartWidget = () => {
    const { totalProduct } = useCart();
    return (
        <div className="cart-widget">
            <i class="fa-solid fa-cart-shopping cart"></i>
            <div className="cart-count">
                {totalProduct()}
            </div>
        </div>
    )
}

export default CartWidget