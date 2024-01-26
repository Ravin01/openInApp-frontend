/* eslint-disable react/prop-types */
import  '../Styles/Nav.css'

const TopNav = ({name, setSideNavClass, }) => {
  const handleOpenSideNav = () => {

      setSideNavClass('sideNav-con-open')
  
  };
  return (
    <div className="nav-con" >
      <div className="nav-header">
      <div className="nav-bars">
      <i className={`fa-solid fa-bars`} onClick={handleOpenSideNav}></i>
      </div>
      <i className="fa-solid fa-circle nav-header-icon"></i>
        <h3>Base</h3>
      </div>
      <h3 className='nav-name' >{name}</h3>
      <div className="nav-profile">
      <i className="fa-regular fa-bell nav-profile-icon"></i>
      <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" className="nav-profile-img" />
      </div>
    </div>
  )
}

export default TopNav