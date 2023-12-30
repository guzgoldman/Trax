import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const MerchProvider = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getItems = async () => {
            try {
                const itemsCollection = collection(db, "merch");
                const itemsSnapshot = await getDocs(itemsCollection);
                const itemsList = itemsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(itemsList);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        getItems();
    }, []);

    if (loading) {
        return (
            <div className="cart-empty">
                <div class="spinner-border text-secondary" style={{width:'6rem', height:'6rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return <ItemList items={items} />;
};

export default MerchProvider;