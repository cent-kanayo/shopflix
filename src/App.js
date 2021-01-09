import React, {useState, useEffect} from 'react'
import { Navbar, Products, Cart } from './components'
import {commerce} from './lib/commerce'

const App = () => {

    const [ products, setProducts ] = useState( [] );
    const [ cart, setCart ] = useState( {} );


    // Fetch Products from Commerce.js API
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        
        setProducts( data );
    }

    // Fetch Carts from Commerce.js API
    const fetchCart = async () => {

        setCart(await commerce.cart.retrieve() );
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add( productId, quantity );

        setCart( item.cart );
    }

    // Call Functions on App Render
    useEffect( () => {
        fetchProducts();
        fetchCart();
    }, [] );

    console.log(products);

    return (
      <div>
        <Navbar totalItems={cart.total_items} />
        {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
        <Cart cart={cart} />
      </div>
    );
}

export default App;
