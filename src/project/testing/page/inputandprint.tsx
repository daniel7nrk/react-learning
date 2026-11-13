import { useState } from 'react'

function InputDemo() {
  const [text, setText] = useState<string>('')
  const [saved, setSaved] = useState<string>('')

  const handleSubmit = () => {
    setSaved(text)
    setText('')
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleSubmit}>Submit</button>

      <p>Saved value: {saved}</p>
    </div>
  )
}

export default InputDemo