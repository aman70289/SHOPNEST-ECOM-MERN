import React from 'react'
import {Link} from "react-router-dom"

 const Home = () => {
  return (
    <div className="home">
        <h1>Welcome to ShopNest</h1>
        <p>Your one-stop for all your needs. Explore our wide range of product and service</p>
        <Link to="/shop">Start Shopping</Link>
    </div>
  )
}
export default Home;
