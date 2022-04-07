import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import "./App.css";
import DateTime from './Components/DateTime/DateTime';

function App() {
  let currentTime = new Date();
  const[entries, setEntries] = useState([{name:'John Brown', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at maximus nisi. Proin non consequat.', date: DateTime(new Date())}, {name:'Tanya Miller', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at maximus nisi. Proin non consequat.', date: DateTime(currentTime) }]);

  function addNewEntry(entry){
    let tempEntry = [entry, ...entries]
    
    setEntries(tempEntry)
  }
  return (
    <div className='container'>
      <div col-md-7>
        <div className='flex-item-1'>
          <CreatePost addNewEntryProperty={addNewEntry}/>
        </div>
        <div className='flex-item-2'>
          <DisplayPost parentEntries={entries} />
        </div>
        
      </div>
     
    </div>
  );
}

export default App;
