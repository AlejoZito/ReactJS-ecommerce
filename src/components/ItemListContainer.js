import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useLocation } from 'react-router-dom'
import { getFirestore } from '../firebase'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ItemListContainer({ title, onAdd }) {

    //Routing params
    console.log(useQuery());
    let category = useQuery().get('category');
    console.log(category)
    
    const [itemList, setItemList] = useState([])

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection("items");
        const filteredCollection = category ? itemCollection.where("category", "==", category) : itemCollection;

        filteredCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('no results');
            }
            setItemList(querySnapshot.docs.map(doc =>
                ({ id: doc.id, ...doc.data() }))
            );
        }, err => {
            console.log(err);
        })
    }, []);

    return (
        <ItemList title="Productos" itemDataList={itemList} onAdd={onAdd} />
    );
}

export default ItemListContainer