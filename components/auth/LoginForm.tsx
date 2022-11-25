import { useState } from 'react'

const Loginform = () => {

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
        <div className='flex flex-col justify-center items-start gap-3 w-full h-full  p-4' >
            {!toggle && !opt && <>
                {/* <button type="submit" className="bg-green-700 text-slate-50 w-64 py-1.5 px-6 rounded-2xl">Signin with Google</button> */}
                <img
                    src="https://www.vizio.com/en/account/images/buttons-social-google-web.png"
                    alt="logo"
                    width="240px"
                />
                <p className='text-blue-500 text-xs underline cursor-pointer' onClick={handleToggle}>OR SIGN IN WITH PHONE</p>
            </>}

            {toggle && !opt && <>
                <h1 className='font-medium'>Mobile Number</h1>
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
                <div className='flex justify-between items-center w-full'><h1 className='font-medium'>OTP Verification</h1> <div className='text-xs' onClick={handleOtp}>Back</div></div>
                <input
                    type="phone"
                    className=" w-full py-2 px-4 rounded-md text-sm border h-10"
                    name="phone"
                    placeholder="Otp" />
                <p className='text-xs'>6 digit opt is sent to +918898720799</p>
                <p className='text-blue-500 text-xs underline cursor-pointer float-right'>re-SEND OTP</p>
                <button type="submit" className="bg-green-700 text-slate-50 w-36  py-1.5 px-4 rounded-full">DONE</button>
            </>}
        </div>
    )
}

export default Loginform