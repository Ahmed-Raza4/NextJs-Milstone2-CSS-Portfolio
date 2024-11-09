import React from 'react'
import Image from 'next/image'
import logo from "../../../data/logo 4.png"
import Link from 'next/link'

const Header = () => {
  return (
    <div className='mainHeader'>
        <div className="logo"> 
         <Link href={"/"}>
        <Image
            src={logo}
            alt="Logo"
            width={70}
            height={70}
        />
        </Link>
        </div>
        <div className="headerTabs">
          <input type="checkbox" className='toggleMenu' />
          <div className="hamburgar"></div>
            <ul className='menu'>
                <Link href={"/"}><li>Home</li></Link>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header