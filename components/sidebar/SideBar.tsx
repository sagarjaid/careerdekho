import React from 'react'

const SideBar = () => {
    return (
        <div className='hidden lg:visible lg:flex w-64  flex-col gap-4 p-1 mt-2'>
            <div className="flex justify-start items-center text-sm cursor-pointer">
                <span
                ><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                <span className="m-1">About this section</span>
            </div>
            <div className='text-xs text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula magna iaculis tortor hendrerit, nec tincidunt quam eleifend. Morbi sagittis.</div>
            <div className='text-xs text-gray-600'>Privacy • T&C • About • Support</div>
            <div className='text-xs text-gray-600'>© 2022 | CAREERDEKHO</div>
        </div>
    )
}

export default SideBar