import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Info from './components/Info'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5] py-8 font-light text-[#111]">
        <Todos />
        <Info name="Hynes Gavin C. Daugdaug" />
      </div>
    </>
  )
}

export default App
