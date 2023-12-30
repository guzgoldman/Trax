import { createContext, useContext, useState } from "react";

const context = createContext();
const Provider = context.Provider;

export const useCart = () => {
    const contextValue = useContext(context);
    return contextValue;
}

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (product, qty) => {
        if(isInCart(product.id)) {
            setCart(
                cart.map((x) => {
                    return x.id === product.id ? {...x, qty: x.qty + qty} : x
                })
            )
        } else {
            setCart([...cart, {...product, qty: qty}])
        }
    };

    const deleteProduct = (product) => {
        const newCart = cart.filter((e) => e.product !== product.product);
        setCart(newCart);
        return newCart;
    };

    const emptyCart = () => {
        setCart([]);
        totalProduct(0);
    }

    const totalCart = cart.reduce((sum, product) => sum + product.price * product.qty, 0).toFixed(2);

    const isInCart = (id) => {
        cart.find((x) => x.id === id)
    }

    const totalProduct = (product) => {
        let total = 0;
        cart.forEach(product => {
            total = total + product.qty
        });
        return total;
    }

    const contextValue = {
        cart: cart,
        setCart: setCart,
        totalProduct: totalProduct,
        addProduct: addProduct,
        emptyCart: emptyCart,
        isInCart: isInCart,
        deleteProduct: deleteProduct,
        totalCart: totalCart
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider