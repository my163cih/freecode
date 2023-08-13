'use client'
import React from 'react'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'


import { authModalState } from '@/atoms/authModalAtom'
import AuthModal from '@/components/modals/AuthModal'
import Navbar from '@/components/navbar/Navbar'

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState)

  return (
    <div className='bg-gradient-to-b from-black to-gray-200 h-screen relative'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none '>
          <Image src='/hero2.png' alt='' width={500} height={250} />
          <Image src='/tech_companies.png' alt='' width={700} height={400} />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  )
}

export default AuthPage
