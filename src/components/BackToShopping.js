import React from 'react'
import { NavLink } from 'react-router-dom'
import { BackToCartButton } from '../styles/styles'
import { FaAngleDoubleLeft } from 'react-icons/fa'



const BackToShopping = () => {
    return (
        <BackToCartButton>
            <FaAngleDoubleLeft />
            <NavLink to="/">Ver Produtos</NavLink>
        </BackToCartButton>        
    )
}

export default BackToShopping;