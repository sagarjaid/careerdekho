import React from 'react'

const Career = (props: any) => {
    return (
        <div className='flex justify-center flex-col items-center gap-8 h-full'>
            {/* <div className='sm:border rounded-xl flex flex-col-reverse sm:flex-row w-full max-w-2xl p-4 bg-white'> */}
            <div className='flex flex-col-reverse sm:flex-row w-full max-w-2xl p-4 bg-white'>
                <div className='flex flex-col gap-3 flex-1 p-2'>
                    <h1 className='font-medium'>{props.idpage}</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo purus, venenatis nec posuere id, volutpat at quam. Donec diam dolor, egestas id pellentesque id, lacinia nec ipsum. Donec varius vulputate tellus, quis egestas leo tincidunt vitae. Etiam efficitur augue at mi lacinia, nec mollis purus consectetur. Donec purus dui.</p>
                    <h3 className='font-medium text-sm'>What's init for you?</h3>
                    <div className='flex text-xs gap-6'>
                        <div className='flex flex-col gap-x-2 gap-y-2 sd:gap-x-4 sd:gap-y-4'>
                            <div className="flex sd:text-sm justify-start items-center gap-1">
                                <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                                <p>point 1</p>
                            </div>
                            <div className="flex sd:text-sm justify-start items-center gap-1">
                                <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                                <p>point 3</p>
                            </div>
                            <div className="flex sd:text-sm justify-start items-center gap-1">
                                <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                                <p>point 5</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-x-2 gap-y-2 sd:gap-x-4 sd:gap-y-4'>
                            <div className="flex sd:text-sm justify-start items-center gap-1">
                                <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                                <p>point 2</p>
                            </div>
                            <div className="flex sd:text-sm justify-start items-center gap-1">
                                <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                                <p>point 4</p>
                            </div>
                            <div className="flex sd:text-sm justify-start items-center gap-1">
                                <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                                <p>point 6</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='border rounded-xl flex-1 flex flex-col items-center justify-center p-2'>
                        <input
                            type="text"
                            className="block w-full py-2 px-4 rounded-lg mb-4 text-sm border"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            className="block w-full py-2 px-4 rounded-lg mb-4 text-sm border"
                            name="email"
                            placeholder="Email" />

                        <span className="flex w-full justify-between items-center mb-4 text-sm ">
                            <select name="country">
                                <option value="+91">+91</option>
                            </select>
                            <input
                                type="phone"
                                className=" w-full py-2 px-4 rounded-lg text-sm border"
                                name="phone"
                                placeholder="WhatsApp Phone" />
                        </span>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white w-full py-2 px-4 rounded-full"
                        >UNLOCK THIS</button>
                        <div className="text-center text-[8px] text-grey-dark mt-4">
                            you are agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                T&C
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center max-w-3xl">
                <div className="flex flex-col text-center p-4">
                    <span className='flex justify-center'><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                    <h4>Super Affordable</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet</h5>
                </div>
            </div>

        </div >
    )
}

export default Career