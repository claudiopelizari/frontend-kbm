import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;    
`;

export const ProductsListContainer = styled(Container)``;

export const ProductsContainer = styled(Container)`
    justify-content: space-between;    
    width:1024px;
    margin: auto;
`;

export const ShoppingCartContainer = styled(Container)`
    flex-direction: column;
    width:1024px;
    margin: auto;    
    margin-top: 150px;
    margin-bottom: 25px;
    
           
`;

export const ProductDetailsBase = styled(Container)`
    flex-direction: column;    
    width:1024px;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 25px;
    background:#fff;
    border-radius:5px;
`;

export const ShoppingCartDetailContainer = styled(Container)`
    flex-direction: column;
    margin: 0 15px;
    margin-top: 0;
    flex-grow: 1;    
    background:#fff;
    padding:10px;
    
    
    
`;

export const ProductDetailContainer = styled(Container)`
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 0 0 5px 5px;
    padding: 10px;
    flex-grow: 1;

    :hover{
        border: 1px solid #888;
        background:#fff;
    }
     
`;

export const ProductDetailContainerError = styled(ProductDetailContainer)`
    border: none;
    align-items: center;
`;

export const NavbarContainer = styled(Container)`
    justify-content: space-between;    
    width:1024px;
    margin: auto;    
    min-height: 50px;
    padding: 5px;    
    align-items: center;

    a {
        text-decoration: none;
        align-self: center;
    }

    img {
        width: 150px;
        margin-left: 15px;
    }
`;

export const FilterContainer = styled.form`
display: flex;
flex-wrap: wrap;
align-items: stretch;
justify-content: space-between;
padding: 15px;
margin-bottom:350px;
`;  

export const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 200px;
    margin: 15px;
    flex: 1;
    background:#fff;
    transition:.5s;

    :hover {        
        box-shadow:0px 2px 15px 5px #fff;
        border: 1px solid #888;
    }
`;

export const ProductDetail = styled.div`
    display: flex;
    
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
`;

export const ProductActions = styled(ProductDetail)`
    flex-direction: column;
`;

export const ShoppingCartDetail = styled(ProductDetail)`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius:5px;
    transition:.5s;

    :hover {
        border: 1px solid #888;
        background:#eee;

    }
`;

export const SearchButton = styled.button`
    align-items: stretch;
    background:#e78905;
    color: #ffffff;
    padding: 12px;
    line-height: 1px;
    cursor: pointer;
    border: 1px solid #e78905;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    font-size: 20px;
    font-weight: bold;
`;

export const DefaultInput = styled.input`
    padding: 15px;
    font-size: 14px;
    border: 1px solid #c1c1c1;
    flex-grow: 1;
    border-radius: 5px 0 0 5px;
`;

export const MyCart = styled.div`
    align-self: center;
    text-align: center;
    color:#0077BF;
    border-radius: 5px;    

    a {
        font-size: 14px;
        font-weight: bold;
        color: #0077BF;
        font-size: 40px;
    }

    label {
        position: absolute;
        background: #F95913;
        border: 1px solid #F95913;
        color: #ffff;
        border-radius: 50%;        
        width: 20px;
        height: 20px;
        font-size: 14px;
        margin-left:-15px;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const ProductImage = styled.img`
    width: 100%;    
    border-radius: 5px;    
`;

export const ProductImageCart = styled.img`
    width: 100%;
    max-width:200px;
    border-radius: 5px;
`;

export const Title = styled.h2`
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    font-size: 15px;
    color: #05529c;
    margin: 0 0 10px 0;
`;

export const PageTitle = styled(Title)`
    font-size: 16px;
    text-align: left;
    flex-grow: 1;
    margin: 15px;
    margin-bottom: 0;
    background: #0077BF;
    padding: 10px;
    color: #ffffff;
    text-transform: uppercase;
    border-radius: 5px 5px 0 0;
`;

export const PageDetailsTitle = styled(PageTitle)`
    margin: 0;
    background: #0077BF;
    padding: 10px;
    color: #ffffff;
    text-transform: uppercase;
    border-radius: 5px 5px 0 0;
`;

export const DefaultCategory = styled.span`
    font-size: 12px;
    margin:10px 0 0 0;
`;

export const DefaultParagraph = styled.p`
    font-size: 12px;
`;

export const DefaultPrice = styled.span`
    font-size: 22px;
    color: #2c6eb4;
    font-weight: bold;
    
`;

export const ProductDetailsInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 15px;
`;

export const BackToCartButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    text-align: center;
    background:#0077BF;
    border-radius: 5px;
    border: none;
    padding: 5px;
    line-height: 1px;
    cursor: pointer;
    margin: 15px;
    max-width: 160px;
    min-width: 150px;
    margin-bottom: 0;

    a {
        flex: 1;
        font-size: 14px;        
        color: #ffffff;
        text-decoration: none;
    }

    svg {
        align-self:center;
        margin: 0 auto;
        padding: 0;
        font-size: 20px;
        color: #ffffff;
    }
`;

export const CartActions = styled.button`
    display: flex;
    align-self: center;
    text-align: center;
    background:#e78905;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    padding: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    width: 160px;
    justify-content: space-between;


    svg {
        align-self:center;
        margin: 0 auto;
        padding: 0;
        font-size: 20px;
    }
`;

export const DefaultSpan = styled.span`
    flex: 1;
    align-self:center;
`;

export const ProductDetailsButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    text-align: center;
    background:#0077BF;
    border-radius: 5px;
    border: none;
    padding: 5px;
    line-height: 1px;
    cursor: pointer;
    margin: 15px;
    max-width: 160px;
    min-width: 150px;
    margin-bottom: 0;

    a {
        flex: 1;
        font-size: 14px;        
        color: #ffffff;
        text-decoration: none;
    }

    svg {
        align-self:center;
        margin: 0 auto;
        padding: 0;
        font-size: 20px;
        color: #ffffff;
    }
`;

export const ProductListButton = styled(ProductDetailsButton)`
    max-width: 100%;
    flex-grow: 1;
    text-align: right;
    background: #e78905;
    height: 50px;
    padding: 0 20px;
    border: 2px solid #fff;    

    a { 
        color: #FFF;
        font-weight: bold;
        padding: 25px 10px;
        position: absolute;        
        border-radius:5px;
        transition:.5s;
    }

    a:hover {
        color: #F95913;
        background: #fff;       
    }
`;

export const QuantityContainer = styled(Container)`
    margin: 10px 0;
    align-items: stretch;
    justify-content: center;
`;

export const QuantityButton = styled.button`
    border-radius: 50%;
    background: #0077BF;
    color: #ffffff;
    border: none;
    font-size: 18px;
    font-weight: bold;
    width: 30px;
    height: 30px;
`;

export const QuantityLabel = styled.label`
    font-size: 24px;
    font-weight: bold;
    padding: 0 10px;
`;

export const SubTotalContainer = styled(Container)`
    justify-content: space-between;
    margin-left: 0px;
    padding: 30px 10px;
    background:#ddd;
    width:1024px;
    margin: 0 15px;
       
`;

export const SubTotalInfo = styled.div`
    flew-grow: 1;
    text-align: left;
`;

export const ProductsList = styled.div`
    width: 100%;
    margin-bottom:200px;
`;


export const FooterContainer = styled(Container)`
    width:100%;
    margin: auto;
    position: fixed;
    left: 0;
    bottom: 0;   
    justify-content: space-between;    
    padding: 20px 10px;
    color: #8b8b8b;
    justify-content: center;
    background:#212121;
`;