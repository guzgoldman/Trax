import { useState, useContext } from "react";
import { useCart } from './CartProvider'; // Asegúrate de importar correctamente tu contexto

const ItemCount = ({ item, stock }) => {
    const [counter, setCounter] = useState(0);
    const { cart, addProduct } = useCart(); // Accede a addProduct desde el contexto

    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const handleSubtract = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    const handleAddToCart = () => {
        if (counter > 0 && stock > 0) {
            addProduct(item, counter);
            setCounter(0); // reset counter after adding to cart
        }
    }

    return (
        <div className="item-count">
            <div className="stock-button">
                <button className="count-button" disabled={counter === 0} onClick={handleSubtract}>-</button>
                <p>{counter}</p>
                <button className="count-button" disabled={counter === stock} onClick={handleAdd}>+</button>
            </div>
            <div className="add-to-cart">
                <button disabled={counter < 1 || stock < 1} onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
