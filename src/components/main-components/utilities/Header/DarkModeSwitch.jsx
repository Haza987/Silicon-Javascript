import React, { useContext} from 'react'
import { DarkModeContext } from './DarkModeContext'

const DarkModeSwitch = () => {

  const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext)

  return (
    <div className="btn-toggle-switch">
      <span className="label">Dark mode</span>
      <label className="toggle-switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} id='toggle'/>
        <span className="slider round"></span>
      </label>
  </div>
  )
}

export default DarkModeSwitch