import React from 'react'
import citylogo from '../images/New2Citylogo.png'
import { useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const navigate = useNavigate();
    const handleSignin = ()=>{
        navigate('/')
    }
  return (
     <div className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm flex flex-row justify-between"> 
        <div className=''>
            <img src={citylogo}/>
        </div>
        <div className="flex-1 max-w-xl mx-6 mt-5">
          <div className="relative">
            <CiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search cities, places, experiences..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>
        </div>
        <button className='text-xl font-bold text-black mt-4 mr-5 bg-[#f2f2f2] h-[45px] w-[150px] rounded-2xl' >Explore</button>
        <button className='text-xl font-bold text-black mt-4 mr-5 bg-[#f2f2f2] h-[45px] w-[150px] rounded-2xl' >About</button>
        <button className='text-xl font-bold text-black mt-4 mr-5 bg-[#f2f2f2] h-[45px] w-[100px] rounded-2xl' onClick={handleSignin}>SignIn</button>
        <button className='text-xl font-bold text-black mt-4 mr-5 bg-[#b2b2b2] h-[45px] w-[150px] rounded-2xl' >Aishu</button>
        
    </div>
  )
}
// className='bg-[#edf2fb] flex flex-row justify-between'
export default Navbar