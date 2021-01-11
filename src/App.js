import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar, Products, Cart, Checkout } from './components'
import {commerce} from './lib/commerce'


const App = () => {

    const [ products, setProducts ] = useState( [] );
    const [ cart, setCart ] = useState( {} );
    const [order, setOrder] = useState({});
    const [ errorMessage, setErrorMessage ] = useState( "" );
    const [mobileOpen, setMobileOpen] = React.useState(false);


    // Fetch Products from Commerce.js API
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        
        setProducts( data );
    }

    // Fetch Carts from Commerce.js API
    const fetchCart = async () => {

        setCart(await commerce.cart.retrieve() );
    }

    // Add Items to cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add( productId, quantity );

        setCart( item.cart );
    }

    // Update Quantity of Items in Cart
    const handleUpdateCartQty = async (productId, quantity) => {
        const response = await commerce.cart.update( productId, { quantity } );
 
        setCart(response.cart)
    }

    // Remove a product from the cart
    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove( productId );

        setCart( response.cart );
    }

    // Empty the Cart
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart( response.cart );
    }

    const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();

      setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(
          checkoutTokenId,
          newOrder
        );

        setOrder(incomingOrder);

        refreshCart();
      } catch (error) {
        setErrorMessage(error.data.error.message);
      }
    };

    // Call Functions on App Render
    useEffect( () => {
        fetchProducts();
        fetchCart();
    }, [] );

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
      <Router>
        <div>
          <Navbar
            totalItems={cart.total_items}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Switch>
            <Route exact path='/'>
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path='/cart'>
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route exact path='/checkout'>
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
