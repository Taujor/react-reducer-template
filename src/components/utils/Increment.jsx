import { useContext } from 'react'
import { actions } from '../../reducer'
import { GlobalContext } from '../../App'

export default function Increment (){
    const [state, dispatch] = useContext(GlobalContext)
    return (
        <>
            <button onClick={() => dispatch({type: actions.INCREMENT})}>+</button>
        </>
    )
}
