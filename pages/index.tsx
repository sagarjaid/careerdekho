import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/menu/Menu'
import Nav from '../components/menu/Nav'
import SearchCard from '../components/search/card/SearchCard'
import SearchBar from '../components/search/SearchBar'
import SideBar from '../components/sidebar/SideBar'
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { intiFirebase } from '../firebase/Firebase'



const Home: NextPage = () => {

  intiFirebase();

  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  console.log(user?.photoURL);

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }

  if (user) {
    // router.push("/");
    console.log(user);

  }
  if (!user) {
    router.push("/login");
  }


  return (
    <div>
      <main className='flex justify-start bg-white text-base h-screen'>
        {/* menu section */}
        <Menu />
        <section className='w-full flex flex-col'>
          <Nav photoURL={user?.photoURL} />
          <div className='flex justify-between gap-6 p-4 pt-1 h-screen'>
            <div className='flex justify-center w-full bg-white h-full mb-4 p-4'>
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