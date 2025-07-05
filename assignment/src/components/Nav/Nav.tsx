import { Bell } from 'lucide-react'
import React from 'react'
import './styles.css'

function Nav() {
  return (
    <div className='nav-conatainer'>
      <div className='nav-left'>
        <input type="text" placeholder='Search..' />
      </div>
      <div className='nav-right'>
        <Bell></Bell>
        <img src="" alt="" className='nav-img'/>
        <div className='nav-right-name'>John Doe</div>
      </div>
    </div>
  )
}

export default Nav