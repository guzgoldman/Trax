import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(0);
    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const handleSubtract = () => {
        setCounter (counter - 1)
    }

    const handleConfirm = () => {
        onAdd(counter)
    }

    return (
        <div className="item-count">
            <div className="stock-button">
                <button disabled={counter === 0} onClick={handleSubtract}>-</button>
                <p>{counter}</p>
                <button disabled={counter === stock} onClick={handleAdd}>+</button>
            </div>
            <div className="add-to-cart">
                <button disabled={counter < 1 || stock < 1} onClick={handleConfirm}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount