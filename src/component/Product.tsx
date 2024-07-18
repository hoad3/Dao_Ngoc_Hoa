import {FaGithub} from "react-icons/fa6";
import React from "react";


const Product: React.FC = () =>{
    return(
        <div className='flex flex-col justify-center h-auto md:flex-row grid-cols-4 mt-10 w-auto md:w-full'>
            <a href='https://github.com/hoad3/Shoping-Web' className='m-10'>
                <button className='transition ease-in duration-300  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl shadow-indigo-600'>
                    <div className='sm:text-4xl border border-gray-600 w-[420px] h-[420px] flex  items-center flex-col rounded-lg shadow-lg shadow-indigo-600'>
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
            <a href='https://github.com/hoad3' className='m-10 '>
                <button className='transition ease-in duration-300  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl shadow-indigo-600'>
                    <div className='border border-gray-600 w-[420px] h-[420px] flex justify-center items-center flex-col rounded-lg shadow-lg shadow-indigo-600'>
                        <span className='font-bold text-2xl text-black'>Xem thêm tại</span>
                        <FaGithub size='30' className=' m-5 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-11 h-11 rounded-full font-serif' />
                    </div>
                </button>
            </a>

        </div>

    )
}

export default Product;