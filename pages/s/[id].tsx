import React from 'react'
import { useRouter } from 'next/router'
import Menu from '../../components/menu/Menu'
import Nav from '../../components/menu/Nav'
import SideBar from '../../components/sidebar/SideBar'
import Career from '../../components/careerAdsPage/CareerPath'


const id = () => {

    const router = useRouter()
    const idpage = router.query.id

    return (
        <div>
            <main className='flex justify-start bg-slate-50 text-base h-screen'>
                {/* menu section */}
                <Menu />
                <section className='w-full flex flex-col'>
                    <Nav />
                    <div className='flex justify-between gap-6 p-4 pt-1'>
                        {/* <div className='flex justify-center w-full bg-gradient-to-b from-white via-gray-100 to-gray-300 rounded-lg border h-full mb-4 sm:p-4'> */}
                        <div className='flex justify-center w-full bg-white rounded-lg border h-full mb-4 sm:p-4'>
                            <Career idpage={idpage} />
                        </div>
                        <SideBar />
                    </div>
                </section>
            </main>
        </div >
    )
}

export default id