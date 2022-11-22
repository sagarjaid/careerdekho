import { useState } from "react";
import TrendingCareers from "../trending/TrendingCareers";
import data from "./data"

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState("");

    const onChange = (e: any) => {
        setSearchValue(e.target.value);
    };

    const onSearch = (searchTerm: any) => {
        setSearchValue(searchTerm);
        // our api to fetch the search result

        // const url = `${window.location.hostname}\\s\\${searchTerm}`

        const url = `\\s\\${searchTerm}`

        window.location.href = url;

        console.log(window.location.href);

        console.log("search ", searchTerm);
    };

    return (
        <>
            <div className='flex relative z-10 w-full sm:w-[512px] max-w-2xl flex-col justify-center my-2 border rounded-xl'>
                {/* <div className="flex items-center border h-10 rounded-full"> */}
                <div className="flex items-center h-10">
                    <span className="pl-2 pr-2">
                        {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg> */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                    <input className={searchValue ? 'w-full h-8 outline-0' : 'w-full h-8 outline-0 text-center'} type="text" value={searchValue} placeholder="Search any career here..." onChange={onChange} />
                    <button className='pl-2 pr-2' onClick={() => onSearch(searchValue)}> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                </div>
                {/* {value && <div className="mt-2 overflow-y-auto max-h-60 border border-t-0 rounded-b-xl pt-4"> */}
                <div className={searchValue && "overflow-y-auto max-h-60 rounded-b-xl"} >
                    {data
                        .filter((item) => {
                            const searchTerm = searchValue.toLowerCase();
                            const careerName = item.name?.toLowerCase();

                            return (
                                searchTerm &&
                                careerName?.startsWith(searchTerm) &&
                                careerName !== searchTerm
                            );
                        })
                        .slice(0, 50)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.name)}
                                className='relative text-left py-1.5 cursor-pointer p-2'
                                key={item.name}
                            >
                                <div className="flex justify-between h-fit">
                                    <span>{item.name}</span>
                                    <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div>

                {!searchValue && <>
                    <h3 className="mb-8">Trednding career searches across india</h3>
                    <TrendingCareers />
                </>}
            </div>
        </>
    )
}

export default SearchBar