import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { 

  return (
    <div>
      <div className='navbar'>
        <ul className='navContent mt-3'>
          <li className='navBox'>
            <Link className='navLink' to="/">ADD NOTES</Link>
          </li>
          <li className='navBox'>
            <Link className='navLink' to="/allnotes">ALL NOTES</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default React.memo(Navbar);
