import { useCart } from './CartProvider';
import { useState } from "react";
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    if (!item) {
        return <div>Loading...</div>; // o algún otro tipo de indicador de carga
    }
    
    const [confirmed, setConfirmed] = useState(false);
    const [qty, setQty] = useState(0);
    const {addProduct} = useCart();

    const onAdd = (p) => {
        setQty(p)
        setConfirmed(true)
    }

    const handleClick = () => {
        addProduct(item, qty)
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className='product-img' src={item.img} alt="" />
                </div>
                <div className="product-info col-md-6">
                    <h1>{item.brmod}</h1>
                    <p className='product-description'>{item.desc}</p>
                    <div className="product-keys">
                        <span className='price'>USD{item.price}</span>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                        {confirmed && <button className='product-button' onClick={handleClick}>Add to cart</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail