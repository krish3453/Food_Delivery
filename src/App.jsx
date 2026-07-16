import { useState } from 'react'
import Head from './Components/Head.jsx'
import Body from './Components/Body.jsx'
import OnYourMind from './Components/OnYourMind.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Head/>
    <Body/>
    
    </div>
  )
}

export default App
