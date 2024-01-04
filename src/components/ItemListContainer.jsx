import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { cat } = useParams();
    const [categoryExists, setCategoryExists] = useState(true)

    useEffect(() => {
        const itemsCollection = collection(db, "items")
        let filter
        
        if (cat) {
            filter = query(itemsCollection, where('cat', '==', cat))
        } else {
            filter = itemsCollection
        }

        const getItems = getDocs(filter)
        getItems
            .then((res) => {
                const items = res.docs.map(doc => ({ 
                    ...doc.data(), 
                    id: doc.id 
                }))
                if (!(items.length === 0)) {
                    setItems(items)
                    setLoading(false)
                    setCategoryExists(true)
                } else {
                    setCategoryExists(false)
                }
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [cat])

    if (loading) {
        return (
            <div className="cart-empty">
                <div class="spinner-border text-secondary" style={{width:'6rem', height:'6rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    };

    if (error) {
        return (
            <p>Error: {error.message}</p>
        )
    };

    return (
        <ItemList items={items}/>
    )
}


export default ItemListContainer