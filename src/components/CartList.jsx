import { Link } from "react-router-dom";
import { useCart } from "./CartProvider";

const CartList = () => {
    const {cart, deleteProduct, emptyCart, totalCart} = useCart();

    return (
        <div className="container">
            <div className="row cart-align">
                <div className="col"></div>
                <div className="col">Product</div>
                <div className="col">Quantity</div>
                <div className="col">Unit. price</div>
                <div className="col">Delete from cart</div>
            </div>
            {cart.map((item, index) => {
                return (
                    <div className="row item-align" key={index}>
                        <div className="col">
                            <img className="cart-img" src={item.img} alt="" />
                        </div>
                        <div className="col">
                            {item.title}
                        </div>
                        <div className="col">
                            {item.qty}
                        </div>
                        <div className="col">
                            {item.price}
                        </div>
                        <div className="col">
                            <button onClick={() => deleteProduct(item.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}

            <div className="row item-align">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                    Total price of cart is: USD {totalCart}
                </div>
                <div className="col cart-button">
                    <Link to='/checkout'>Proceed to checkout</Link>
                    {/* <button as={Link} to='/checkout'>Proceed to checkout</button> */}
                    <button onClick={emptyCart}>Empty cart</button>
                </div>
            </div>
        </div>
    )
}

export default CartList