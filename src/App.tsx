import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './page/Tasks'
import { tasks } from './data/init-data'

function App() {

  return (
    <div className="App">
        <Tasks tasks={tasks} />
    </div>
  )
}

export default App
