import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge'
import { useCartContext } from '../context/cartContext';

function CartWidget() {

    const {totalItemCount} = useCartContext();

    return (
        <Link variant="button" href="#">
            <Badge badgeContent={totalItemCount} color="secondary">
                <ShoppingCartIcon color="primary" />
            </Badge>
        </Link>
    )
}

export default CartWidget