import React from 'react'

const TrendingCareers = () => {
    return (
        <div className='flex flex-wrap max-w-lg text-xs justify-center items-center gap-x-2 gap-y-2 sd:gap-x-4 sd:gap-y-5'>
            <div className='flex flex-col gap-x-2 gap-y-2 sd:gap-x-4 sd:gap-y-5'>
                <div className="flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Software Engineer</p>
                </div>
                <div className="flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Civil Engineer</p>
                </div>
                <div className="flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Fashion Designer</p>
                </div>
                <div className="hidden sd:flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Astronaut</p>
                </div>
            </div>
            <div className='flex flex-col gap-x-2 gap-y-2 sd:gap-x-4 sd:gap-y-5'>
                <div className="flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Graphic Designer</p>
                </div>
                <div className="hidden sd:flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Digital Marketing</p>
                </div>
                <div className="flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Air Hostess</p>
                </div>
                <div className="flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Web Designing</p>
                </div>
            </div>
            <div className='flex flex-col gap-x-2 gap-y-2 sd:gap-x-4 sd:gap-y-5'>
                <div className="hidden sd:flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Photographer</p>
                </div>
                <div className="hidden sd:flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Dentist</p>
                </div>
                <div className="hidden sd:flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Data Scientist</p>
                </div>
                <div className="hidden sd:flex sd:text-sm justify-start items-center gap-1">
                    <img className="w-6 h-6" src="/trending.svg" alt="trending" />
                    <p>Youtuber</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingCareers