'use client'
import React, { useState } from 'react'
import Logo from '../shared/Logo'
import Link from 'next/link'
import { IoSearchSharp } from 'react-icons/io5'
import { BsCart } from 'react-icons/bs'
import { CiHeart, CiUser } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='h-[58px] text-black flex justify-between items-center px-3 md:px-9'>
      <div><Logo /></div>

      {/* Desktop Navigation */}
      <div className='md:flex hidden text-zinc-400 text-[14px] md:gap-[15px] font-semibold'>
        <Link href="/">Home</Link>
        <Link className='flex gap-3 items-center text-zinc-500' href="/shop">Shop <span><IoIosArrowDown /></span></Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/products">Products</Link>
        <Link href="/pricing">Pricing</Link>
      </div>

      {/* Right Icons */}
      <div className='flex items-center gap-[20px]'>
        <div className='md:flex hidden items-center gap-[5px]'>
          <div><CiUser color='blue' /></div>
          <div className='text-[14px] text-blue-500 font-bold'>Login/Register</div>
        </div>
        <div><IoSearchSharp color='blue' /></div>
        <div>
          <Link href="/your_cart">
          <BsCart color='blue' size={20} />
          </Link>
          </div>
        <div><CiHeart color='blue' size={20} className='md:block hidden' /></div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-black'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[58px] left-0 right-0 bg-white shadow-lg z-10 flex flex-col items-center gap-4 py-4">
          <Link href="/">Home</Link>
          <Link className='flex gap-3 items-center' href="/shop">Shop <span><IoIosArrowDown /></span></Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/products">Products</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
      )}
    </div>
  )
}

export default Header
