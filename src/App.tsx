import { useState } from 'react'
import TodoList from './project/todo-list/todo-list'
import Elcalculator from './project/Elcalculator/Elcalculator'
import TicTacToe from './project/tictactoe/tictactoe'
import Hooks from './project/hooks/hooks'
import Testing from './project/testing/Testing'

function App() {
  const [activeProject, setActiveProject] = useState<'todo' | 'calculator' | 'tictactoe' | 'hooks' | 'testing'>('todo')

  return (
    <>
      {activeProject === 'todo' && <TodoList />}
      {activeProject === 'calculator' && <Elcalculator />}
      {activeProject === 'tictactoe' && <TicTacToe />}
      {activeProject === 'hooks' && <Hooks />}
      {activeProject === 'testing' && <Testing />}
    </>
  )
}

export default App
