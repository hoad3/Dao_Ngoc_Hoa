import React from "react";


const AboutMe: React.FC = () =>
{
    return(
        <div className='flex justify-start items-start w-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-3xl text-indigo-600 mt-36'>Về tôi</h1>
                <div className='w-96 md:w-3/4'>
                    <div className='mt-5'>
                        <span className='font-bold text-3xl text-indigo-600'>Xin chào! tôi tên</span>
                        <span className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent  ml-2'>Đào Ngọc Hòa,</span>
                        <span className='font-bold text-3xl ml-2 text-indigo-600'>một sinh viên đại học thuộc chuyên ngành</span>
                        <span className='font-bold text-3xl ml-2 text-indigo-600'>công nghệ phần mềm</span>
                        <span className='font-bold text-3xl ml-2 text-indigo-600'>tại đại học Tài nguyên và Môi trường Hồ Chí Minh.</span>
                    </div>
                    <div className='mt-5'>
                        <span className='font-bold text-3xl text-indigo-600'>Tôi có kinh nghiệm làm</span>
                        <span className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent  ml-2' >ứng dụng web full-stack.</span>
                        <span className='font-bold text-3xl ml-2 text-indigo-600'>Ngoài ra tôi cũng có kiến thức và kỹ năng giải quyết vấn đề về  </span>
                        <span className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-1'>cấu trúc dữ liệu & giải thuật</span>
                        <span className='font-bold text-3xl ml-2 text-indigo-600'>và các kỹ năng về</span>
                        <span className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent  ml-2'>OPP.</span>
                    </div>
                    <div className='font-bold text-3xl  bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent  mt-28 w-auto '>
                        <span>Kỹ năng</span>

                        <div className=''>
                            <div className='flex flex-col mt-5 w-full justify-center items-center border-t-4 border-indigo-500'>
                                <div className=' font-bold text-3xl text-indigo-600 justify-center h-auto w-auto mt-5 flex flex-col md:flex-row'>
                                    <div className='m-5 w-48'>
                                        <span className='font-bold text-3xl text-indigo-600 '>
                                            Ngôn ngữ
                                        </span>
                                        <li className='flex flex-col ml-5 grid-cols-4 gap-4'>
                                            <img src='/logos/java-ar21.svg' className=' h-32 w-36'/>
                                            <img src='/logos/csharp.svg' className='w-16 mt-5'/>
                                            <img src='/logos/python.svg' className='w-16 mt-5'/>
                                            <img src='/logos/typescript.svg' className='w-16 mt-5'/>
                                            <img src='/logos/javascript.svg' className='w-16 mt-5 mb-10'/>
                                        </li>
                                    </div>
                                    <div className='flex flex-col h-96 w-48 m-5'>
                                        <span className='font-bold text-3xl text-indigo-600 flex justify-center'>
                                            Công nghệ
                                        </span>
                                        <li className='flex justify-center flex-col items-center'>
                                            <img src='/logos/tailwindcss.svg' className='w-16 mt-5'/>
                                            <img src='/logos/dotnet.svg' className='w-16 mt-5'/>
                                            <img src='/logos/react.svg' className='w-16 mt-5'/>
                                            <img src='/logos/vite.svg' className='w-16 mt-5'/>
                                            <img src='/logos/nodedotjs.svg' className='w-16 mt-5'/>
                                        </li >
                                    </div>
                                    <div className='flex flex-col w-48 m-5'>
                                        <span className='font-bold text-3xl text-indigo-600 justify-center mt-16'>
                                            Cơ sở dữ liệu
                                        </span>
                                        <li className='flex flex-col justify-center items-center'>
                                            <img src='/logos/postgresql.svg' className='w-16 mt-5'/>
                                            <img src='/logos/mysql.svg' className='w-16 mt-5'/>
                                            <img src='/logos/microsoft-sql-server-logo-svgrepo-com.svg' className='w-20 mt-5'/>
                                        </li>
                                    </div>
                                    <div className='flex flex-col w-48 m-5'>
                                        <span className='font-bold text-3xl text-indigo-600 justify-center'>
                                            Công cụ
                                        </span>
                                        <li className='flex flex-col justify-center items-center'>
                                            <img src='/logos/jetbrains.svg' className='w-16 mt-5'/>
                                            <img src='/logos/visualstudiocode.svg' className='w-16 mt-5'/>
                                            <img src='/logos/visualstudio.svg' className='w-16 mt-5'/>
                                        </li>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutMe