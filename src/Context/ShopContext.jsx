import React from "react"
import { createContext } from "react"
import all_product from "../Components/Assests/all_product"

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_product};
    // const contextValue = { all_product: [...all_product] };
    return(

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;