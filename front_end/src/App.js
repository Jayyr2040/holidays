import * as React from 'react';
import './App.css';
// import Holidays from './Holidays'
import NewForm from './NewForm.js'
import { useEffect, useState } from "react";

function App() {
 
  const [holidays, setHolidays] = useState([]);

  const addHoliday = (holiday) => {
    setHolidays([...holidays, holiday]);
  };

  useEffect(() => {
    fetch("/holidays")
      .then(
        (data) => data.json(),
        (err) => console.log(err)
      )
      .then(
        (parsedData) => setHolidays(parsedData),
        (err) => console.log(err)

      );
  }, []);

  return (
    <div className="App">
       <h1>Holidays! Celebrate!</h1>
       <NewForm handleAddHoliday={addHoliday}/>
        {/* <Holidays handleSetHoliday={setHoliday}/>  */}
     
        <table style={{border:"1px solid"}}>
            <tbody>
                    <tr>
                        <th> Title </th>
                        <th> Likes</th>
                        <th>Description </th>
                    </tr>
                        {holidays.map((holiday) => {
                        return (
                            <tr key={holiday._id}>
                            <td> {holiday.name}</td>
                            <td> {holiday.likes}</td>
                            <td> {holiday.description}</td>
                            </tr>
                        );
                        })}
                    </tbody>
            </table>
          
    </div>
  );
}

export default App;
