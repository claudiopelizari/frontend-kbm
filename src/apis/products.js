const productsAPIs = {    
    getProducts: () => fetch('https://5fa9fa5db5c6450016029fd3.mockapi.io/api/v1/produtos').then(res => res.json())
        
}

export { productsAPIs }