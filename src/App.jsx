import React,{ useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  

  return (
    <>

      <MovieCard movie={{title:"Test Film",release_date:"2024-10-11"}}/>
    </>
  )
}

export default App
