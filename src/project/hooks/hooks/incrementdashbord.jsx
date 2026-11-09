import { useState } from 'react'

function Digits() {
  const [display, setDisplay] = useState('')

  const press = (n) => {
    setDisplay(prev => prev + n)
  }

  return (
    <div>
      <p>{display}</p>
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => ( */}
        <button key={5} onClick={() => press(5)}>{5}</button>
    {/* //   ))} */}
      <button onClick={() => setDisplay('')}>Clear</button>
    </div>
  )
}

export default Digits