import * as React from 'react';
import './App.css';
import Holidays from './Holidays'
import NewForm from './NewForm.js'


function App() {
 
  const [holidays, setHolidays] = React.useState([]);

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
       <Holidays holidays={holidays} setHoliday={setHoliday}/>
        
    </div>
  );
}

export default App;
