import React from 'react';

import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core';

import useStyles from './styles'

const CartItem = ({item}) => {

    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={ item.media.source } alt={ item.name } className={ classes.media } />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={ classes.buttons }>
                    <button type="button" size="small">-</button>
                    <Typography>{item.quantity}</Typography>
                    <button type="button" size="small">+</button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
