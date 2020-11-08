import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge'

function CartWidget({itemCount}) {
    return (
        <Link variant="button" href="#">
            <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon color="primary" />
            </Badge>
        </Link>
    )
}

export default CartWidget