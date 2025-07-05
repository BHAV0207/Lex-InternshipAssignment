import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import './styles.css';


interface OutlayProps {
  children: JSX.Element;
}
const Outlay = (props: OutlayProps)  => {
  return (
    <div className='outlay-container'>
      <div className='outlay-left'>
        <Sidebar></Sidebar>
      </div>
      <div className='outlay-right'>
        {props.children}
      </div>

    </div>
  )
}

export default Outlay