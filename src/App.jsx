import { useReducer, createContext } from 'react'
import { reducer } from './reducer'
import Counter from './components/Counter'

export const GlobalContext = createContext()

export default function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <>
      <GlobalContext.Provider value={[state, dispatch]}>
        <Counter />
      </GlobalContext.Provider>
    </>
  )
}