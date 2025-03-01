import React from 'react'
import { createContext, useState } from 'react'

const contextKundvagn = createContext();

function ShoppingCartProvider({ children }){
    const [kundvagn, setKundvagn] = useState([]);

    function addToCart(product){
        setKundvagn([...kundvagn, product]);
}

return(
    <contextKundvagn.Provider value={{kundvagn, addToKundvagn}}>
        {children}
    </contextKundvagn.Provider>
)
}

export default ShoppingCartProvider;


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