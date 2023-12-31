import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSetRecoilState } from 'recoil'

import Logo from '../../../public/logo.svg'
import { authModalState } from '@/atoms/authModalAtom'

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleSigninClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }))
  }

  return (
    <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
      <Link href='/' className='flex item-center justify-center h-20'>
        <div className='flex items-center justify-center h-auto w-7 mx-2 pb-1'>
          <img
            src='/icon.png'
            alt='Freecode'
            className=''
            width={75}
            height={88}
          />
        </div>
        <Image
          src={Logo}
          alt='FreeCode'
          className='h-full'
          width={150}
          height={40}
        />
      </Link>
      <div className='flex items-center'>
        <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out' onClick={handleSigninClick}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Navbar
