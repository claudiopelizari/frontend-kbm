import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavbarContainer, MyCart, ProductListButton } from '../styles/styles';
import logo from '../images/logo-kabum.png';
import { TiShoppingCart } from 'react-icons/ti';
 
class Navbar extends Component {
    render() {
        return (
            <NavbarContainer className="header">
                <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
                <ProductListButton className="menu">
                    <NavLink to="/">PRODUTOS</NavLink>
                </ProductListButton>
                <MyCart className="cart">
                    <NavLink to="/cart"><TiShoppingCart/><label>{this.props.items}</label></NavLink>
                </MyCart>
            </NavbarContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.length
    }
}

export default connect(mapStateToProps)(Navbar);