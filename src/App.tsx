


import React, {useEffect, useState} from 'react';
// import { FaGithub } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useInView } from "react-intersection-observer";

import Home from "./component/Home.tsx";
import Product from "./component/Product.tsx";
import AboutMe from "./component/AboutMe.tsx";

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
  // const { ref: skillRef } = useInView({
  //   onChange: (inView, entry) => handleIntersection(entry, 'skill'),
  //   threshold: 0.5,
  // });
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
        <div className={`fixed top-0 w-full z-[9999] h-auto flex justify-center items-center transition-all duration-300 ${backgroundColor}`}
             data-aos='fade-down'>
          <div className='w-11/12 md:w-3/4'>
            <div className='flex flex-col mt-5 md:flex-row justify-between items-center'>
              <div className='w-full md:w-3/4 flex justify-start items-center text-2xl font-bold'>
                Đào Ngọc Hòa
              </div>
              <div className='flex flex-col md:flex-row w-full justify-center items-center'>
                <a className='w-36 text-xl md:text-2xl font-bold flex justify-center items-center mt-2 md:mt-0' href="#home">Trang chủ</a>
                <a className='w-36 text-xl md:text-2xl font-bold flex justify-center items-center mt-2 md:mt-0' href="#project">Sản phẩm</a>
                <a className='w-[100px] text-xl md:text-2xl font-bold flex justify-center items-center mt-2 md:mt-0' href="#skill">Về tôi</a>
                <a className='w-[100px] text-xl md:text-2xl font-bold flex justify-center items-center mt-2 md:mt-0 hover:text-indigo-600 transition ease-in duration-100' href='mailto:hoad3579@gmail.com'>Liên hệ</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div id='home' ref={homeRef} className=" h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-200 to-indigo-400 mt-10" data-aos="fade-up" data-aos-delay="0">
              <h1 className='text-3xl md:text-4xl font-bold mt-36 w-11/12 md:w-3/4 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent' data-aos='fade-left' data-aos-delay='200'>{greeting} hiện tại là: {currentTime}</h1>
              <Home />
            </div>
            <div id='project' ref={projectRef} className="flex flex-col items-center justify-center bg-gradient-to-b from-indigo-400 to-purple-400">
              <div className={`mt-14 font-bold text-3xl md:text-4xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ${isVisible.project ? '' : 'hidden'}`}>
                Các dự án đạt được
              </div>
              <Product/>
            </div>
            <div id='skill' ref={skillRef} className="h-auto flex flex-col items-center justify-center bg-gradient-to-b from-purple-400 to-pink-400 ">
              <AboutMe />
            </div>
          </div>
        </div>
      </div>

  );
};

export default App;

