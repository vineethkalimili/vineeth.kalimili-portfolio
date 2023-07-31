import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Mail = () => {
  return (
    <div id='mail' className='w-full '>
    <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
      <p className='font-bold text-xl tracking-widest uppercase text-[#5651e5]'>
         Contact Details
      </p>
    </div>
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto">
        <p className="text-center">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <ul className="flex justify-center mt-2">
          <li className="mr-9">
            <Link href="/"><a  className="text-white">Home</a></Link>
            </li>
          <li className="mr-9">
            <p  className="text-white">Email : vineeth.k.nsrv@gmail.com</p>
            </li>
          <li className="mr-9">
            <p  className="text-white">ContactNo:9676064483</p>
            </li>
        </ul>
      </div>
    </footer>
    </div>
  )
}

export default Mail
