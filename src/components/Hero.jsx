import React from 'react'

export default function Hero(props) {

  const { handleToggleWorkoutPage, handleToggleHero } = props

  return (
    <div  className="min-h-screen flex flex-col gap-10 
    items-center justify-center text-center">

      <div className="flex flex-col gap-4"> 

      <p>Welcome to the project that will change your Body & Mind</p>
      <h1 className="uppercase font-semibold text-4xl 
      sm:text-5xl md:text-6xl  lg:text-7xl">WEAPON <span className="text-red-800 font-medium">X</span></h1>
      </div>

      <p className="text-sm md_text-base font-light ">I acknowledge all the risks involved in Weapon X, such as severe <span 
      className="text-red-00 font-medium">
        routine impact</span>, <span className="text-red-800 font-medium"> mental model reorganization</span> and <span
        className="text-red-800 font-medium"> 
        body enhancement to X level mutant.</span></p>


      <button className="px-8 py-4 rounded-medium">

        <button onClick={() => {
          handleToggleWorkoutPage()
          handleToggleHero()
        }}>Accept & Begin</button>
      </button>
    </div>
  )
}
