import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Section></Section>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </>
  )
}

export default App
