"use client";

import { FaLinkedin, FaVimeo, FaGithub, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from './hooks/useScrollPosition';
import VideoModal from '../components/VideoModal';


export default function Home () {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [videoUrl, setVideoUrl] = useState('https://vimeo.com/1060999864');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollProgress, activeSection } = useScrollPosition();
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const projects = [
    { 
      id: 1, 
      title: 'BMW | Alexa', 
      categories: ['2D Animation'], 
      img: '/images/alexa.jpg', 
      videoUrl: 'https://vimeo.com/838502302' 
    },
    { 
      id: 2, 
      title: 'Pringles | New Visual', 
      categories: ['3D Animation', '2D Animation'], 
      img: '/images/pringles.jpg', 
      videoUrl: 'https://vimeo.com/687654288' 
    },
    { 
      id: 3, 
      title: 'Cinema Olympia | Requalificação', 
      categories: ['2D Animation'], 
      img: '/images/olympia.jpg', 
      videoUrl: 'https://vimeo.com/958021217' 
    },
    { 
      id: 4, 
      title: 'Vale | Stories We Can Avoid', 
      categories: ['2D Animation'], 
      img: '/images/stories.jpg', 
      videoUrl: 'https://vimeo.com/777965821' 
    },
    { 
      id: 5, 
      title: 'Papo de Raiz', 
      categories: ['2D Animation'], 
      img: '/images/raiz.jpg', 
      videoUrl: 'https://vimeo.com/882669570' 
    },
    { 
      id: 6, 
      title: 'Vale | Serra Sul', 
      categories: ['2D Animation'], 
      img: '/images/serra.jpg', 
      videoUrl: 'https://vimeo.com/894684757' 
    },
    { 
      id: 7, 
      title: 'Density | Go to Market', 
      categories: ['2D Animation', '3D Animation'], 
      img: '/images/density.jpg', 
      videoUrl: 'https://vimeo.com/795467853' 
    },
    { 
      id: 8, 
      title: 'Jeep Way | TV Spot', 
      categories: ['Video Editing', '2D Animation'], 
      img: '/images/jeep.jpg', 
      videoUrl: 'https://vimeo.com/701271967' 
    },
    { 
      id: 9, 
      title: 'Skol | Sinuquinha x Snooker', 
      categories: ['Compositing'], 
      img: '/images/skol.jpg', 
      videoUrl: 'https://vimeo.com/835112131' 
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const allCategories = ['All', ...new Set(projects.flatMap(p => p.categories))];

  const scrollToSection = useCallback((id: string, offset: number = 200) => {
    if (typeof window !== 'undefined') {
      const section = document.getElementById(id);
      if (section) {
        const topPosition = section.offsetTop - offset;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
      }
    }
  }, []);


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showVideoModal]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 bg-black z-[100] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <header className='fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-[100] transition-all duration-300' id="navbar">
        <div className='container-custom mx-auto'>
          <div className='flex items-center justify-between h-24'>
            {/* Logo */}
            <div className='flex items-center'>
              <Image src='/images/HoverIcon2.png' alt='Logo' width={60} height={60} />
            </div>

            {/* Menu Central */}
            <nav className='hidden md:flex items-center space-x-8'>
              {[
                { label: "Animation", id: "animation" },
                { label: "Software", id: "dev" },
                { label: "About", id: "about" },
                { label: "Contact", id: "contact" }
              ].map(item => (
                <button
                  key={item.id}
                  className={`font-organica text-xl transition-all duration-300 relative group ${activeSection === item.id ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                  onClick={() => isClient && scrollToSection(item.id)}
                >
                  {item.label}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-black transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}
            </nav>

            {/* Social Icons */}
            <div className='flex items-center space-x-6'>
              <a href="https://www.linkedin.com/in/luanmcarvalho/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn Profile" className='text-gray-600 text-xl hover:text-black transition-all duration-300'><FaLinkedin /></a>
              <a href="https://vimeo.com/hoverstudio" target='_blank' rel="noopener noreferrer" aria-label="Vimeo Profile" className='text-gray-600 text-xl hover:text-black transition-all duration-300'><FaVimeo /></a>
              <a href="https://github.com/luanmcarvalho" target='_blank' rel="noopener noreferrer" aria-label="GitHub Profile" className='text-gray-600 text-xl hover:text-black transition-all duration-300'><FaGithub /></a>
              <a href="https://instagram.com/hoverstudio.tv" target='_blank' rel="noopener noreferrer" aria-label="Instagram Profile" className='text-gray-600 text-xl hover:text-black transition-all duration-300'><FaInstagram /></a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(true)} 
                aria-label="Open menu"
                className="p-2 text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              
              {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-[200] flex">
                  <div className="bg-white w-4/5 max-w-sm h-full p-6 overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                      <Image src='/images/HoverIcon2.png' alt='Logo' width={40} height={40} />
                      <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <nav className="flex flex-col space-y-6">
                      {[
                        { label: "Animation", id: "animation" },
                        { label: "Development", id: "dev" },
                        { label: "About", id: "about" },
                        { label: "Contact", id: "contact" }
                      ].map(item => (
                        <button
                          key={item.id}
                          className="font-organica text-xl py-2 text-left"
                          onClick={() => {
                            if (isClient) {
                              scrollToSection(item.id);
                              setMobileMenuOpen(false);
                            }
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className='container-custom pt-16 pb-10 md:py-24 md:min-h-[90vh] flex flex-col md:flex-row items-center mt-20 md:mt-0'>
          <div className='w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 order-2 md:order-1 z-10'>
            <p className='text-gray-500 font-organica mb-2'>Hi, I&apos;m</p>
            <h1 className='text-h1 font-organica mb-4'>Luan Carvalho.</h1>
            <h2 className='text-h3 font-organicaLight max-w-2xl mb-8'>
              Frontend Developer & Motion Designer crafting immersive digital experiences
            </h2>
            <div className="flex space-x-4">
              <button 
                onClick={() => isClient && scrollToSection("animation")}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => isClient && scrollToSection("contact")}
                className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className='w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0 z-10 mt-40 sm:mt-0'>
            <div className='relative group cursor-pointer shadow-2xl rounded-lg overflow-hidden' 
              onClick={() => {
                setVideoUrl('https://vimeo.com/1060999864');
                setShowVideoModal(true);
              }}
            >
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-10 flex items-center justify-center'>
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                  <h3 className='text-h3 font-organica mb-2'>Wizard&apos;s New Brand</h3>
                  <p className='text-lg font-organicaLight mb-4'>Featured Animation Project</p>
                  <div className="bg-white text-black rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <Image 
                src='/images/wizard-thumb.jpg'
                alt='Wizard brand redesign project - Featured Animation' 
                width={800} 
                height={800} 
                className='w-full h-auto transform transition-transform duration-700 group-hover:scale-105' 
                priority
              />
            </div>
          </div>
        </section>

        {isClient && (
          <div className="w-full overflow-hidden mt-24 md:mt-36">
            <div className="h-[15vh] md:h-[30vh] text-black flex items-center justify-center relative">
              <div className="marquee-track absolute whitespace-nowrap">
                <span className="text-[4rem] md:text-[14rem] font-organicaBold inline-block">
                  ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS •&nbsp;
                </span>
                <span className="text-[4rem] md:text-[14rem] font-organicaBold inline-block">
                  ANIMATION • DEVELOPMENT • DESIGN • MOTION • FRONTEND • BACKEND • MOBILE • 3D MODELS • REACT • NEXT JS •&nbsp;
                </span>
              </div>
            </div>
          </div>
        )}

        <motion.section 
          className='container-custom py-32' 
          id='animation'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="z-40">
            <h2 className="text-h2 font-organica text-center">Animation</h2>

            <div className='flex flex-wrap justify-center mt-10 mb-16 gap-4'>
              {allCategories.map((category, index) => (
                <button
                  key={`category-${index}-${category}`}
                  className={`text-lg md:text-xl font-organica cursor-pointer transition-all duration-300 px-4 py-1 ${
                    filter === category 
                      ? 'text-white bg-black rounded-full' 
                      : 'text-gray-500 hover:text-black hover:bg-gray-100 rounded-full'
                  }`}
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => {
                  setVideoUrl(project.videoUrl);
                  setShowVideoModal(true);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl md:text-2xl font-organica mb-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">{project.title}</h3>
                  <p className="text-gray-200 text-sm md:text-base font-organicaLight mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150">
                    {project.categories.join(' • ')}
                  </p>
                  
                  <div className="bg-white text-black rounded-full w-10 h-10 mr-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  width={800} 
                  height={450} 
                  className="w-full h-auto aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
            
          <div className="mt-12 flex justify-center">
            {showAll ? (
              <button 
                onClick={() => setShowAll(false)} 
                className="group flex items-center space-x-2 font-organica text-xl text-gray-600 hover:text-black transition-colors duration-300"
              >
                <span>Show Less</span>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            ) : (
              filteredProjects.length > 4 && (
                <button 
                  onClick={() => setShowAll(true)} 
                  className="group flex items-center space-x-2 font-organica text-xl text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <span>Show More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )
            )}
          </div>
        </motion.section>

        <motion.section 
          className='container-custom py-32' 
          id='dev'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 font-organica text-center mb-2 mt-40">Software</h2>
          <div className="h-1 w-20 bg-black mx-auto mt-4 mb-16"></div>
          
          {/* Rest of your dev section */}
        </motion.section>

        <div className="relative mt-10">
          <h3 className="text-4xl font-organica text-center mb-8">Web Development</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
            <div className="relative group cursor-pointer">
              <a href="https://example1.com" target="_blank" rel="noopener noreferrer" className="block">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-organica">Website 1</h2>
                <Image src="/images/wizard-thumb.jpg" alt="Website 1" width={800} height={453} className="w-full h-auto shadow-lg" />
              </a>
            </div>

            <div className="relative group cursor-pointer">
              <a href="https://luanmcarvalho.github.io/airbnb-clone/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="absolute top-0 left-0 w-full h-[17rem] bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-organica">Airbnb Clone</h2>
                <Image src="/images/airbnb-clone-2.png" alt="Airbnb Clone" width={800} height={453} className="w-full h-auto shadow-lg" />
              </a>
            </div>

            <div className="relative group cursor-pointer">
              <a href="https://example3.com" target="_blank" rel="noopener noreferrer" className="block">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-organica">Website 3</h2>
                <Image src="/images/wizard-thumb.jpg" alt="Website 3" width={800} height={453} className="w-full h-auto shadow-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-20'></div>

        <motion.section 
          className='container-custom py-32' 
          id='about'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16 mt-40">
            <h2 className="text-h2 font-organica">About Me</h2>
            <div className="h-1 w-20 bg-black mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-organicaLight text-body mb-6">
                I&apos;m a <span className="font-organica">Frontend Developer</span> and <span className="font-organica">Motion Designer</span> with 
                a passion for crafting visually stunning, interactive experiences. 
              </p>
              
              <p className="font-organicaLight text-body mb-6">
                My approach combines technical expertise with creative vision, allowing me to build 
                digital solutions that are both beautiful and functional. With over 7 years of experience, 
                I&apos;ve collaborated with talented teams to transform concepts into engaging reality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                <div>
                  <h3 className="text-xl font-organica mb-4">Technical Skills</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      React & Next.js
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      CSS & Tailwind
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Animation Libraries
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-organica mb-4">Design Skills</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      2D/3D Animation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Adobe Creative Suite
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      UI/UX Design
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Motion Graphics
                    </li>
                  </ul>
                </div>
              </div>

              <p className="font-organicaLight text-body mb-6">
                Outside of work, I enjoy exploring movies and video games, constantly finding inspiration
                in these media. I&apos;m a proud family person, spending quality time with my wife and baby daughter—
                who are my greatest source of motivation.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="font-organica text-lg">
                  I also run <a href="https://www.hoverstudio.tv/" target="_blank" rel="noopener noreferrer" className="text-black relative hover:text-gray-700 transition-colors inline-block">
                    <span className="after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 hover:after:bg-gray-700">Hover Studio</span>
                  </a>
                </p>
                <a 
                  href="https://www.hoverstudio.tv/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-black hover:text-gray-700 transition-colors"
                >
                  <span className="mr-2">Visit Studio</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-black opacity-10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black opacity-5 rounded-full"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image 
                  src="/images/about-image.png" 
                  alt='Luan Carvalho - Frontend Developer and Motion Designer' 
                  width={600} 
                  height={600}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </motion.section>

        <section className='container-custom py-24' id='contact'>
          <div className='max-w-3xl mx-auto mt-44'>
            <h2 className="text-h2 font-organica text-center mb-2">Contact Me</h2>
            <p className="text-gray-500 text-center max-w-lg mx-auto mb-12">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            
            <div className='bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100'>
              <div className="flex flex-wrap -mx-3 mb-8">
                <div className="w-full md:w-1/2 px-3 mb-4">
                  <h3 className='text-xl font-organica mb-2'>Let&apos;s Talk</h3>
                  <p className='text-gray-600 mb-4'>Fill out the form and I&apos;ll get back to you as soon as possible.</p>
                  
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:luan@hoverstudio.tv" className="text-black hover:underline">luan@hoverstudio.tv</a>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+55 (11) 93258-9315</span>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 px-3">
                  <form 
                    action="https://formspree.io/f/xovjgagl" 
                    method="POST" 
                    className='space-y-4'
                    onSubmit={(e) => {
                      e.preventDefault(); 
                      setFormSubmitting(true);
                      setTimeout(() => {
                        setFormSubmitted(true); 
                        setFormSubmitting(false);
                      }, 2000);
                    }}
                  >
                    <div>
                      <input 
                        type='text' 
                        name='name' 
                        placeholder='Your Name' 
                        className='w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-all' 
                        required 
                      />
                    </div>
                    <div>
                      <input 
                        type='email' 
                        name='email' 
                        placeholder='Your Email' 
                        className='w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-all' 
                        required 
                      />
                    </div>
                    <div>
                      <textarea 
                        name='message' 
                        placeholder='Your Message' 
                        rows={4} 
                        className='w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-all' 
                        required
                      ></textarea>
                    </div>
                    <button 
                      type='submit' 
                      className='w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex justify-center items-center'
                      disabled={formSubmitting}
                    >
                      {formSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : formSubmitted ? (
                        "Message Sent!"
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {showVideoModal && (
        <VideoModal videoUrl={videoUrl} onClose={() => setShowVideoModal(false)} />
      )}

      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all z-40"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <footer className='bg-gray-50 py-16 mt-28'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div>
              <h4 className='font-organica text-xl mb-4'>Luan Carvalho</h4>
              <p className='text-gray-600 mb-6 max-w-sm'>Frontend Developer & Motion Designer creating immersive digital experiences for brands and businesses.</p>
              <div className='flex space-x-4'>
                <a href="https://www.linkedin.com/in/luanmcarvalho/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn Profile" className='bg-gray-100 hover:bg-black hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300'><FaLinkedin /></a>
                <a href="https://vimeo.com/hoverstudio" target='_blank' rel="noopener noreferrer" aria-label="Vimeo Profile" className='bg-gray-100 hover:bg-black hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300'><FaVimeo /></a>
                <a href="https://github.com/luanmcarvalho" target='_blank' rel="noopener noreferrer" aria-label="GitHub Profile" className='bg-gray-100 hover:bg-black hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300'><FaGithub /></a>
                <a href="https://instagram.com/hoverstudio.tv" target='_blank' rel="noopener noreferrer" aria-label="Instagram Profile" className='bg-gray-100 hover:bg-black hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300'><FaInstagram /></a>
              </div>
            </div>
            
            <div>
              <h4 className='font-organica text-xl mb-4'>Contact</h4>
              <p className='flex items-center mb-3'>
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:luan@hoverstudio.tv" className='hover:underline'>luan@hoverstudio.tv</a>
              </p>
              <p className='flex items-center'>
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +55 (11) 93258-9315
              </p>
            </div>

            <div>
              <h4 className='font-organica text-xl mb-4'>Location</h4>
              <address className='not-italic text-gray-600'>
                <p>Av. Gov. José Malcher, 153</p>
                <p>Nazaré, Belém - PA. Brazil.</p>
                <p>66035-100</p>
              </address>
            </div>
          </div>

          <div className='border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500 text-sm'>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Luan Carvalho. All rights reserved.</p>
            <nav className='flex space-x-6 mt-4 md:mt-0'>
              <a href="#animation" onClick={(e) => {
                e.preventDefault(); 
                if (isClient) scrollToSection("animation");
              }} className='text-gray-500 hover:text-black text-sm'>Animation</a>
              <a href="#" onClick={(e) => {e.preventDefault(); if (isClient) { scrollToSection("dev"); }}} className='text-gray-500 hover:text-black text-sm'>Development</a>
              <a href="#" onClick={(e) => {e.preventDefault(); if (isClient) scrollToSection("about");}} className='text-gray-500 hover:text-black text-sm'>About</a>
              <a href="#" onClick={(e) => {e.preventDefault(); if (isClient) scrollToSection("contact");}} className='text-gray-500 hover:text-black text-sm'>Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}