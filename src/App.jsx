import { useState } from 'react'
import './App.css'
import Generator from './components/Generator'
import WorkoutPage from './components/WorkoutPage'
import Hero from './components/Hero'
import Exercise from './components/Exercise'
import Workout from './components/Workout'

function App() {

  const [showWorkoutPage, setShowWorkoutPage] = useState(false)
  const [showMain, setShowMain] = useState(false)
  const [showHero, setShowHero] = useState(true)




  function handleToggleWorkoutPage(){
    setShowWorkoutPage(!showWorkoutPage)
  }

  function handleToggleMain(){
    setShowMain(!showMain)
  }

  function handleToggleHero(){
    setShowHero(!showHero)
  }



  
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      {showHero && (<Hero handleToggleHero={handleToggleHero} handleToggleWorkoutPage={handleToggleWorkoutPage} handleToggleMain={handleToggleMain}/>)}
      {showWorkoutPage && (<WorkoutPage handleToggleHero={handleToggleHero} handleToggleWorkoutPage={handleToggleWorkoutPage}/>)}
    </main>
  )
}

export default App


