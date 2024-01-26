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
  return (
    <div className="home-container" >
      <SideNav setName={setName} />
      <div className="home-main">
        <TopNav name={name} />
        <div className="home-content">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route index path="uploads" element={<Uploads />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="calender" element={<Calender />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home