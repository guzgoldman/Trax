import { useState } from 'react'
import { useCart } from './CartProvider'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
    if (!item) {
        return (
            <div className="cart-empty">
                <div class="spinner-border text-secondary" style={{width:'6rem', height:'6rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    };

    const [confirmed, setConfirmed] = useState(false)
    const [qty, setQty] = useState(0)
    const {addProduct} = useCart()

    const onAdd = (param) => {
        setQty(param)
        setConfirmed(true)
    }

    const handleClick = () => {
        addProduct(item, qty)
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.img} alt="" className="product-img" />
                </div>
                <div className="product-info col-md-6">
                    <h1>{item.name}</h1>
                    <p className="product-description">{item.desc}</p>
                    <div className="product-keys">
                        <span className="price">USD {item.price}</span>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                        {confirmed && <button className="product-button" onClick={handleClick}>Add to cart</button> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail