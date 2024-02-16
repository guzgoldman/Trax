import { useEffect } from 'react'
import { useCart } from './CartProvider'


const Completed = ({formData}) => {

    const {cart,emptyCart,totalCart} = useCart() 

    useEffect(() => {
        return() => {emptyCart()}
    })

    return(  
        <div className="container">
            <div className="row completed-align">
                <h2>Your purchase has been successfully completed</h2>
                <h3>We have sent you an email with your purchase information.</h3>
            </div>
            <div className="row completed-align">
                <h3>Customer data:</h3>
                <div>Name: {formData.name}</div>
                <div>Last name: {formData.lastname}</div>
                <div>Phone number: {formData.phone}</div>
                <div>Email: {formData.email}</div>
            </div>
            <div className="row item-align">
                <div className="col"></div>
                <div className="col">Quantity</div>
                <div className="col">Price</div>
            </div>
            {cart.map((item) => {
                return (
                    <div className="row cart-align" key={item.id}>
                        <div className="col">{item.name}</div>
                        <div className="col">{item.qty}</div>
                        <div className="col">USD {item.price} per unit</div>
                    </div>
                )
            })}
            <div className="row cart-align">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">Total: USD {totalCart}</div>
            </div>
        </div>
    )
}

export default Completed