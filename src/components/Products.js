import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class Products extends Component {
  render() {
    const items = this.props.products.map(item => (
        <li key={item.id}> 
          {item.name}  ${item.price}<br />
          <button onClick={() => this.props.addToCart(item)}>Add Product</button> 
          <br /><br />
        </li>
    ));

    return (
      <div>
        <h2>Products</h2>
         <ul>{items}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  products: state.products 
});

const mapDispatchToProps = dispatch => ({ 
  addToCart: item => dispatch(addToCart(item)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

