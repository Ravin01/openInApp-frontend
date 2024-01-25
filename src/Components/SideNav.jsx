import { Link } from 'react-router-dom'
import '../Styles/SideNav.css'

const SideNav = () => {
  return (
    <div className="sideNav-con" >
      <div className="sideNav-header">
      <i className="fa-solid fa-circle sideNav-header-icon"></i>
        <h3>Base</h3>
      </div>
      <div className="sideNav-elements">
        <div className="sideNav-element">
        <i className="fa-solid fa-square sideNav-element-img"></i>
          <p>Dashboard</p>
        </div>
        <Link to="uploads" className="sideNav-element-active">
        <i className="fa-solid fa-file-arrow-up sideNav-element-img"></i>
          <p>Upload</p>
        </Link>
        <div className="sideNav-element">
        <i className="fa-solid fa-puzzle-piece sideNav-element-img"></i>
          <p>Invoice</p>
        </div>
        <div className="sideNav-element">
        <i className="fa-solid fa-clipboard-list sideNav-element-img"></i>
          <p>Schedule</p>
        </div>
        <div className="sideNav-element">
        <i className="fa-solid fa-calendar-days sideNav-element-img"></i>
          <p>Calender</p>
        </div>
        <div className="sideNav-element">
        <i className="fa-solid fa-bell sideNav-element-img" ></i>
          <p>Notification</p>
        </div>
        <div className="sideNav-element">
        <i className="fa-solid fa-gear sideNav-element-img"  ></i>
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default SideNav