"use client";

import Head from 'next/head';
import { FaLinkedin, FaVimeo, FaGithub, } from 'react-icons/fa';
import Img from 'next/image';
import { useState } from 'react';

export default function home () {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: 'BMW | Alexa', category: '2D Animation', img: '/images/wizard-thumb.jpg' },
    { id: 2, title: 'Pringles | New Visual', category: 'Development', img: '/images/wizard-thumb.jpg' },
    { id: 3, title: 'Cinema Olympia | Requalificação', category: 'Animation', img: '/images/wizard-thumb.jpg' },
    { id: 4, title: 'Vale | Stories We Can Avoid', category: 'Development', img: '/images/wizard-thumb.jpg' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <Head>
        <title>Luan Carvalho Portfolio</title>
        <meta name="description" content="frontend Developer | Motion Designer" />
      </Head>

      {/* Nav Bar Start */}
      <div className='fixed top-0 left-0 w-full bg-white bg-opacity-50 backdrop-blur-md p-6 z-50'>
        <div className='flex items-center h-24 px-14'>

          {/* Logo */}
          <div className='flex-1 h-24'>
            <Img src='/images/HoverIcon2.png' alt='Logo' width={70} height={70} />
          </div>

          {/* Menu Central */}
          <div className='flex flex-1 justify-center space-x-6'>
            <p className='font-organica text-2xl text-gray-500 hover:text-black cursor-pointer transition-all duration-300 hover:scale-105'>Animation</p>
            <p className='font-organica text-2xl text-gray-500 hover:text-black cursor-pointer transition-all duration-300 hover:scale-105'>Development</p>
            <p className='font-organica text-2xl text-gray-500 hover:text-black cursor-pointer transition-all duration-300 hover:scale-105'>About</p>
            <p className='font-organica text-2xl text-gray-500 hover:text-black cursor-pointer transition-all duration-300 hover:scale-105'>Contact</p>
          </div>

          {/* Redes Sociais */}
          <div className='flex flex-1 justify-end space-x-6'>
            <a href="https://www.linkedin.com/in/luanmcarvalho/" target='_blank' className='cursor-pointer text-gray-600 text-3xl hover:text-black hover:scale-110 transition-all duration-300'><FaLinkedin /></a>
            <a href="https://vimeo.com/hoverstudio" target='_blank' className='cursor-pointer text-gray-600 text-3xl hover:text-black hover:scale-110 transition-all duration-300'><FaVimeo /></a>
            <a href="https://github.com/luanmcarvalho" target='_blank' className='cursor-pointer text-gray-600 text-3xl hover:text-black hover:scale-110 transition-all duration-300'><FaGithub /></a>
          </div>
        {/* Navbar end */}
        </div>
      </div>

       {/* Hero */}
      <div className='flex mt-60 px-36 div-img'>
        <div className='flex-2 flex-col space-y-1'>
          <p className='text-4xl ml-1 font-organica'>Hi, I'm</p>
          <h2 className='text-6xl font-organica'>Luan Carvalho.</h2>
          <h2 className='text-2xl ml-1 font-organicaLight'>Frontend Developer & Motion Designer</h2>
        </div>

        <div className='flex-1 ml-16 relative group cursor-pointer'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 z-10 transition-opacity duration-300' />
          <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-organica'>Wizard's New Brand</h2>
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl opacity-0 mt-8 group-hover:opacity-100 transition-opacity duration-300 z-10 font-organicaLight'>Featured Project</p>
          <Img src='/images/wizard-thumb.jpg' alt='Featured Project' width={800} height={800} className='w-full h-auto'/>
        </div>

      </div>

      <div className="w-full h-20 text-black flex items-center justify-center mt-36">
        <div className="whitespace-nowrap text-[14rem] font-organicaBold animate-marquee">
          ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS • ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS • ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS • ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS • ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS • ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS • ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS • ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS •
        </div>

      </div>

      {/* Projects Section */}
      <div className="relative mt-60">

      {/* Seção que sobe */}
      <div className="z-40">
        <h2 className="text-6xl font-organica text-center">Animation</h2>

      <div className='flex justify-center mt-10 space-x-10'>
      {['All', '2D Animation', '3D Animation', 'Compositing', 'Design'].map(category => (
        <button
          key={category}
          className={`text-2xl font-organica cursor-pointer transition-all duration-300 ${filter === category ? 'text-black underline' : 'text-gray-500 hover:text-black hover:scale-105'}`}
          onClick={() => setFilter(category)} > {category}
        </button>
          ))}
      </div>
      </div>

      {/* Lista de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-20 py-20">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative group cursor-pointer w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-organica">{project.title}</h2>
            <Img src={project.img} alt={project.title} width={800} height={453} className="w-full h-auto shadow-lg" />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}