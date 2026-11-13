import { useState } from 'react'
import NumberList from "./page/arrayprinting"
import InputDemo from './page/inputandprint'

function Testing() {
  const [activeTest, setActiveTest] = useState<'arrayprinting'| 'inputandprint'>('inputandprint')

  return (
    <>
      {activeTest === 'arrayprinting' && <NumberList />}
      {activeTest === 'inputandprint' && <InputDemo />}
    </>
  )
}

export default Testing
