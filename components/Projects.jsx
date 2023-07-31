import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TournamentImg from '../public/assets/projects/tournament.png';
import Solidity from '../public/assets/skills/Solidity.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='font-bold text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4 '>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-6'>
        <div className='p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='py-8 text-center'>
        <Image py-4 src={Solidity} width='64px' height='64px' alt='/'/>
        <div className='py-2 font-semibold text-[#3cbb40] text-center'>
        <a href='https://github.com/vineethkalimili/Moraland' target="_blank" rel="noopener noreferrer">
        &quot;Moraland DApp&quot;
        </a>
        </div>
        <p className='font-bold py-2 mb-2' >
            `&quot;Moraland&quot; is a decentralized application (DApp) that utilizes blockchain technology to enable plot claiming 
            and interactive map management for a virtual world.`
        </p>
        <p className='font-bold text-center text-emerald-800'>
            Development Tools
        </p>
        <p className='font-semibold'>
          Solidity,YUL,OpenZeppelin,HTML,JavaScript
        </p>
        </div>
        </div>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
        <div className='p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='py-8 text-center'>
        <Image py-4 src={TournamentImg} width='95px' height='95px' alt='/'/>
        <div className='py-2 font-bold text-[#3cbb40] text-center'>
        <a href='https://github.com/vineethkalimili/Tournament-bracket-generator' target="_blank" rel="noopener noreferrer">
        &quot;Tournament-Bracket-Generator DApp&quot;
        </a>
        </div>
        <p className='font-bold py-2 mb-2' >
            `&quot;Tournament-Bracket-Generator&quot; is a decentralized application (DApp) that utilizes blockchain technology to conduct Tournament Matches.`
        </p>
        <p className='font-bold text-center text-emerald-800'>
            Development Tools
        </p>
        <p className='font-semibold'>
          Solidity,NextJS,HTML,CSS,JavaScript
        </p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
