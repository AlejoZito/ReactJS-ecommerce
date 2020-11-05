import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import data from '../mockData/itemData.json'

//Fetch data promise
const getItems = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res(data), 0);
    });
}

function ItemListContainer({ title, onAdd }) {

    const [itemList, setItemList] = useState([])

    useEffect(() => {
        getItems().then(result => {
            setItemList(result);
        }, err => {
            console.log(err);
        })
    },[]);

    return (
        <ItemList title="Productos" itemDataList={itemList} onAdd={onAdd} />
    );
}

export default ItemListContainer