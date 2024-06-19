


import React, {useEffect, useState} from 'react';
// import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa6";

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
            <div id='project' ref={projectRef} className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-400 to-purple-400 ">
              <div className={`font-bold text-4xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold  ${isVisible.project ? '' : 'hidden'}`}>
                Các dự án đạt được
              </div>

                <div className='flex flex-row grid-cols-4 mt-10 w-3/4'>
                  <a href='https://github.com/hoad3/Shoping-Web' className='m-10'>
                    <button className='transition ease-in duration-300  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl shadow-indigo-600'>
                      <div className='border border-gray-600 w-[420px] h-[420px] flex justify-center items-center flex-col rounded-lg shadow-lg shadow-indigo-600'>
                       <img src="/assets/web.png" alt="website" className='w-96'/>

                        <div className='mt-5'>
                          <h1 className='font-bold text-2xl text-black'>Shoping Web</h1>
                          <h2 className='font-serif text-2xl text-black w-96 mt-5'>Shoping Web là ứng dụng web cho phép người dùng đặt mua và đăng bán các mặt hàng</h2>
                        </div>
                      </div>
                    </button>
                  </a>
                  <a href='https://github.com/hoad3/NewStalker' className='m-10'>
                    <button className='transition ease-in duration-300  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl shadow-indigo-600'>
                      <div className='border border-gray-600 w-[420px] h-[420px] flex justify-center items-center flex-col rounded-lg shadow-lg shadow-indigo-600 overflow-y-scroll '>
                        <img src="/assets/Summerizer.png" alt="newstalker" className='w-96'/>
                        <div className='mt-5'>
                          <h1 className='font-bold text-2xl text-black'>Newtalker</h1>
                          <h2 className='font-serif text-2xl text-black w-96 mt-5 '>Newtalker là phần mềm crawler dữ liệu một cách tự động từ các bài báo và thực hiện tóm tắt văn bản, thống kê từ khóa trong bài báo đó</h2>
                        </div>
                      </div>
                    </button>
                  </a>
                <div>

                </div>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <span className='font-bold text-4xl h-14 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mt-5'>Xem thêm tại</span>
                <div>
                  <a href='https://github.com/hoad3'>
                    <FaGithub size='30' className=' m-5 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-11 h-11 rounded-full font-serif' />
                  </a>
                </div>
              </div>
            </div>
            <div id='skill' ref={skillRef} className="h-auto flex flex-col items-center justify-center bg-gradient-to-b from-purple-400 to-pink-400 ">
              {/*<h2 className={`text-4xl font-bold ${isVisible.skill ? '' : 'hidden'}`}></h2>*/}
              {/*<p className={`mt-2 ${isVisible.skill ? '' : 'hidden'}`}></p>*/}
              <div className='flex justify-start items-start w-3/4'>
                <div className='flex flex-col'>
                  <h1 className='font-bold text-3xl text-indigo-600'>Về tôi</h1>
                  <div className='w-7/12'>
                    <div className='mt-5'>
                      <span className='font-bold text-3xl text-indigo-600'>Xin chào! tôi tên</span>
                      <span className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold ml-2'>Đào Ngọc Hòa,</span>
                      <span className='font-bold text-3xl ml-2 text-indigo-600'>một sinh viên đại học thuộc chuyên ngành</span>
                      <span className='font-bold text-3xl ml-2 text-indigo-600'>công nghệ phần mềm</span>
                      <span className='font-bold text-3xl ml-2 text-indigo-600'>tại đại học Tài nguyên và Môi trường Hồ Chí Minh.</span>
                    </div>
                    <div className='mt-5'>
                      <span className='font-bold text-3xl text-indigo-600'>Tôi có kinh nghiệm làm</span>
                      <span className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold ml-2' >ứng dụng web full-stack.</span>
                      <span className='font-bold text-3xl ml-2 text-indigo-600'>Ngoài ra tôi cũng có kiến thức và kỹ năng giải quyết vấn đề về  </span>
                      <span className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold ml-1'>cấu trúc dữ liệu & giải thuật</span>
                      <span className='font-bold text-3xl ml-2 text-indigo-600'>và các kỹ năng về</span>
                      <span className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold ml-2'>OPP.</span>
                    </div>
                    <div className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold mt-28 w-auto '>
                      <span>Kỹ năng</span>

                      <div className='flex'>
                        <div className='flex flex-col mt-5 w-full justify-center items-center border-t-4 border-indigo-500'>
                          <div className=' font-bold text-3xl text-indigo-600 flex flex-row h-auto w-auto border-b-4 border-indigo-500 mt-5 h-14'>
                            <div className='ml-5 w-48'>
                              <span className='font-bold text-3xl text-indigo-600 '>Ngôn ngữ</span>
                            </div>
                            <div className=' font-bold text-3xl text-indigo-600 w-56'>
                              Công nghệ
                            </div>
                            <div className=' font-bold text-3xl text-indigo-600 w-56'>
                              Cơ sở dữ liệu
                            </div>
                            <div className=' font-bold text-3xl text-indigo-600 w-48'>
                              Công cụ
                            </div>
                          </div>
                          <div className='flex flex-row w-[884px] mt-5'>
                            <div className='flex flex-col ml-5'>
                              <img src='/logos/java-ar21.svg' className=' h-32 w-36'/>
                              <img src='/logos/csharp.svg' className='w-16 mt-5'/>
                              <img src='/logos/python.svg' className='w-16 mt-5'/>
                              <img src='/logos/typescript.svg' className='w-16 mt-5'/>
                              <img src='/logos/javascript.svg' className='w-16 mt-5 mb-10'/>
                            </div>
                            <div className='flex flex-col ml-20'>
                              <img src='/logos/tailwindcss.svg' className='w-16 mt-5'/>
                              <img src='/logos/dotnet.svg' className='w-16 mt-5'/>
                              <img src='/logos/react.svg' className='w-16 mt-5'/>
                              <img src='/logos/vite.svg' className='w-16 mt-5'/>
                              <img src='/logos/nodedotjs.svg' className='w-16 mt-5'/>
                            </div >
                            <div className='flex flex-col ml-40'>
                              <img src='/logos/postgresql.svg' className='w-16 mt-5'/>
                              <img src='/logos/mysql.svg' className='w-16 mt-5'/>
                              <img src='/logos/microsoft-sql-server-logo-svgrepo-com.svg' className='w-20 mt-5'/>
                            </div>
                            <div className='flex flex-col ml-40'>
                              <img src='/logos/jetbrains.svg' className='w-16 mt-5'/>
                              <img src='/logos/visualstudiocode.svg' className='w-16 mt-5'/>
                              <img src='/logos/visualstudio.svg' className='w-16 mt-5'/>
                            </div>
                          </div>
                      </div>

                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;

