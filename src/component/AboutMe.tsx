import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {useTranslation} from "react-i18next";


const AboutMe: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className='flex justify-start items-start w-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-3xl text-indigo-600 mt-36'>{t('aboutme.text_1')}</h1>
                <div className='w-96 md:w-3/4'>
                    <div className='mt-5 text-2xl md:text-4xl'>
                        <span className='font-bold text-indigo-600'>{t('aboutme.text_2')}</span>
                        <span className='font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-2'>{t('aboutme.text_3')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_4')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_5')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_6')}</span>
                    </div>
                    <div className='mt-5 text-2xl md:text-4xl'>
                        <span className='font-bold text-indigo-600'>{t('aboutme.text_7')}</span>
                        <span className='font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-2'>{t('aboutme.text_8')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_9')}</span>
                        <span className='font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-1'>{t('aboutme.text_10')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_11')}</span>
                        <span className='font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-2'>{t('aboutme.text_12')}</span>
                    </div>
                    <div className='font-bold text-3xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mt-28 w-auto'>
                        <span>{t('aboutme.text_13')}</span>
                        <div>
                            <div className='flex flex-col mt-5 w-full justify-center items-center border-t-4 border-indigo-500'>
                                <div className='font-bold text-3xl text-indigo-600 justify-center  h-auto w-auto mt-5 flex flex-col md:flex-row'>
                                    <div className='flex flex-col items-center m-5 w-48'>
                                        <span className='font-bold text-3xl text-indigo-600'>{t('aboutme.text_14')}</span>
                                        <li className='flex flex-col ml-5 grid-cols-4 gap-4'>
                                            <img src='/logos/java-ar21.svg' className='h-32 w-36'/>
                                            <img src='/logos/csharp.svg' className='w-16 mt-5'/>
                                            <img src='/logos/python.svg' className='w-16 mt-5'/>
                                            <img src='/logos/typescript.svg' className='w-16 mt-5'/>
                                            <img src='/logos/javascript.svg' className='w-16 mt-5 mb-10'/>
                                        </li>
                                    </div>
                                    <div className='flex flex-col items-center h-96 w-48 m-5 mb-16'>
                                        <span className='font-bold text-3xl text-indigo-600 flex justify-center'>{t('aboutme.text_15')}</span>
                                        <li className='flex justify-center flex-col items-center'>
                                            <img src='/logos/tailwindcss.svg' className='w-16 mt-5'/>
                                            <img src='/logos/dotnet.svg' className='w-16 mt-5'/>
                                            <img src='/logos/react.svg' className='w-16 mt-5'/>
                                            <img src='/logos/vite.svg' className='w-16 mt-5'/>
                                            <img src='/logos/nodedotjs.svg' className='w-16 mt-5'/>
                                            <img src='/logos/flutter.svg' className='w-16 mt-5'/>
                                        </li>
                                    </div>
                                    <div className='aboutmeitem'>
                                        <span className='font-bold text-3xl text-indigo-600 justify-center'>{t('aboutme.text_16')}</span>
                                        <li className='flex flex-col justify-center items-center'>
                                            <img src='/logos/postgresql.svg' className='w-16 mt-5'/>
                                            <img src='/logos/mysql.svg' className='w-16 mt-5'/>
                                            <img src='/logos/microsoft-sql-server-logo-svgrepo-com.svg' className='w-20 mt-5'/>
                                        </li>
                                    </div>
                                    <div className='flex flex-col items-center w-48 m-5'>
                                        <span className='font-bold text-3xl text-indigo-600 justify-center'>{t('aboutme.text_17')}</span>
                                        <li className='flex flex-col justify-center items-center'>
                                            <img src='/logos/jetbrains.svg' className='w-16 mt-5'/>
                                            <img src='/logos/visualstudiocode.svg' className='w-16 mt-5'/>
                                            <img src='/logos/visualstudio.svg' className='w-16 mt-5'/>
                                            <img src='/logos/androidstudio.svg'className='w-16 mt-5'/>
                                        </li>
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
export default AboutMe;