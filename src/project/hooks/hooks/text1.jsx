import { useState } from 'react'

function Demo() {
  const [text, setText] = useState('')

  function textHandler(newText) {
    setText(newText)
  }

  return (
    <div>
      <div onClick={() => textHandler('this is a text')}>
        Click me
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Demo