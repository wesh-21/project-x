// SideBar.jsx
import React from 'react';

export default function SideBar(props) {
    const { workout, handleClose } = props


  return (
    <div className='sidebar'>
      <div className='bgOverlay'></div>
      <div className='sidebarContents'>
        <h2>{workout.name}</h2>
        <div className="exercisesContainer">
          <ul>
            {workout.exercises.map((exercise, index) => (
              <li key={index}>
                {exercise.description()}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
