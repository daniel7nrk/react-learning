import { useState } from 'react'
// @ts-ignore
import Users from './hooks/useEffect'
// @ts-ignore
import ContextDemo from './hooks/useContext'
// @ts-ignore
import Counter from './hooks/useReducer'
// @ts-ignore
import FocusInput from './hooks/useRef'
// @ts-ignore
import ClickCounter from './hooks/useRef2'
// @ts-ignore
import Demo from './hooks/text1'
// @ts-ignore
import Calculating from './hooks/useMemo'
// @ts-ignore
import Digits from './hooks/incrementdashbord'
// @ts-ignore
import Test from './hooks/QaA'
// @ts-ignore
import CallbackDemo from './hooks/useCallback'

function Hooks() {
  const [selectedHook, setSelectedHook] = useState<'Digits' | 'useEffect' | 'useContext' | 'useReducer' | 'useRef' | 'useRef2' | 'useMemo' | 'useCallback' | 'QaA' | 'text1'>('Digits')

  return (
    <>
      {selectedHook === 'Digits' && <Digits />}
      {selectedHook === 'useEffect' && <Users />}
      {selectedHook === 'useContext' && <ContextDemo />}
      {selectedHook === 'useReducer' && <Counter />}
      {selectedHook === 'useRef' && <FocusInput />}
      {selectedHook === 'useRef2' && <ClickCounter />}
      {selectedHook === 'useMemo' && <Calculating />}
      {selectedHook === 'useCallback' && <CallbackDemo />}
      {selectedHook === 'QaA' && <Test />}
      {selectedHook === 'text1' && <Demo />}
    </>
  )
}

export default Hooks
