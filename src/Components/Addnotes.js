import React, { useState, useEffect, useRef} from 'react'

function Addnotes() {

  const [Title, setTitle] = useState("")
  const [Content, setContent] = useState("")
  const [Count, setCount] = useState(0)
  const [Notes, setNotes] = useState([])

  const btnStyle = {
    width : "20%",
  }
  
  // Getting the user's input(Title)
  const titleHandler = (event) => {  
    setTitle( event.target.value );
  };

    // Getting the user's input(Content)
  const contentHandler = (event) => {  
    setContent( event.target.value );
  };

  const inputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(Notes));
    inputRef.current.focus();

  })
  

  // Adding Data to localStorage
  const addData = () => {
    localStorage.setItem('data', JSON.stringify(Notes));
    let Id = Count + 1;
    let newNotes =  { Id, Title, Content } ;
    let newArray = Notes.concat( newNotes );
    setNotes( newArray );
    
    setCount(prevCount => prevCount + 1)
  };

  
  return (
    <div>
      <div className='text-right' style={{backgroundColor : "white"}}>
        <label className="m-2" style={{fontSize : "25px", fontWeight : "bold"}}>NO. OF NOTES: {Count} </label>
      </div>
      <form className="main-container card p-3 mt-2"  >
          <div>
            <h1 className='header text-center'>Notes</h1>
          </div>
          <div>
            <label>Title</label>
            <input ref={inputRef} type="text" className="form-control" placeholder="Title" onKeyUp={titleHandler} />
            <br/>
            <label>Content</label>
            <textarea className="form-control" placeholder="Start typing..." onKeyUp={contentHandler}  /> 
          </div>
          <div className='buttons text-right'>
          <button type="button"  className="btn btn-primary mt-3" style={btnStyle} onClick={addData} >Add</button>
          </div>
      </form>
    </div>
  )
}

export default React.memo(Addnotes);




  
  


