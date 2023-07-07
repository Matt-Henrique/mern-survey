import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { NavBar } from '../components'
import { ResponseList } from '../pages'
import AppSurvey from "../App";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/response/list" exact element={<ResponseList />} />
        <Route path='/response' exact element={<AppSurvey />} />
      </Routes>
    </Router>
  )
}

export default App