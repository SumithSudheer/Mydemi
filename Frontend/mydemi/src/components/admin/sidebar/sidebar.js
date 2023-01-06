import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
            <div className="sidebar">
                <Link className="active" href="#home">Home</Link>
                <Link href="#news">News</Link>
                <Link href="#contact">Contact</Link>
                <Link href="#about">About</Link>
            </div>
  )
}

export default Sidebar