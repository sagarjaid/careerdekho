import React, { useEffect, useState } from 'react'
import Modal from '../modal/Modal'

const Career = (props: any) => {
    const [screenSize, steScreenSize] = useState(1024)

    useEffect(() => {
        steScreenSize(window.screen.width)
    }, [screenSize])

    return (
        <div className='flex justify-start flex-col items-center gap-8 h-full'>
            <div className='flex flex-col sm:flex-row w-full max-w-4xl sm:p-4 bg-white'>
                <div className='hidden sm:flex flex-col gap-3 flex-1 p-2'>
                    <h1 className='font-medium'>{props.idpage}</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo purus, volutpat at quam. Donec diam dolor, quis egestas leo tincidunt vitae. Donec purus dui.</p>
                    <img className='hidden sm:block' src="/cover.png" alt="cover" width="550px" />

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
                <div className='mt-4 sm:m-0 flex flex-col'>
                    <div className='flex flex-col gap-4 items-center justify-start p-2'>
                        <img className='ml-3' src="/capth.png" alt="cover" width="260px" />
                        <img className='sm:hidden' src="/cover-mobile.png" alt="cover" width="550px" />
                        <h1 className='font-medium sm:text-xs'> How to become a {props.idpage}</h1>
                        <Modal />
                    </div>

                </div>
            </div>
            {/* <div className="flex justify-center items-center max-w-4xl">
                <div className="flex flex-col text-center p-4">
                    <h4>Super Affordable</h4>
                </div>
            </div> */}
        </div >
    )
}

export default Career