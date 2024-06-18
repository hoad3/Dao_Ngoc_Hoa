


import React, {useEffect, useState} from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useInView } from "react-intersection-observer";
const App: React.FC = () =>{

  const [greeting, setGreeting] = useState('');
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
      const hours = now.getUTCHours(); // Sử dụng giờ UTC
      const vietnamutc = (hours + 7) % 24;
      console.log("gio",vietnamutc)
      if (vietnamutc < 12 && vietnamutc > 5) {
        setGreeting('Chào buổi sáng');
      } else if (vietnamutc < 18 && vietnamutc > 12) {
        setGreeting('Chào buổi chiều');
      }
      else {
        setGreeting('Chào buổi tối');
      }
    };

    updateGreeting(); // Initialize greeting
    const interval = setInterval(updateGreeting, 60000); // Update 60000 miligiây

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
        <div className={`fixed top-0 w-full z-[9999] h-28 flex justify-center items-center transition-all duration-300 ${backgroundColor}`}
             data-aos='fade-down'>
          <div className='w-3/4'>
            <div className='flex justify-center items-center flex-row'>
              <div className='w-3/4 flex justify-start items-center text-2xl font-bold'>
                Đào Ngọc Hòa
              </div>
              <div className='w-full'>
              </div>
              <div className='flex flex-row w-full justify-center items-center'>
                <a className='w-36 text-2xl font-bold flex justify-center items-center ' href="#home">Trang chủ</a>
                <a className='w-36 text-2xl font-bold flex justify-center items-center' href="#project">Sản phẩm</a>
                <a className='w-[100px] text-2xl font-bold flex justify-center items-center' href="#skill">Về tôi</a>
                <a className='w-[100px] text-2xl font-bold flex justify-center items-center hover:text-indigo-600 transition ease-in duration-100' href='mailto:hoad3579@gmail.com'>Liên hệ</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div id='home' ref={homeRef} className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-indigo-400 mt-10" data-aos="fade-up" data-aos-delay="0">
              <div className={`w-3/4 h-3/4 ${isVisible.home ? '' : 'hidden'}`}>
                <h1 className="text-4xl font-bold mt-10" data-aos='fade-left' data-aos-delay='200'>{greeting}.</h1>
                <h2 className="mt-3 text-4xl font-bold relative" data-aos='fade-up' data-aos-delay="400">
                <span className="relative">
                  Tôi tên
                  <span className=" ml-3 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">Đào Ngọc Hòa.</span>
                </span>
                </h2>
                <h2 className="mt-3 text-4xl" data-aos="fade-up" data-aos-delay="600">
                <span className='mr-3 font-bold'>
                  Tôi là
                </span>
                  <span className='mr-3 relative font-bold text-transparent'>
                  <span className='bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent'>
                    sinh viên đại học.
                  </span>
                </span>
                </h2>
                <h2 className="mt-3 text-4xl" data-aos="fade-up" data-aos-delay="800">
                <span className='font-bold '>
                  tại đại học
                </span>
                  <span className='ml-3 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold'>
                  Tài nguyên và Môi trường TP.HCM, Việt Nam.
                </span>
                </h2>
                <div className='flex flex-row mt-5 border border-gray-600 w-44 rounded-lg'>
                  <div>
                    <a href='https://github.com/hoad3' >
                      <FaGithub size='30' className='m-5 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-11 h-11 rounded-full font-serif' />
                    </a>
                  </div>
                  <div>
                    <a href='mailto:hoad3579@gmail.com'>
                      <MdOutlineEmail size='30' className='m-5 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-11 h-11 rounded-xl  font-serif' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id='project' ref={projectRef} className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-400 to-purple-400 text-white">
              <div className={`font-bold text-4xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold  ${isVisible.project ? '' : 'hidden'}`}>
                Các dự án đạt được
              </div>
              <div className='flex flex-row grid-cols-4 mt-10 w-3/4'>
                <div className='border border-gray-600 w-[420px] h-[420px] flex justify-center items-center flex-col rounded-lg shadow-lg shadow-indigo-600'>
                  <img src="/assets/web.png" alt="website" className='w-96'/>
                  <div className='mt-5'>
                    <h1 className='font-bold text-2xl text-black'>Website bán hàng</h1>
                    <h2 className='font-serif text-2xl text-black w-96 mt-5'>Website bán hàng là ứng dụng web cho phép người dùng đặt mua và đăng bán các mặt hàng</h2>
                  </div>
                </div>
                <div>

                </div>
                <div>

                </div>
              </div>
            </div>
            <div id='skill' ref={skillRef} className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-400 to-pink-400 text-white">
              <h2 className={`text-4xl font-bold ${isVisible.skill ? '' : 'hidden'}`}>The Third slide</h2>
              <p className={`mt-2 ${isVisible.skill ? '' : 'hidden'}`}>Scroll Down</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;

