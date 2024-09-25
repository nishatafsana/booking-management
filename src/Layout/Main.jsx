

import { Outlet } from "react-router-dom"
import Navbar from "../shared/Navbar/Navbar"
import Footer from "../shared/Footer/Footer"


const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main