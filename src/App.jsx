import { useState } from 'react'
import myProfile from './assets/my-profile4.png'
import ParticleComponent from './components/Elements/ParticleComponent';
import Typewriter from './components/Elements/Typewriter';
import Typewriter2 from './components/Elements/Typewriter2';
import ThemeDropdown from './components/Fragments/ThemeDropdown';


function App() {
  return (
    <>
      <div className='flex justify-center'>
        <ParticleComponent />
        <ul className='fixed z-10 p-2 px-6 border border-gray-100 shadow rounded-full top-0 flex items-center gap-10 font-semibold text my-6'>
          <li className='p-1 px-4 bg-gray-100 text-secondary rounded-xl'><a href="#">Home</a></li>
          <li><a href="#">Background</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className='fixed top-5 right-5'>
          <ThemeDropdown />
        </div>
        <div className='w-3/4 flex flex-col items-center'>
          <div className='min-h-screen w-full flex justify-center items-center relative flex-col my-12 py-32'>
            <div className='relative'>
              <div className='flex justify-center w-full bottom-0 z-[-1]'>
                <img src={myProfile} className='w-[450px] grayscale-[90%]' alt="my-profile" />
              </div>
              <div className='relative top-[-15px]'>
                <div className='absolute w-full py-10 bg-gray-100 rounded-xl shadow-xl opacity-25'>
                </div>
                <p className='text-7xl relative opacity-100 font-extrabold bg-gradient-to-r opacity-full from-light to-secondary text-gradient antialiased tracking-tighter'>Hi. I'm Azis Zuhri Pratomo.</p>
              </div>
            </div>
            <Typewriter2
              tulisan={["A Software Engineer", "A Tech Enthusiast", "A Long Life Learner"]}
              css='text-6xl font-bold text-white opacity-75 transition-opacity duration-300 hover:opacity-100'
            />
            <p className='my-6 font-semibold w-1/3 text-center opacity-75 text-white'>I passionate to <span className='underline underline-offset-6 decoration decoration-light-primary font-bold text-light-primary'>designing</span> software architecture to <span className='underline underline-offset-6 decoration decoration-light font-bold text-light'>solve</span> user-centered problems.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
