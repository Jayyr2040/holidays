import * as React from 'react';
import './App.css';
import Holidays from './Holidays'
import NewForm from './NewForm.js'


function App() {
 
  const [holidays, setHolidays] = React.useState([]);


  // if pass down setHolidays as callback function to component, no need this
  const setHoliday = (holiday) => {
    setHolidays([...holiday]);
  };

  const addHoliday = (holiday) => {
    setHolidays([...holidays, holiday]);
  };

  
  return (
    <div className="App">
       <h1>Holidays! Celebrate!</h1>
       <NewForm handleAddHoliday={addHoliday}/>
       {/* *1. can pass down setHolidays from app directy as well */}
       <Holidays holidays={holidays} setHoliday={setHoliday}/>
        
    </div>
  );
}

export default App;
