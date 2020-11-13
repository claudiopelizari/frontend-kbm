import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductInfo, ProductImage, DefaultCategory, Title, DefaultPrice, ProductDetailsButton } from '../styles/styles';
import { ImEye } from  'react-icons/im';

const Product = (props) => {
    let { item } = props;
    return (        
        <NavLink to={'/product/' + item.id}>
            <ProductInfo>
                <ProductImage src={item.image}/>            
                <DefaultCategory className="Category">{item.category}</DefaultCategory>
                <Title className="Title">{item.name}</Title>        
                <DefaultPrice className="Price">{'R$ ' + parseFloat(item.price).toFixed(2)}</DefaultPrice>
                <ProductDetailsButton>
                    <NavLink to={'/product/' + item.id}>VER DETALHES</NavLink>
                    <ImEye/>
                </ProductDetailsButton>
            </ProductInfo>
        </NavLink>
    )
}

export default Product;