import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='bg-white shadow-2xl  rounded-lg mb-1 p-4 lg:w-full grid grid-cols-2'>
            <div>
            </div>
            <ul className='flex justify-around gap-4  text-blue-800  py-4 text-xl font-bold'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
        </div>
    )
}
