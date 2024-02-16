import { createContext, useContext, useState, useEffect } from "react";

const context = createContext();
const Provider = context.Provider;

export const useCart = () => {
    const contextValue = useContext(context);
    return contextValue;
}

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Estado del carrito:", cart);
    }, [cart]);

    const addProduct = (item, qty) => {
        const existingProduct = cart.find((x) => x.title === item.title);
    
        if (existingProduct) {
            setCart(
                cart.map((x) =>
                    x.title === item.title ? { ...x, qty: x.qty + qty } : x
                )
            );
        } else {
            setCart([...cart, { ...item, qty: qty }]);
        }
    };
    
    
    const deleteProduct = async (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId);
        setCart(newCart)
    };

    const emptyCart = () => {
        setCart([]);
        totalProduct(0);
    };

    const totalCart = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

    const isInCart = (id) => {
        cart.find((x) => x.id === id)
    }

    const totalProduct = (item) => {
        let total = 0;
        cart.forEach(item => {
            total = total + item.qty
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