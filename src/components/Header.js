import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="fixed w-full text-white flex justify-between items-center">
        <div className="text-2xl font-bold text-center ml-4">
            <h1>TailwindLogo</h1>
        </div>

        <nav>
            <ul className="md:flex gap-8 p-6">
            <li className="bg-white/10 px-4 py-2 rounded-md"><Link to="/">Home</Link></li>
            <li className="bg-white/10 px-4 py-2 rounded-md"><Link to="/">Settings</Link></li>
            <li className="bg-white/10 px-4 py-2 rounded-md"><Link to="/">Information</Link></li>
            <li className="bg-white/10 px-4 py-2 rounded-md"><Link to="/">About</Link></li>
            <li className="bg-white/10 px-4 py-2 rounded-md"><Link to="/">Jobs</Link></li>
            <li className="bg-white/10 px-4 py-2 rounded-md"><Link to="/">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header