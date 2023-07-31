import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import ProfileImg from '../public/assets/profile.png';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-70 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
          <Image alt="Profile Photo" src={ProfileImg} />
          </div>

          <h1 className='py-4 text-gray-700'>
            <span className='text-[#53abcb]'> Vineeth Kalimili</span>
          </h1>
          <h2 className='py-2 text-gray-600'>Web3 Full Stack Developer</h2>
          <p className='py-4  text-gray-600 sm:max-w-[80%] m-auto'>
            I’m focused on building Decentralized Applications, Blockchain integration,  
            responsive front-end.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/vineeth-kalimili-46a326216/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-blue-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/vineethkalimili'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='https://twitter.com/VineethKalimil1'>
              <div className='rounded-full shadow-lg shadow-blue-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaTwitter />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
