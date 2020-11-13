import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from  '../store/actions/cartActions';
import { CartActions, DefaultSpan } from '../styles/styles';
import { TiShoppingCart } from 'react-icons/ti';
import { withRouter } from 'react-router-dom';

class AddToCart extends Component {
    handleClick = () => {
        let newItem = {
            ...this.props.item,
            addToCart: this.props.item.addToCart ? this.props.item.addToCart : 1
        }        
        this.props.addToCart(newItem);
        this.props.history.push('/cart');
    }

    render() {
        return (
            <CartActions onClick={this.handleClick}><DefaultSpan>COMPRAR</DefaultSpan><TiShoppingCart/></CartActions>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => { dispatch(addToCart(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddToCart));