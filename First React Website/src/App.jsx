import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from "./components/hero";
import Navigation from "./components/navigation";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <HeroSection/>
    </>
  )
}

export default App
