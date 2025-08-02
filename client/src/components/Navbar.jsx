import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div className='fixed z-5 w-full backdrop:backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px20 xl:px-32'>
      <img src={assets.logo} alt="" className='w-32 sm:w-44 cursor-pointer' onClick={() => navigate('/')} />


      {
        user ? <UserButton /> : (
          <button onClick={openSignIn}
            className='flex items-center gap-2 rounded-full text-sm bg-primary cursor-pointer text-white px-10 py-2.5'

          >
            Get started <ArrowRight className='w-4 h-4' /> </button>

        )
      }
      {/* if user is login then will show user profile else will show login/getstarted */}

    </div>

  )
}

export default Navbar
