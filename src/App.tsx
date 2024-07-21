


import React, {useEffect, useState} from 'react';
// import { FaGithub } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useInView } from "react-intersection-observer";

import Home from "./component/Home.tsx";
import Product from "./component/Product.tsx";
import AboutMe from "./component/AboutMe.tsx";
import {FaListUl} from "react-icons/fa";

const App: React.FC = () =>{

  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('bg-green-200');
  const [isVisible, setIsVisible] = useState<{ home: boolean; project: boolean; skill: boolean }>({
    home: true,
    project: false,
    skill: false,
  });

  useEffect(() => {
    // Function to smooth scroll to element by ID
    const smoothScroll = (id: string) => {
      document.querySelector(id)?.scrollIntoView({
        behavior: 'smooth'
      });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll((anchor as HTMLAnchorElement).getAttribute('href') as string);
      });
    });
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });// tốc độ trượt của vật thể
    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getUTCHours();
      const minutes = now.getUTCMinutes();
      const seconds = now.getUTCSeconds();
      const vietnamutc = (hours + 7) % 24;
      let greetingMessage = '';
      if (vietnamutc < 12 && vietnamutc > 5) {

        greetingMessage = 'Chào buổi sáng';
      } else if (vietnamutc < 18 && vietnamutc > 12) {
        greetingMessage = 'Chào buổi chiều';
      }
      else {
        greetingMessage = 'Chào buổi tối';
      }
      setGreeting(greetingMessage);

      const formattedTime = `${String(vietnamutc).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      setCurrentTime(formattedTime);
    };

    updateGreeting(); // Initialize greeting
    const interval = setInterval(updateGreeting, 100); // Update 60000 miligiây

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);



  const handleIntersection = (entry: IntersectionObserverEntry, section: keyof typeof isVisible) => {
    if (entry.isIntersecting) {
      setBackgroundColor(getBgColor(section));
      setIsVisible((prev) => ({
        ...prev,
        [section]: true,
      }));
    } else {
      setIsVisible((prev) => ({
        ...prev,
        [section]: false,
      }));
    }
  };

  const getBgColor = (section: string) => {
    switch (section) {
      case 'home':
        return 'bg-green-200';
      case 'project':
        return 'bg-indigo-400';
      case 'skill':
        return 'bg-purple-400';
      default:
        return 'bg-green-200';
    }
  };

  const { ref: homeRef } = useInView({

    onChange: (inView, entry) => {
      if(inView){
        handleIntersection(entry, 'home')
      }
    },
    threshold: 0.5,
  });

  const { ref: projectRef } = useInView({
    onChange: (inView, entry) => {
      if (inView) {
        handleIntersection(entry, 'project');
      }
    },
      threshold: 0.5,

  });

  const { ref: skillRef } = useInView({
    onChange: (inView, entry) => {
      if (inView) {
        handleIntersection(entry, 'skill');
      }
    },
    threshold: 0.5,
  });

  return (
      <div>

        <div className={`fixed top-0 w-screen z-[9999] h-auto flex justify-center items-center transition-all duration-300 ${backgroundColor}`} data-aos='fade-down'>
          <div className='w-full md:w-3/4'>
            <nav className='flex flex-row mt-5justify-between items-center'>
              <a className='w-full h-14 md:w-3/4 flex justify-start items-center text-2xl font-bold' href='#home'>
                Đào Ngọc Hòa
              </a>
              <input id ='check' type = 'checkbox'/>
              <label htmlFor='check' className='checkbt' ><FaListUl /></label>


              <li className='li-bar '>
                <a className='item-list-top' href="#home">Trang chủ</a>
                <a className='item-list' href="#project">Sản phẩm</a>
                <a className='item-list' href="#skill">Về tôi</a>
                <a className='item-list-botton' href='mailto:hoad3579@gmail.com'>Liên hệ</a>
              </li>
            </nav>
          </div>
        </div>
          <div className="relative w-full">
              <div id='home' ref={homeRef} className=" h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-200 to-indigo-400 mt-10 " data-aos="fade-up" data-aos-delay="0">
                <h1 className='flex justify-center items-center rounded-lg border border-cyan-500 text-center text-2xl md:text-4xl font-bold mt-16 w-2/4 md:w-1/4 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent shadow shadow-cyan-950 shadow-lg' data-aos='fade-left' data-aos-delay='200'>{greeting} hiện tại là: {currentTime}</h1>
                <Home />
              </div>
          </div>
        <div id='project' ref={projectRef} className='container-element w-full h-full bg-gradient-to-b from-indigo-400 to-purple-400'>
          <div>
            <div className={`mt-14 flex justify-center font-bold text-3xl md:text-4xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ${isVisible.project ? '' : 'hidden'}`}>
              Các dự án đạt được
            </div>
            <Product/>
          </div>
        </div>
            <div id='skill' ref={skillRef} className="h-auto flex flex-col items-center justify-center w-full md:w-full bg-gradient-to-b from-purple-400 to-pink-400">
              <AboutMe />
            </div>
      </div>
  );
};

export default App;

