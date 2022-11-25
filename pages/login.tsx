import { useState } from 'react'
import Menu from '../components/menu/Menu'
import Nav from '../components/menu/Nav'
import SearchCard from '../components/search/card/SearchCard'
import SideBar from '../components/sidebar/SideBar'

const SignIn = () => {
    const [toggle, setToggle] = useState(false)
    const [opt, setOtp] = useState(false)

    const handleOtp = () => {
        setOtp(!opt)
    }

    const handleToggle = () => {
        console.log("toogle got clicked");
        setToggle(!toggle)
    }
    return (
        <div>
            <main className='flex justify-start bg-white text-base h-screen'>
                {/* menu section */}
                <section className="hidden lg:flex  flex-col justify-between w-64 bg-neutral-900 h-screen p-4 pt-7">
                    <div>
                        {/* logo */}
                        <div className="mb-5 cursor-pointer">
                            <a href="/">
                                <img
                                    src="https://careerdekho.co/wp-content/uploads/2022/05/careerdekho-logo-white-v1.png"
                                    alt="logo"
                                    width="130px"
                                />
                            </a>
                        </div>
                        {/* menu item */}
                    </div>
                </section >
                <section className='w-full flex flex-col'>
                    <Nav isLogin={true} />
                    <div className='flex justify-between gap-6 p-4 pt-1 h-screen'>
                        <div className='flex  justify-center lg:justify-start items-center w-full bg-white h-full mb-4 p-4'>
                            <div className='flex flex-col justify-center items-start gap-3 bg-slate-50 p-4 border rounded-md' >
                                {!toggle && !opt && <>
                                    <h1 className='font-medium'>Login</h1>
                                    {/* <button type="submit" className="bg-green-700 text-slate-50 w-64 py-1.5 px-6 rounded-2xl">Signin with Google</button> */}
                                    <img
                                        src="https://www.vizio.com/en/account/images/buttons-social-google-web.png"
                                        alt="logo"
                                        width="240px"
                                    />
                                    <p className='text-blue-500 text-xs underline cursor-pointer' onClick={handleToggle}>OR SIGN IN WITH PHONE</p>
                                </>}

                                {toggle && !opt && <>
                                    <h1 className='font-medium'>Login</h1>
                                    <div className="flex w-full justify-between items-center text-sm gap-2 h-10">
                                        <span>+91</span>
                                        <input
                                            type="phone"
                                            className=" w-full py-2 px-4 rounded-md text-sm border"
                                            name="phone"
                                            placeholder="WhatsApp number" />
                                    </div>
                                    <p className='text-blue-500 text-xs underline cursor-pointer' onClick={handleToggle}>OR SIGN IN WITH GOOGLE</p>
                                    <p className='text-xs'>by siging up with us you agree the T&c and  Privacy Policy</p>
                                    <button type="submit" className="bg-green-700 text-slate-50 w-36  py-1.5 px-4 rounded-full" onClick={handleOtp}>SEND OTP</button>
                                </>}

                                {opt && <>
                                    <div className='flex justify-between items-center w-full'><h1 className='font-medium'>Login with OTP</h1> <div className='text-xs' onClick={handleOtp}>Back</div></div>
                                    <input
                                        type="phone"
                                        className=" w-full py-2 px-4 rounded-md text-sm border h-10"
                                        name="phone"
                                        placeholder="Otp" />
                                    <p className='text-xs'>6 digit opt is sent to +918898720799</p>
                                    <p className='text-blue-500 text-xs underline cursor-pointer float-right'>re-SEND OTP</p>
                                    <button type="submit" className="bg-green-700 text-slate-50 w-36  py-1.5 px-4 rounded-full">sign up</button>
                                </>}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}

export default SignIn