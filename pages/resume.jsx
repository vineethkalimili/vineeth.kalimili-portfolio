import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Vineeth Kalimili | Resume</title>
        <meta
          name='description'
          content='I’m a Web3 Fullstack developer specializing in building DApps.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Vineeth Kalimili</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/vineeth-kalimili-46a326216/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/vineethkalimili'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web3 Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web3 Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Innovative, task-driven professional with 1.9 years of experience in Ascendion Engineering Private Limited as 
a Blockchain developer. Equipped with a record of success in consistently identifying and providing the 
technological needs of companies through ingenious innovation. Proficient in writing smart contracts, writing, 
and testing codes, troubleshooting simple/complex issues, and implementing new features based on user 
feedback. Looking to join an organization where an opportunity for growth and professional development is 
embraced
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Fullstack Web3 Developer
            <span className='px-2'>|</span>Solidity
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>Html
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>MongoDb
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>RESTAPI
            <span className='px-2'>|</span>Github
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        <li className='font-bold' > Working as an Senior Associate Software Engineer at Ascendion Engineering Private Limited from Nov 2021
        </li>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            ASCENDION ENGINEERING PVT LTD
            </span>
            <span className='px-2'>|</span>Bangalore, India
          </p>
          <p className='py-1 italic'>Senior Associate Software Engineer (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Blockchain Developer with good knowledge in building cost effective SmartContracts.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins.
            </li>
          </ul>
        </div>


       
        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Project Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Project1 : Circle NFT Badges Project</span>
          </p>
          <p className='py-1 '>April 2022 - To Till Date</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Circle NFT badge is a tool where NFT&apos;s are issued to the employees based on their mastery levels in circles.
            </li>
            <li>
            Circles are groups within the organization whose focus is to Identify and elevate technologists with the 
            latest skills for a sustainable future. Combine business and tech skills from key functions across the 
            board, deliver effective engineering solutions, and Mentor people across circles to succeed.
            </li>
            <li>
            Every employee in the organization belongs to at least 1 circle according to theirskillset, area of 
            interest, and area of specialty.
            </li>
            <li>
            Circle NFT badges are non-fungible tokens that are unique batches for everyone.
            </li>
            <li>
            As the employee enhances theirskillsets a new NFT badges of higher level is issued to him.
            </li>
            <li>
              Techstack : Hyperledger Fabric, Node.js, React, and Tailwind CSS.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Project2 : Decentralized Travel-Realm Project</span>
          </p>
          <p className='py-1 '>Dec 2022 - To Till date</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Web3 Decentralized website to book hotels.
            </li>
            <li>
            End user will be the Hotel owner,who will accepts the stays.
            </li>
            <li>
              Techstack : Solidity, Hardhat, Polygon, and React.
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default resume;
