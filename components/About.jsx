import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full  p-2 flex items-center py-2'>
      <div className=' max-w-[1240px] m-auto md:grid grid-cols-2 gap-2'>
        <div className='col-span-2'>
          <h1 className='uppercase text-xl tracking-widest text-[#1d17c6]'>
            About
          </h1>
          <p className='py-2 font-bold  text-gray-600'>
            I specialize in building Decentralized applications that connect with SmartContracts and integrated with Web3 wallets. I’m passionate about learning new technologies.
          </p>
          <h1 className='py-4 uppercase text-xl tracking-widest text-[#1d17c6]'>
            Experience
          </h1>
          <p className='py-0 font-bold text-gray-600'>
          Innovative, task-driven professional with 1.9 years of experience in Ascendion Engineering Private Limited as 
          a Blockchain developer. Equipped with a record of success in consistently identifying and providing the 
          technological needs of companies through ingenious innovation. Proficient in writing smart contracts, writing, 
          and testing codes, troubleshooting simple/complex issues, and implementing new features based on user 
          feedback. Looking to join an organization where an opportunity for growth and professional development is 
          embraced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
