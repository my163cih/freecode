import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RxAvatar } from 'react-icons/rx'
 
import { auth } from '@/firebase/firebase'

import Logo from '../../../public/logo.svg'
import Logout from '../buttons/Logout'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '@/atoms/authModalAtom'

type HeaderProps = {

}

const Header:React.FC<HeaderProps> = () => {
  const [user] = useAuthState(auth)
  const setAuthModalState = useSetRecoilState(authModalState)


  return (
    <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
      <div className='flex w-full ites-center justify-between max-w-[1200px] mx-auto'>
        <Link href='/' className='h-[22px] flex-1'>
          <Image
            src={Logo}
            alt='FreeCode'
            className='h-full'
            width={150}
            height={40}
          />
        </Link>
        <div className='flex items-center space-x-4 flex-1 justify-end'>
          <div>
            <a href='/' rel='noreferrer' className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'>
              Premium
            </a>
          </div>
          {!user ? (
            <Link href='/auth' onClick={() => setAuthModalState(prev => ({ ...prev, isOpen: true, type: 'login' }))}>
              <button className='bg-dark-fill-3 pyy-1 px-2 cursor-pointer rounded'>Sign In</button>
            </Link>
          ) : (
            <div className='cursor-pointer group relative'>
              {user.photoURL ? (
                <Image src={user.photoURL} alt='profile' width={30} height={30} className='h-8, w-8 rounded-full'/>
              ) : (
                <RxAvatar size='30' />
              )}
              <div className='absolute top-10 left-2/4 -translate-x-24 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'>
                <p className='text-sm'>{user.email}</p>
              </div>
            </div>
          )}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  )
}

export default Header