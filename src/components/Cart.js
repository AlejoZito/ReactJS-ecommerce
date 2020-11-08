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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const fetchDetailData = function (id) {
    return new Promise((res, rej) => {
        res(data.find((item) => item.id == id));
    });
}

export default function Cart({ itemList }) {
    const [fetchedItemList, setFetchedItemList] = useState([]);
    const classes = useStyles();

    useEffect(() => {

        //ToDo falta mostrar cantidades

        const newList = [];
        const fetchPromiseList = [];

        for (let item in itemList) {
            //Only fetch new items
            const foundItem = fetchedItemList.find(i => i.id == item);
            if (foundItem) {
                newList.push(foundItem);
            } else {
                const fetchPromise = fetchDetailData(item);
                fetchPromiseList.push(fetchPromise);
            }
        }

        Promise.allSettled(fetchPromiseList).then(
            (results) => {
                console.log(results)
                results.forEach((result) => {
                    console.log(result);
                    newList.push(result.value);
                    ;
                });
            }
        ).finally(() => setFetchedItemList(newList))

    }, [itemList]);

    return (
        <List className={classes.root}>
            {fetchedItemList.map((item) => {
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
                        <ListItemSecondaryAction>
                            {/* <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                checked={checked.indexOf(value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            /> */}
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}
