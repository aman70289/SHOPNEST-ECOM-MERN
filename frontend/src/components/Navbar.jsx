
import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-brand">
            <Link to="/">
            <img src="/logo.png" alt="ShopNest Logo" className="navbar-logo"/>
            ShopNest
            </Link>
        </div>
        <ul className="navbar-links">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    </div>
  )
}
