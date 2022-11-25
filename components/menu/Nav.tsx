import { useState } from 'react'
import Menu from './Menu'

const Nav = (props: any) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        console.log("toogle got clicked");
        setToggle(!toggle)
    }
    return (
        <>
            <div className="flex justify-between items-center p-4 border-b lg:border-0">
                <div className="lg:hidden cursor-pointer">
                    <a href="/">
                        <img
                            src="https://careerdekho.co/wp-content/uploads/2022/05/careerdekho-logo.png"
                            alt="logo"
                            width="130px"
                        />
                    </a>
                </div>
                <div className="block"></div>
                <div className="flex justify-around items-center">

                    {props.isLogin ? <div className='flex justify-between items-center gap-2'>
                        <span className='text-sm hidden sd:block'>Don’t have an account?</span>
                        <button type="submit" className="bg-slate-50 text-gray-500 border-2 w-max px-1 rounded-lg">sign up</button>
                    </div> : props.isSingup ? <div className='flex justify-between items-center gap-2'>
                        <span className='text-sm hidden sd:block'>Already have an account?</span>
                        <button type="submit" className="bg-slate-50 text-gray-500 border-2 w-max px-1 rounded-lg">sign-in</button>
                    </div> : ""}

                    {!props.isLogin && !props.isSingup &&

                        (
                            <>
                                <span className="hidden lg:inline">
                                    <svg
                                        className="w-6 h-6 m-1 cursor-pointer"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                                    </svg>
                                </span>
                                <span
                                    className="lg:hidden"
                                    onClick={handleToggle}
                                > <svg
                                    className="w-6 h-6 m-1 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </>
                        )

                    }

                    {/* mobile menu */}
                    <div className='absolute top-0 left-0 z-50 text-xs min-w-max'>
                        <section className={toggle ? "lg:hidden translate-x-0 easy-in-out duration-1000 flex flex-col justify-between w-full bg-neutral-900 h-screen p-4 pt-7" : "hidden"}>
                            <div>
                                {/* logo */}
                                <div className="cursor-pointer">
                                    <a href="/">
                                        <img
                                            src="https://careerdekho.co/wp-content/uploads/2022/05/careerdekho-logo-white-v1.png"
                                            alt="logo"
                                            width="130px"
                                        />
                                    </a>
                                    <span className='relative -bottom-5 -right-[150px] -top-6'>
                                        <svg className="w-6 h-6" onClick={handleToggle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </span>
                                </div>
                                {/* menu item */}

                                <div className={"flex justify-start items-center h-10 cursor-pointer text-slate-50"}>
                                    <span
                                    ><svg className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg></span>
                                    {<span className="m-1">Dashboard</span>}
                                </div>
                                <div className={"flex justify-start items-center h-10 cursor-pointer text-slate-50"}>
                                    <span><svg className="w-5 h-5 m-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>
                                    {<span className="m-1">Discover</span>}
                                </div>

                                <div className={"flex justify-start items-center h-10 cursor-pointer text-slate-50"}>
                                    <span
                                    ><svg className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg></span>
                                    {<span className="m-1">Profile</span>}
                                </div>

                                <div className={"flex justify-start items-center h-10 cursor-pointer text-slate-50"}>
                                    <span
                                    ><svg className="w-5 h-5 m-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg></span>
                                    {<span className="m-1">Settings</span>}
                                </div>

                                <div className={"flex justify-start items-center h-10 cursor-pointer text-slate-50"}>
                                    <span
                                    ><svg className="w-5 h-5 m-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg></span>
                                    {<span className="m-1">Support</span>}
                                </div>

                                <div className={"flex justify-start items-center h-10 cursor-pointer text-slate-50"}>
                                    <span
                                    ><svg className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" /></svg></span>
                                    {<span className="m-1">Invite friend</span>}
                                </div>

                                <div className={"flex justify-start items-center h-10 cursor-pointer text-slate-50"}>
                                    <span
                                    ><svg className="w-5 h-5 m-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg></span>
                                    {<span className="m-1">Logout</span>}
                                </div>
                            </div>
                        </section >
                    </div>
                </div>
            </div >

        </>
    )
}

export default Nav