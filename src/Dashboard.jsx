import React, { useState, useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
import { CiBoxList } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { HiOutlineBell } from "react-icons/hi2";
import { IoAddOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

function Dashboard() {
    const [friends, setFriends] = useState(false)
    const [dropdown,setDropdown] = useState(false)


    const handleOnlineFriends = () => {
        setFriends((prev) => !prev)
    }

    const handleCreateDropdown = () => {
        setDropdown((prev) => !prev)
    }



    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-2 sm:p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="h-auto lg:h-230 w-full lg:w-56 xl:w-64 bg-stone-500/30 backdrop-blur-md rounded-lg shadow-lg border border-stone-600 p-4 lg:p-5">
                <button className="flex items-center justify-center mt-4 lg:mt-15 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg px-4 py-2 shadow-md border border-stone-500 w-full lg:w-45 cursor-pointer transition-all duration-300 hover:scale-105">
                    <RxDashboard className="mr-2" /> Dashboard
                </button>
                <button className='flex items-center rounded-lg justify-center mt-4 lg:mt-10 bg-none text-white hover:bg-gradient-to-r from-blue-700 to-blue-900 hover:rounded-lg px-4 py-2 hover:shadow-md hover:border hover:border-stone-500 w-full lg:w-45 cursor-pointer transition-all duration-300 hover:scale-105'>
                <CiBoxList  className='mr-2 font-sem'/>  Game List
                </button>
                <button className='flex items-center rounded-lg justify-center mt-4 lg:mt-10 bg-none text-white hover:bg-gradient-to-r from-blue-700 to-blue-900 hover:rounded-lg px-4 py-2 hover:shadow-md hover:border hover:border-stone-500 w-full lg:w-45 cursor-pointer transition-all duration-300 hover:scale-105'>
                <LiaUserFriendsSolid className='mr-2'/> Friends
                </button>
                <button className='flex items-center rounded-lg justify-center mt-4 lg:mt-10 bg-none text-white hover:bg-gradient-to-r from-blue-700 to-blue-900 hover:rounded-lg px-4 py-2 hover:shadow-md hover:border hover:border-stone-500 w-full lg:w-45 cursor-pointer transition-all duration-300 hover:scale-105'>
                <HiOutlineBell className='mr-2'/>Notifications
                </button>
                <div>
                    <button className='bg-none flex items-center justify-center mt-8 lg:mt-30 bg-none text-stone-400 text-[13px] hover:text-white cursor-pointer transition-all duration-300'
                    onClick={handleOnlineFriends}>
                    
                        Online Friends <IoAddOutline className='ml-4 lg:ml-10 text-[20px]'/>
                    </button>
                </div>
                <button className='flex items-center justify-center mt-8 lg:mt-80 text-white bg-gradient-to-r from-blue-700 to-blue-900  rounded-lg px-4 py-2 shadow-md border border-stone-500 w-full lg:w-45 cursor-pointer transition-all duration-300 hover:scale-105'>
                <CgLogOut className='mr-2'/> Log Out 
                </button> 
            </div>
            
            <div className="flex-1 relative">
                { friends && (
                      <div className='w-full max-w-md h-20 bg-stone-400/30 backdrop-blur-md rounded-lg shadow-lg border border-stone-600 mb-4 flex items-center p-2'>
                          <input 
                             type='text'
                             placeholder='Search by username'
                             className='flex-1 h-8 rounded-lg p-2 border border-stone-400 focus:outline-none focus:ring-0 mr-2'
                          />
                          <button className='flex items-center justify-center h-9 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg px-4 py-2 shadow-md border border-stone-500 cursor-pointer transition-all duration-300 hover:scale-105'>
                              Add
                   </button>
                      </div>
                  )}

                  <div className='w-full h-16 lg:h-18 bg-stone-500/30 backdrop-blur-md rounded-lg shadow-lg border border-stone-600 flex items-center justify-between px-4 mb-4'>
                     <input
                        type='text'
                        placeholder='Search for games...'
                        className='w-full max-w-xs h-10 rounded-lg p-2 border border-stone-500 focus:outline-none focus:ring-0 shadow-lg'
                    />
                    <div className='w-36 sm:w-44 h-12 bg-stone-400/20 rounded-full shadow-lg border border-stone-600 flex items-center justify-between px-4'>
                    <div className='h-9 w-9 rounded-full bg-gradient-to-r from-blue-700 to-purple-900 text-white flex items-center justify-center'>
                     <FaUser />
                </div>
                 <button className='text-sm hidden sm:block cursor-pointer transition-all duration-300 hover:scale-105'>Sign In</button>
                    <button className='text-2xl lg:text-3xl text-stone-400 transition-all duration-300 hover:text-white cursor-pointer'
                       onClick={handleCreateDropdown}
                    >
                        <RiArrowDropDownLine />
                    </button>
                </div>
                  </div>

                  { dropdown && (
                    <div className='w-32 sm:w-40 h-8 z-10 flex justify-end mb-4'>
                        <button className="text-white text-xs flex justify-center items-center h-8 w-28 sm:w-35 bg-gradient-to-r from-blue-700 to-purple-900 rounded-full transition-all duration-300 hover:scale-105 hover:font-semibold cursor-pointer">
                          Create Account
                        </button>
                    </div>
                  )}
                  
                                  <div className='w-full max-w-4xl h-80 sm:h-96 lg:h-100 xl:h-110 bg-stone-500/20 backdrop-blur-sm rounded-md border border-stone-500 shadow-lg flex flex-col items-start justify-center px-8'>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-white text-xl sm:text-xl lg:text-2xl font-light'>
                            Valorant Is One of the biggest games right now! Start playing now!
                        </h1>
                        <p className='text-white text-sm sm:text-base'>
                            Join millions of players worldwide and experience the thrill of competitive gaming.
                        </p>
                    </div>
                    <img 
                        src='/Jett.svg'
                        alt='jet'
                        className='max-w-full max-h-full object-contain flex-shrink-0 mt-4'
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard