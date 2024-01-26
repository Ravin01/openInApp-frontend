import { Route, Routes } from "react-router-dom"
import SideNav from "../Components/SideNav"
import TopNav from "../Components/TopNav"

import '../Styles/Home.css'
import Uploads from "../Components/Uploads"
import Dashboard from "../Components/Dashboard"
import Invoice from "../Components/Invoice"
import Schedule from "../Components/Schedule"
import Calender from "../Components/Calender"
import Notifications from "../Components/Notifications"
import Settings from "../Components/Settings"
import { useState } from "react"

const Home = () => {
  const [name, setName] = useState('Dashboard')
  const [sideNavClass, setSideNavClass] = useState('sideNav-con')
  const [bars, setBars] = useState('bars')

  return (
    <div className="home-container" >
      <div className={`${sideNavClass}`} >
      <SideNav setName={setName} sideNavClass={sideNavClass}  setSideNavClass={setSideNavClass} />
      </div>
      <div className="home-main">
        <TopNav name={name} bars={bars} setSideNavClass={setSideNavClass} setBars={setBars} />
        <div className="home-content">
          <Routes>
            <Route path="dashboard" element={<Dashboard name={name} />} />
            <Route index path="uploads" element={<Uploads name={name} />} />
            <Route path="invoice" element={<Invoice name={name} />} />
            <Route path="schedule" element={<Schedule name={name} />} />
            <Route path="calender" element={<Calender name={name} />} />
            <Route path="notifications" element={<Notifications name={name} />} />
            <Route path="settings" element={<Settings name={name} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home