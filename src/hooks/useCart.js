import { useContext } from "react";
import { CartContext } from "../context/contextKundvagn";

function useCart() {
    return useContext(CartContext);
}

export default useCart;