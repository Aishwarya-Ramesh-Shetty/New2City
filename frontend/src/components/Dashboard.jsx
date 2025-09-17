import React from 'react'
import Navbar from './Navbar'
import ExploreCategory from './ExploreCategory'

const Dashboard = () => {
  return (
    <>
        <div className='flex flex-col'>
            <nav><Navbar/></nav>
            <div><ExploreCategory/></div>
        </div>
        
    </>
  )
}

export default Dashboard