import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext();

function ShoppingCartProvider({ children }){
    const [kundvagn, setKundvagn] = useState([]);

    function addToKundvagn(product){
        setKundvagn([...kundvagn, product]);
}

return(
    <CartContext.Provider value={{ kundvagn, addToKundvagn }}>
        {children}
    </CartContext.Provider>
)
}

export { ShoppingCartProvider, CartContext };


/* function useKundvagn(){
    const context = useContext(contextKundvagn)
    if(!context){
        throw new Error('useShoppingCart måste användas inom en ShoppingCartProvider')
    }
    return context
}

function ShoppingCartProvider({children}){

}

export default context-Kundvagn */