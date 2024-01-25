import { Route, Routes } from "react-router-dom"
import SideNav from "../Components/SideNav"
import TopNav from "../Components/TopNav"

import '../Styles/Home.css'
import Uploads from "../Components/Uploads"

const Home = () => {
  return (
    <div className="home-container" >
      <SideNav />
      <div className="home-main">
        <TopNav />
        <div className="home-content">
          <Routes>
            <Route path="uploads" element={<Uploads />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home