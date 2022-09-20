import React, { useState } from 'react';
import DisplayEntries from './Components/Display Entries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 175, date: '12-23-2026'}])

function addNewEntry(entry){
  let tempEntries = [...entries, entry];

  setEntries(tempEntries);
}

  return (
    <div>
     <DisplayEntries parentEntries={entries} />
     <AddEntryForm addNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;
