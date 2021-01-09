import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography, Menu } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {

    const classes = useStyles();
    
    return (
        <>
            <AppBar position="fixed" className={ classes.appBar } color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Shopflix" height="25px" className={ classes.image } />
                        SHOPFLIX
                    </Typography>
                    <div className={ classes.grow }></div>
                    <IconButton aria-label="show cart items" color="inherit">
                        <Badge badgeContent={ totalItems } color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Toolbar>
            
            </AppBar>  
        </>
    )
}

export default Navbar
