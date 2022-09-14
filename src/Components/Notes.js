import React from 'react'

function Notes({remove, title, content}) {

  const btnStyle = {
    width : "20%",
  }
  

  return (
    <div>
      <div className="new-container card p-3 mt-2">
        <label className="">{title}</label>
        <br/>
        <label className="">{content}</label>
        <div className='buttons text-right'>
          <button type="button"  className="btn btn-success m-2" style={btnStyle} >Edit</button>
          <button type="button"  className="btn btn-danger m-2" style={btnStyle} onClick={remove} >Delete</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Notes);