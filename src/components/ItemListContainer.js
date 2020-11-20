import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase'

function ItemListContainer({ title, onAdd }) {

    //Routing params
    let { categoryId } = useParams();

    const [itemList, setItemList] = useState([])

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection("items");
        const filteredCollection = categoryId ? itemCollection.where("category", "==", categoryId) : itemCollection;

        filteredCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('no results');
            }
            const filteredItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItemList(filteredItems);
        }, err => {
            console.log(err);
        })
    }, [categoryId]);

    return <ItemList title="Productos" itemDataList={itemList} onAdd={onAdd} />
}

export default ItemListContainer