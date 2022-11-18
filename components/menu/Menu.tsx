import React, { useState } from 'react'

const Menu = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        console.log("toogle got clicked");
        setToggle(!toggle)
    }
    return (
        <section className={toggle ? 'hidden lg:flex flex-col justify-between w-20 bg-white h-screen p-4 pt-7' : 'hidden lg:flex  flex-col justify-between w-64 bg-white h-screen p-4 pt-7'}>

            <div>
                {/* logo */}
                <div className="mb-5 cursor-pointer">
                    <img
                        src="https://careerdekho.co/wp-content/uploads/2022/05/careerdekho-logo.png"
                        alt="logo"
                        width="130px"
                    />
                </div>
                {/* menu item */}

                <div className={toggle ? "flex justify-center items-center h-10 cursor-pointer" : "flex justify-start items-center h-10 cursor-pointer"}>
                    <span
                    ><svg className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg></span>
                    {!toggle && <span className="m-1">Dashboard</span>}
                </div>

                <div className={toggle ? "flex justify-center items-center h-10 cursor-pointer" : "flex justify-start items-center h-10 cursor-pointer"}>
                    <span><svg className="w-5 h-5 m-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>
                    {!toggle && <span className="m-1">Discover</span>}
                </div>

                <div className={toggle ? "flex justify-center items-center h-10 cursor-pointer" : "flex justify-start items-center h-10 cursor-pointer"}>
                    <span
                    ><svg className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg></span>
                    {!toggle && <span className="m-1">Profile</span>}
                </div>

                <div className={toggle ? "flex justify-center items-center h-10 cursor-pointer" : "flex justify-start items-center h-10 cursor-pointer"}>
                    <span
                    ><svg className="w-5 h-5 m-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg></span>
                    {!toggle && <span className="m-1">Settings</span>}
                </div>

                <div className={toggle ? "flex justify-center items-center h-10 cursor-pointer" : "flex justify-start items-center h-10 cursor-pointer"}>
                    <span
                    ><svg className="w-5 h-5 m-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg></span>
                    {!toggle && <span className="m-1">Support</span>}
                </div>

                <div className={toggle ? "flex justify-center items-center h-10 cursor-pointer" : "flex justify-start items-center h-10 cursor-pointer"}>
                    <span
                    ><svg className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" /></svg></span>
                    {!toggle && <span className="m-1">Invite friend</span>}
                </div>

                <div className={toggle ? "flex justify-center items-center h-10 cursor-pointer" : "flex justify-start items-center h-10 cursor-pointer"}>
                    <span
                    ><svg className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg></span>
                    {!toggle && <span className="m-1">Logout</span>}
                </div>
            </div>

            {/* menu toggle  */}

            <div className={toggle ? "flex justify-center items-center cursor-pointer" : "flex justify-end items-center cursor-pointer"} onClick={handleToggle}>
                {!toggle && <span className=" text-xs mb-0.5 mr-2 text-gray-600">Toggle</span>}
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="gray"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    ></path>
                </svg>
            </div>
        </section >
    )
}

export default Menu