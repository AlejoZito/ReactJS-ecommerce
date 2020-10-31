import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const tileData = [
    {
        id: 1,
        img: 'img/watch_01.png',
        title: 'Casio',
        price: '5050',
    },
    {
        id: 2,
        img: 'img/watch_02.jpg',
        title: 'Casio',
        price: '3500',
    },
    {
        id: 3,
        img: 'img/watch_03.jpg',
        title: 'Casio',
        price: '4500',
    },
    {
        id: 4,
        img: 'img/watch_04.jpg',
        title: 'Casio',
        price: '9000',
    },
]

//Fetch data promise
const getItems = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res(tileData), 2000);
    });
}

function ItemListContainer({ title, onAdd }) {

    const [itemList, setItemList] = useState([])

    useEffect(() => {
        getItems().then(result => {
            console.log("Recibo valores de promise")
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