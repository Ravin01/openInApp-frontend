/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../Styles/SideNav.css'
import { useState } from 'react';

const SideNav = ({setName}) => {
  const [activeLink, setActiveLink] = useState('Dashboard');
  const handleSetName = (n)=>{
    setName(n)
    setActiveLink(n);
  }

  return (
    <div className="sideNav-con" >
      <div className="sideNav-header">
      <i className="fa-solid fa-circle sideNav-header-icon"></i>
        <h3>Base</h3>
      </div>
      <div className="sideNav-elements">
        <Link className={`sideNav-element${activeLink === 'Dashboard' ? '-active' : ''}`} to='dashboard' onClick={()=> handleSetName('Dashboard')} >
        <i className="fa-solid fa-square sideNav-element-img"></i>
          <p>Dashboard</p>
        </Link>
        <Link to="uploads" className={`sideNav-element${activeLink === 'Upload CSV' ? '-active' : ''}`}  onClick={()=> handleSetName('Upload CSV')} >
        <i className="fa-solid fa-file-arrow-up sideNav-element-img"></i>
          <p>Upload</p>
        </Link>
        <Link className={`sideNav-element${activeLink === 'Invoice' ? '-active' : ''}`} to='invoice'  onClick={()=> handleSetName('Invoice')} >
        <i className="fa-solid fa-puzzle-piece sideNav-element-img"></i>
          <p>Invoice</p>
        </Link>
        <Link className={`sideNav-element${activeLink === 'Schedule' ? '-active' : ''}`} to='schedule'  onClick={()=> handleSetName('Schedule')} >
        <i className="fa-solid fa-clipboard-list sideNav-element-img"></i>
          <p>Schedule</p>
        </Link>
        <Link className={`sideNav-element${activeLink === 'Calender' ? '-active' : ''}`} to='calender'  onClick={()=> handleSetName('Calender')} >
        <i className="fa-solid fa-calendar-days sideNav-element-img"></i>
          <p>Calender</p>
        </Link>
        <Link className={`sideNav-element${activeLink === 'Notifications' ? '-active' : ''}`} to='notifications'  onClick={()=> handleSetName('Notifications')} >
        <i className="fa-solid fa-bell sideNav-element-img" ></i>
          <p>Notification</p>
        </Link>
        <Link className={`sideNav-element${activeLink === 'Settings' ? '-active' : ''}`} to='settings'  onClick={()=> handleSetName('Settings')} >
        <i className="fa-solid fa-gear sideNav-element-img"  ></i>
          <p>Settings</p>
        </Link>
      </div>
    </div>
  )
}

export default SideNav