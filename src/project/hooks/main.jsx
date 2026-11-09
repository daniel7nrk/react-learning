import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Users from './hooks/useEffect'
import App from './hooks/useContext'
import Counter from './hooks/useReducer'
import FocusInput from './hooks/useRef'
import ClickCounter from './hooks/useRef2'
import Demo from './hooks/text1'
import Calculating from './hooks/useMemo'
import Digits from './hooks/incrementdashbord'

import Test from './hooks/QaA'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Users/> */}
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <FocusInput/> */}
    {/* <ClickCounter/> */}
    {/* <Calculating/> */}

    {/* <Test/> */}
    {/* <Demo/> */}
    <Digits/>



  </StrictMode>,
)
