import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { CiBoxList } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { HiOutlineBell } from "react-icons/hi2";
import { IoAddOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

function Dashboard() {
    const [friends, setFriends] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleValorant = () => {
        window.location.href = 'https://playvalorant.com/en-us/platform-selection/';
    };

    const handleOnlineFriends = () => {
        setFriends((prev) => !prev);
    };

    const handleCreateDropdown = () => {
        setDropdown((prev) => !prev);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-2 sm:p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4">
            
            <div className="h-auto lg:h-screen w-full lg:w-56 xl:w-64 bg-stone-500/30 backdrop-blur-md rounded-lg shadow-lg border border-stone-600 p-4 lg:p-5 flex flex-col justify-between">
                <div>
                    <button className="flex items-center justify-center mt-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg px-4 py-2 shadow-md border border-stone-500 w-full transition-all duration-300 hover:scale-105">
                        <RxDashboard className="mr-2" /> Dashboard
                    </button>
                    <button className="flex items-center justify-center mt-4 text-white hover:bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-2 hover:shadow-md hover:border hover:border-stone-500 w-full transition-all duration-300 hover:scale-105">
                        <CiBoxList className="mr-2" /> Game List
                    </button>
                    <button className="flex items-center justify-center mt-4 text-white hover:bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-2 hover:shadow-md hover:border hover:border-stone-500 w-full transition-all duration-300 hover:scale-105">
                        <LiaUserFriendsSolid className="mr-2" /> Friends
                    </button>
                    <button className="flex items-center justify-center mt-4 text-white hover:bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-2 hover:shadow-md hover:border hover:border-stone-500 w-full transition-all duration-300 hover:scale-105">
                        <HiOutlineBell className="mr-2" /> Notifications
                    </button>

                    <button
                        className="flex items-center justify-center mt-40 text-stone-400 text-[13px] hover:text-white transition-all duration-300"
                        onClick={handleOnlineFriends}
                    >
                        Online Friends <IoAddOutline className="ml-4 text-[20px]" />
                    </button>
                </div>

              
                <button className="flex items-center justify-center mt-10 text-white bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg px-4 py-2 shadow-md border border-stone-500 w-full transition-all duration-300 hover:scale-105">
                    <CgLogOut className="mr-2" /> Log Out
                </button>
            </div>

           
            <div className="flex-1 relative flex flex-col gap-4">
                {friends && (
                    <div className="w-full max-w-3xl h-20 bg-stone-400/30 backdrop-blur-md rounded-lg shadow-lg border border-stone-600 mb-4 flex items-center p-4">
                        <input
                            type="text"
                            placeholder="Search by username"
                            className="flex-1 h-10 rounded-lg p-2 border border-stone-400 focus:outline-none focus:ring-0 mr-2"
                        />
                        <button className="flex items-center justify-center h-10 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg px-4 shadow-md border border-stone-500 transition-all duration-300 hover:scale-105">
                            Add
                        </button>
                    </div>
                )}

                
                <div className="w-full h-16 bg-stone-500/30 backdrop-blur-md rounded-lg shadow-lg border border-stone-600 flex items-center justify-between px-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search for games..."
                        className="w-full max-w-xs h-10 rounded-lg p-2 border border-stone-500 focus:outline-none focus:ring-0 shadow-lg"
                    />
                    <div className="w-36 sm:w-44 h-12 bg-stone-400/20 rounded-full shadow-lg border border-stone-600 flex items-center justify-between px-4 relative ml-4">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-700 to-purple-900 text-white flex items-center justify-center">
                            <FaUser />
                        </div>
                        <button className="text-sm hidden sm:block transition-all duration-300 hover:scale-105">
                            Sign In
                        </button>
                        <button
                            className="text-2xl lg:text-3xl text-stone-400 transition-all duration-300 hover:text-white"
                            onClick={handleCreateDropdown}
                        >
                            <RiArrowDropDownLine />
                        </button>

                        {dropdown && (
                            <div className="absolute top-full mt-2 w-32 sm:w-40 flex justify-center">
                                <button className="text-white text-xs flex justify-center items-center h-8 w-28 sm:w-35 bg-gradient-to-r from-blue-700 to-purple-900 rounded-full transition-all duration-300 hover:scale-105 hover:font-semibold">
                                    Create Account
                                </button>
                            </div>
                        )}
                    </div>
                </div>

               
                <div className="flex flex-col lg:flex-row items-start gap-4">
                   
                    <div className="w-full max-w-4xl bg-stone-500/20 backdrop-blur-sm rounded-md border border-stone-500 shadow-lg flex flex-col lg:flex-row items-center justify-between px-8 py-6">
                        <div className="flex flex-col space-y-4 max-w-md">
                            <h1 className="text-white text-xl lg:text-2xl font-light">
                                Valorant Is One of the biggest games right now! Start playing now!
                            </h1>
                            <p className="text-white text-sm sm:text-base">
                                Join millions of players worldwide and experience the thrill of competitive gaming.
                            </p>
                            <button
                                className="w-[100px] h-[30px] bg-gradient-to-r from-blue-700 to-purple-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105"
                                onClick={handleValorant}
                            >
                                Play now
                            </button>
                        </div>
                        <div className="relative w-full flex justify-end h-111">
                            <img
                                src="/Jett.svg"
                                alt="jet"
                                className="absolute top-10 max-w-xs lg:max-w-sm object-contain"
                            />
                        </div>
                    </div>

                   
                    <div className="w-150 h-128 bg-stone-500/30 backdrop-blur-md border border-stone-600 rounded-lg shadow-lg p-4">
                        <h1 className="text-white text-[25px]">In Library</h1>
                    </div>
                </div>

               
                <div className="mt-6">
                    <h1 className="text-white text-3xl ">
                        Some of your friends are playing these games
                    </h1>
                    <div className='w-80 h-70 bg-white mt-5 rounded-lg shadow-lg'>
                        <img
                          src='/fort.jpg'
                          alt='fortnite'
                          className='object-cover w-full h-full rounded-lg shadow-lg'

                        />
                    </div>
                    <div className='w-80 h-70 bg-white -mt-70 ml-100 rounded-lg shadow-lg'>
                      <img 
                        src='/Eldenring.jpg'
                        alt='Elden Ring'
                        className='object-cover w-full h-full rounded-lg shadow-lg'
                      />
                    </div>
                    <div className='w-80 h-70 bg-white -mt-70 ml-200 rounded-lg shadow-lg'>
                        <img 
                          src='/wz.jpg'
                          alt='Warzone'
                          className='object-cover w-full h-full rounded-lg shadow-lg'
                        />
                    </div>
                    <div className='w-80 h-70 bg-white -mt-70 ml-300 rounded-lg shadow-lg'>
                        <img
                          src='/rivals.jpg'
                          alt='rivals'
                          className='object-cover w-full h-full rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
