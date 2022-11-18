import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/menu/Menu'
import Nav from '../components/menu/Nav'
import SearchCard from '../components/search/card/SearchCard'
import SearchBar from '../components/search/SearchBar'
import SideBar from '../components/sidebar/SideBar'

const Home: NextPage = () => {
  return (
    <div>
      <main className='flex justify-start bg-slate-50 text-base h-screen'>
        {/* menu section */}
        <Menu />
        <section className='w-full flex flex-col'>
          <Nav />
          <div className='flex justify-between gap-6 p-4 pt-1 h-screen'>
            <div className='flex justify-center w-full bg-white rounded-lg border h-full mb-4 p-4'>
              <SearchCard />
            </div>
            <SideBar />
          </div>
        </section>
      </main>
    </div >
  )
}

export default Home