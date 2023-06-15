import { createContext, useReducer } from "react";
import { FETCHABOUT, FETCHSERVICES } from "../constants/constants";

export const PagesContext = createContext();
// state values
const initialState={
    about:{},
    service:{}
}
// reducer
const reducer = (state,action) => {
    switch (action.type){
        case FETCHABOUT:
            return{
                about:action.payload
            }
        case FETCHSERVICES:
                return{
                    service:action.payload
                }
    }

};



const PageContextProvider = ({ children }) => {
    const [state, dispatch]=useReducer(reducer, initialState)
  return <PagesContext.Provider value={{...state, dispatch}}>{children}</PagesContext.Provider>;
};

export default PageContextProvider;
