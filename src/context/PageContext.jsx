import { createContext, useReducer } from "react";
import {
  FETCHABOUT,
  FETCHPROJECTS,
  FETCHSERVICES,
} from "../constants/constants";

export const PagesContext = createContext();
// state values
const initialState = {
  about: {},
  service: {},
  projects: [],
};
// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case FETCHABOUT:
      return {
        ...state,
        about: action.payload,
      };
    case FETCHSERVICES:
      return {
        ...state,
        service: action.payload,
      };
    case FETCHPROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
  }
};

const PageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PagesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PagesContext.Provider>
  );
};

export default PageContextProvider;
