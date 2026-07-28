import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import Section2 from './components/Section2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Section></Section>
      <Section2></Section2>
    </>
  )
}

export default App
