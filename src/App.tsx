import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ListOfSpells from './components/listOfSpells'
import SingleSpellInformation from './components/singleSpellInformation'
import FavouriteSpells from './components/favouriteSpells'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListOfSpells />} />
      <Route path="/spell/:spellName" element={<SingleSpellInformation/>} />
      <Route path="/favourite-spells" element={<FavouriteSpells/>} />
  </Routes>
  )
}

export default App