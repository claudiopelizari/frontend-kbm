import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import Quantity from './Quantity';
import { ProductDetailsBase, ProductDetail, ProductImageCart, DefaultCategory, Title, DefaultParagraph, ProductDetailsInfo, ProductDetailContainer, ProductDetailContainerError, ProductActions, DefaultPrice, PageDetailsTitle } from '../styles/styles';
import BackToShopping from './BackToShopping';

class ProductDetails extends Component {
    render() {
        const product = this.props.product ? (
            <ProductDetailContainer>
                <ProductDetail key={this.props.product.id}>
                    <ProductImageCart src={this.props.product.image} />                    
                    <ProductDetailsInfo>
                        <DefaultCategory className="Category">{this.props.product.category}</DefaultCategory>
                        <Title>{this.props.product.name}</Title>
                        <DefaultParagraph>{this.props.product.description}</DefaultParagraph>
                        <DefaultPrice>{ 'R$ ' + (parseFloat(this.props.product.price) * (this.props.product.addToCart || 1)).toFixed(2) }</DefaultPrice>
                    </ProductDetailsInfo>
                    <ProductActions>
                        <Quantity item={this.props.product} />
                        <AddToCart item={this.props.product} />
                        <BackToShopping />
                    </ProductActions>
                </ProductDetail>
                
            </ProductDetailContainer>
        ) : (
            <ProductDetailContainerError>
                <Title>Produto não encontrado.</Title>
                <BackToShopping/>
            </ProductDetailContainerError>
        )
        
        
        return (
            <ProductDetailsBase className="product-details">
                <PageDetailsTitle>Detalhes do Produto</PageDetailsTitle>
                {product}
            </ProductDetailsBase>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.product_id;
    return {
        product: state.products.find(product => (product.id === id))
    }
}

export default connect(mapStateToProps)(ProductDetails);