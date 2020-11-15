import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import data from '../mockData/itemData.json'
import { useCartContext } from '../context/cartContext';
import { IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Cart() {
    const [fetchedItemList, setFetchedItemList] = useState([]);
    const classes = useStyles();

    const { itemsInCart, cartTotal, remove } = useCartContext();

    function onRemove(id) {
        remove(id);
    }

    return (
        <>
        {
            itemsInCart.length == 0 ?
                <>
                    <span>No tenés elementos en el carrito</span>
                    <Link to='/'><Button>Seguir comprando</Button></Link>
                </>
                :
                <>
                    <List className={classes.root}>
                        {itemsInCart.map((item) => {
                            console.log(item);
                            const labelId = `checkbox-list-secondary-label-${item.id}`;
                            return (
                                <ListItem key={item.id} button>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Avatar n°${item.id}`}
                                            src={item.img}
                                            variant={'rounded'}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={item.title} />
                                    <ListItemText primary={item.quantity} />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={() => { onRemove(item.id) }} edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                    </List>
                    <h3>Total: ${cartTotal}</h3>
                </>
        }
        </>
    );
}
