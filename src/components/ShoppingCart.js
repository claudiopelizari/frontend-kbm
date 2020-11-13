import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quantity from './Quantity';
import RemoveFromCart from './RemoveFromCart';
import UpdateCart from './UpdateCart';
import { ShoppingCartContainer, ShoppingCartDetail, ProductImageCart, Title, DefaultParagraph, DefaultCategory, ProductDetailsInfo, ShoppingCartDetailContainer, ProductActions, DefaultPrice, SubTotalContainer, SubTotalInfo, PageTitle } from '../styles/styles';
import BackToShopping from './BackToShopping';

class ShoppingCart extends Component {
    render() {
        const shoppingCart = this.props.shoppingCart.length ? (
            <ShoppingCartDetailContainer>                
                {
                    this.props.shoppingCart.map((item) => {
                        return (
                            <ShoppingCartDetail key={item.id}>
                                <ProductImageCart className="imgCart" src={item.image}/>
                                <ProductDetailsInfo>
                                    <DefaultCategory  className="Category">{item.category}</DefaultCategory>
                                    <Title className="Title">{item.name}</Title>
                                    <DefaultParagraph  className="Description">{item.description}</DefaultParagraph>                                    
                                    <DefaultPrice  className="Price">{ 'R$ ' + (parseFloat(item.price) * (item.addToCart || 1)).toFixed(2) }</DefaultPrice>
                                </ProductDetailsInfo>
                                <ProductActions>
                                    <Quantity item={item} />
                                    <UpdateCart item={item} />
                                    <RemoveFromCart item={item} />
                                    <BackToShopping />
                                </ProductActions>
                            </ShoppingCartDetail>
                        )
                    })
                }
            </ShoppingCartDetailContainer>
        ) : (
            <ShoppingCartDetailContainer>
                <Title>Carrinho vazio</Title>
                <BackToShopping />
            </ShoppingCartDetailContainer>
        );


        const totalCartValue = this.props.shoppingCart.length ? (
            this.props.shoppingCart.map(item => item).reduce((total, item) => total += (parseFloat(item.price) * item.addToCart), 0)
        ) : (
            0
        );

        return (
            <ShoppingCartContainer className="cart-details">
                <PageTitle>Carrinho de compras</PageTitle>
                {shoppingCart}
                <SubTotalContainer>
                    <SubTotalInfo>
                        <DefaultPrice>{'VALOR TOTAL: R$ ' + totalCartValue.toFixed(2)}</DefaultPrice>
                    </SubTotalInfo>
                </SubTotalContainer>
            </ShoppingCartContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps)(ShoppingCart);