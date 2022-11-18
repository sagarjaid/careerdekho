import React from 'react'
import SearchBar from '../SearchBar'


const SearchCard = () => {
    return (
        <div className='flex flex-col items-center mt-20 w-auto h-auto text-center gap-6'>
            <div className="cursor-pointer">
                <img
                    className='w-44 sd:w-80'
                    src="https://careerdekho.co/wp-content/uploads/2022/05/careerdekho-logo-xlg-v2.png"
                    alt="logo"
                />
            </div>
            <h2 className='max-w-sm text-sm '>Search from a library of careers and we will walk you through you career path step-by-step</h2>
            <SearchBar />

        </div>
    )
}

export default SearchCard