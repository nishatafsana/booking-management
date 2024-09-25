
import { Helmet } from "react-helmet-async"

import Rooms from "./Rooms"
import Categories from "../Categories/Categories"



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* Categories section  */}
      <Categories />
      {/* Rooms section */}
      <Rooms />
    </div>
  )
}

export default Home