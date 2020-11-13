import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FooterContainer, DefaultParagraph } from '../styles/styles';
 
class Footer extends Component {
    render() {
        return (            
            <FooterContainer className="Footer">
                <DefaultParagraph>© 2020 KaBuM! S/A | All Right Reserved.</DefaultParagraph>
            </FooterContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.length
    }
}

export default connect(mapStateToProps)(Footer);