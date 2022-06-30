import React from 'react'
import './Header.css'

const Header = ({change}) => {
   
  return (
    <div className='header-container'>
        <h1><span className='title'>React</span> Notes</h1>
        <button type='button'  className='btn' onClick={change}>Toggle Mode</button>
    </div>
  )
}

export default Header