import React, { useEffect, useRef } from 'react'
import Notes from './Notes';

function Allnotes() {

  // Getting Data from localStorage
  const dataRef = useRef();
  useEffect(() => {
    dataRef.current = JSON.parse(localStorage.getItem('data'));
  },[])
  
  console.log(dataRef.current)


  // Removing particular Data from localStorage
  const removeHandler = (noteIndex) => {
    dataRef.current.splice(noteIndex - 1, 1);
    localStorage.setItem('data', JSON.stringify(dataRef.current));
  }
  return (
    <div>
      <div className='text-right' style={{backgroundColor : "white"}}>
        <label className="m-2" style={{fontSize : "25px", fontWeight : "bold"}}>NO. OF NOTES: {dataRef.current.length} </label>
      </div>
      {dataRef.current.map(note => (
        <Notes key={note.Id} title={note.Title}  content={note.Content} remove={removeHandler(note.Id)} />
        )
      )}
    </div>  
  )
}

export default React.memo(Allnotes);