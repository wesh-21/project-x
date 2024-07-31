import React, { useState } from 'react';
import Exercise from './Exercise';
import Workout from './Workout';
import SideBar from './SideBar';

export default function WorkoutPage(props) {

  const { handleToggleWorkoutPage, handleToggleHero} = props
  
  // Create exercise instances
  const chestExercises = [
    new Exercise('Chest Press', 3, 12),
    new Exercise('Chest Flies', 3, 12),
    new Exercise('Inclined Dumbbell Chest Press', 3, 12),
  ];

  const legExercises = [
    new Exercise('Squats', 4, 15),
    new Exercise('Leg Press', 3, 12),
    new Exercise('Lunges', 3, 20),
  ];

  const backExercises = [
    new Exercise('Pull Ups', 4, 10),
    new Exercise('Deadlift', 3, 8),
    new Exercise('Rows', 3, 12),
  ];

  // Create workout instances
  const workouts = [
    new Workout('Chest & Triceps', chestExercises),
    new Workout('Legs', legExercises),
    new Workout('Back & Biceps', backExercises),
  ];

  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleToggleWorkout = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleCloseSidebar = () => {
    setSelectedWorkout(null);
  };

  return (
    <div>
        <div
        className="min-h-screen flex flex-col gap-20 items-center justify-center text-center">

            <h2 className="uppercase font-semibold text-4xl">What do you want to workout?</h2>

            
        {workouts.map((workout, index) => (
          <button key={index} onClick={() => handleToggleWorkout(workout)}>
            {workout.name}
          </button>
        ))}

        <button onClick={() => {
          handleToggleWorkoutPage()
          handleToggleHero()
        }}>Close</button>

      </div>

      {selectedWorkout && (
        <SideBar workout={selectedWorkout} handleClose={handleCloseSidebar} />
      )}
    </div>
  );
};


