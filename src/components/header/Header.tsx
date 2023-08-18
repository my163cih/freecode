import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../../public/logo.svg'

type HeaderProps = {

}

const Header:React.FC<HeaderProps> = () => {
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
          <Link href='/auth'>
            <button className='bg-dark-fill-3 pyy-1 px-2 cursor-pointer rounded'>Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header