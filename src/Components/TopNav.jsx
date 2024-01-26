/* eslint-disable react/prop-types */
import  '../Styles/Nav.css'

const TopNav = ({name}) => {
  return (
    <div className="nav-con" >
      <h3>{name}</h3>
      <div className="nav-profile">
      <i className="fa-regular fa-bell nav-profile-icon"></i>
      <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" className="nav-profile-img" />
      </div>
    </div>
  )
}

export default TopNav