import React, { Component } from 'react';

export const Context= React.createContext();

export class CartProvider extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            cartItems: []
        }
        this.addToCart= this.addToCart.bind(this);
    }
    addToCart(product){
        console.log('add product: '+ product);
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        })
    }
    render(){
        return <Context.Provider 
        value={{
            cartItems: this.state.cartItems,
            addToCart: this.addToCart
        }}>
            {this.props.children}
        </Context.Provider>
    }
}

