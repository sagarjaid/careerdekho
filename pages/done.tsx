import { useEffect, useState } from 'react'
import Nav from '../components/menu/Nav'

import { getAuth, signInWithPopup, GoogleAuthProvider, RecaptchaVerifier } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { intiFirebase } from '../firebase/Firebase'
import { useRouter } from "next/router";

import React from 'react'

const Done = () => {
    const [toggle, setToggle] = useState(false)
    const [opt, setOtp] = useState(false)


    intiFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);
    }

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>;
    }

    if (user) {
        // router.push("/");
        console.log(user, "user login Page");
    }

    if (!user) {
        console.log("no user found: login Page");

    }

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
                <section className="hidden lg:flex  flex-col justify-between w-2/5 bg-neutral-900 h-screen p-4 pt-7">
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
                    <div className="flex justify-center items-center p-4 border-b lg:border-0">
                        <div className="lg:hidden cursor-pointer">
                            <a href="/">
                                <img
                                    src="https://careerdekho.co/wp-content/uploads/2022/05/careerdekho-logo.png"
                                    alt="logo"
                                    width="130px"
                                />
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-between gap-6 p-4 pt-1 h-screen'>
                        <div className='flex  justify-center lg:justify-start items-center w-full bg-white h-full mb-4 p-4'>
                            <div className='flex flex-col justify-center items-start gap-3 bg-slate-50 p-4 border rounded-md' >
                                <h2 className='text-xl'>Thank you!</h2>
                                <p>We have capured your intrest </p>
                                <p>One of your career experts will contact you soon</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}

export default Done