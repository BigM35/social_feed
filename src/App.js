import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import "./App.css";

function App() {
  const[entries, setEntries] = useState([{name:'John Brown', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at maximus nisi. Proin non consequat.' }, {name:'Tanya Miller', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at maximus nisi. Proin non consequat.' }]);

  function addNewEntry(entry){
    let tempEntry = [entry, ...entries]
    
    setEntries(tempEntry)
  }
  return (
    <div className='container-fluid'>
      <div col-md-7>
        <div className='border-box'>
          <CreatePost addNewEntryProperty={addNewEntry}/>
        </div>
        <div className='border-box'>
          <DisplayPost parentEntries={entries} />
        </div>
        
      </div>
     
    </div>
  );
}

export default App;
