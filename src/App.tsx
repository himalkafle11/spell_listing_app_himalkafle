import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ListOfSpells from './components/listOfSpells'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListOfSpells />} />
  </Routes>
  )
}

export default App