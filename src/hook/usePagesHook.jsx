import { useContext } from "react"
import { PagesContext } from "../context/PageContext"

const usePagesHook = () => {
 const context =useContext(PagesContext)
 if(!context){
    throw Error('Should be used in pages')
 }
 return context
}

export default usePagesHook
