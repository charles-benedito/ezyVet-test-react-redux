import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../actions/cartActions';

class Cart extends Component {
  render() {
    
    if(!this.props.cart.length) {

      return <h2>My Cart</h2>;

    } else {

      const items = this.props.cart.map(item => (
          <li key={item.id}>
            {item.name} / Unit Price ${item.price} / Quantity {item.quantity} / Total ${item.total}<br />
            <button onClick={() => this.props.increaseQuantity(item)}> Increase Quantity</button>&nbsp;
            <button onClick={() => this.props.decreaseQuantity(item)}> Decrease Quantity</button>&nbsp;
            <button onClick={() => this.props.removeFromCart(item)}> Remove Product</button>
            <br /><br />
          </li>
      ));

      const total = this.props.cart.reduce((total, item)=> {
        return total + item.total;
      }, 0);

      const quantity = this.props.cart.reduce((total, item)=> {
          return total + item.quantity;
      }, 0);

      return (
        <div>
          <h2>My Cart</h2>
          <ul>{items}</ul>
          <b>Total: ${total}</b> <small>({quantity} products)</small><br />
          <button onClick={() => this.props.clearCart()}> Clear Cart</button>
        </div>
      );
    }

  }
}

const mapStateToProps = state => ({ 
  cart: state.cart 
});

const mapDispatchToProps = dispatch => ({ 
  removeFromCart: item => dispatch(removeFromCart(item)), 
  increaseQuantity: item => dispatch(increaseQuantity(item)), 
  decreaseQuantity: item => dispatch(decreaseQuantity(item)), 
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
