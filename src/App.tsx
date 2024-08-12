


import React, {useEffect, useState} from 'react';
// import { FaGithub } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useInView } from "react-intersection-observer";

import Home from "./component/Home.tsx";
import Product from "./component/Product.tsx";
import AboutMe from "./component/AboutMe.tsx";
import {FaListUl} from "react-icons/fa";
// import i18n from 'i18next'
import i18n from "./i18n.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {useTranslation} from "react-i18next";
import { US, VN } from 'country-flag-icons/react/1x1'; // Cờ dạng 1x1
const App: React.FC = () =>{
  const {t} = useTranslation(['header']);
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
      if (vietnamutc >= 6 && vietnamutc < 12) {
        greetingMessage = t('timebox.timetext_1'); // Morning
      } else if (vietnamutc >= 12 && vietnamutc < 18) {
        greetingMessage = t('timebox.timetext_2'); // Afternoon
      } else {
        greetingMessage = t('timebox.timetext_3'); // Evening/Night
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

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    console.log(t('homepage.timetext_4'))
    i18n.changeLanguage(newLang);
  };

  return (
      <div>

        <div className={`fixed top-0 w-screen z-[9999] h-auto flex justify-center items-center transition-all duration-300 ${backgroundColor}`} data-aos='fade-down'>
          <div className='w-full md:w-3/4'>
            <nav className='flex flex-row mt-5justify-between items-center'>
              <div className='w-full h-14 md:w-3/4 flex flex-row justify-start items-center text-2xl font-bold' >
                <a className='w-64' href='#home'>{t('header.tittle')}</a>
                <button onClick={toggleLanguage} className="ml-4 px-4 py-2">
                  {i18n.language === 'en' ? <US title="USA" className="flag rounded-lg" /> : <VN title="Vietnam" className="flag rounded-lg" />}
                </button>
              </div>
              <input id ='check' type = 'checkbox'/>
              <label htmlFor='check' className='checkbt' ><FaListUl /></label>
              <li className='li-bar '>
                <a className='item-list-top' href="#home">{t('header.mainpage')}</a>
                <a className='item-list' href="#project">{t('header.projectsTitle')}</a>
                <a className='item-list' href="#skill">{t('header.Aboutme')}</a>
                <a className='item-list-botton' href='mailto:hoad3579@gmail.com'>{t('header.contact')}</a>
              </li>
            </nav>
          </div>
        </div>
          <div className="relative w-full">
              <div id='home' ref={homeRef} className=" h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-200 to-indigo-400 mt-10 " data-aos="fade-up" data-aos-delay="0">
                <h1 className='flex justify-center items-center rounded-lg border border-cyan-500 text-center text-2xl md:text-4xl font-bold mt-16 w-2/4 md:w-1/4 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent shadow shadow-cyan-950 shadow-lg' data-aos='fade-left' data-aos-delay='200'>
                  {greeting} {t('timebox.timetext_4')} {currentTime}</h1>

                <Home />
              </div>
          </div>
        <div id='project' ref={projectRef} className='container-element w-full h-full bg-gradient-to-b from-indigo-400 to-purple-400'>
          <div>
            <div className={`mt-14 flex justify-center font-bold text-3xl md:text-4xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ${isVisible.project ? '' : 'hidden'}`}>
              {t('projectpage.text_6')}
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

