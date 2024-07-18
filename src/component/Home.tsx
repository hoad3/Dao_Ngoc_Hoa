import {FaGithub} from "react-icons/fa6";
import {MdOutlineEmail} from "react-icons/md";

const Home: React.FC = () =>{
    return(
        <div className='w-full flex justify-center' data-aos="fade-up" data-aos-delay="0">
            <div className='flex justify-start w-6/12 flex-col'>
                <h1 className="text-4xl font-bold mt-5" data-aos='fade-left' data-aos-delay='200'></h1>
                <h2 className=" mt-3 text-4xl font-bold relative" data-aos='fade-up' data-aos-delay="400">
                <span className="relative">
                  Tôi tên
                </span>
                    <span className='ml-2 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent'>Đào Ngọc Hòa.</span>
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
    )
}
export default Home;