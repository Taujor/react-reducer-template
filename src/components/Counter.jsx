import { useContext } from 'react'
import { GlobalContext } from '../App'
import Increment from "./utils/Increment"
import Decrement from "./utils/Decrement"

export default function Counter (){
    const [state, dispatch] = useContext(GlobalContext)

    return (
        <>
            <div>{state.count}</div>
            <Increment />
            <Decrement />
        </>
    )
}