import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {useTranslation} from "react-i18next";


const AboutMe: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className='flex justify-start items-start w-auto'>
            <div className='flex flex-col justify-center items-center w-full'>
                <h1 className='font-extrabold text-4xl md:text-5xl text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text mb-10 mt-36 text-center drop-shadow-lg'>
                    {t('aboutme.text_1')}
                </h1>
                <div className='w-full md:w-3/4 bg-gradient-to-br from-fuchsia-300 to-purple-200 rounded-2xl shadow-xl p-8 mb-10'>
                    <div className='text-xl md:text-2xl font-medium text-gray-800 leading-relaxed text-center'>
                        <span className='font-bold text-indigo-600'>{t('aboutme.text_2')}</span>
                        <span className='font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-2'>{t('aboutme.text_3')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_4')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_5')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_6')}</span>
                    </div>
                    <div className='mt-5 text-xl md:text-2xl font-medium text-gray-800 leading-relaxed text-center'>
                        <span className='font-bold text-indigo-600'>{t('aboutme.text_7')}</span>
                        <span className='font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-2'>{t('aboutme.text_8')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_9')}</span>
                        <span className='font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-1'>{t('aboutme.text_10')}</span>
                        <span className='font-bold ml-2 text-indigo-600'>{t('aboutme.text_11')}</span>
                        <span className='font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent ml-2'>{t('aboutme.text_12')}</span>
                    </div>
                </div>
                <div className='w-1/2 bg-gradient-to-br from-fuchsia-300 to-purple-200 rounded-2xl shadow-xl p-8 mb-10'>
                    <h2 className='font-extrabold text-3xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-8 text-center'>
                        {t('aboutme.text_13')}
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        {/* Language */}
                        <div className='flex flex-col items-center'>
                            <span className='font-bold text-2xl text-indigo-600 mb-4'>{t('aboutme.text_14')}</span>
                            <ul className='flex flex-col items-center gap-3'>
                                <li><img src='/logos/java-ar21.svg' className='h-12 w-16'/></li>
                                <li><img src='/logos/csharp.svg' className='w-10'/></li>
                                <li><img src='/logos/python.svg' className='w-10'/></li>
                                <li><img src='/logos/typescript.svg' className='w-10'/></li>
                                <li><img src='/logos/javascript.svg' className='w-10 mb-2'/></li>
                            </ul>
                        </div>
                        {/* Technology */}
                        <div className='flex flex-col items-center'>
                            <span className='font-bold text-2xl text-indigo-600 mb-4'>{t('aboutme.text_15')}</span>
                            <ul className='flex flex-col items-center gap-3'>
                                <li><img src='/logos/tailwindcss.svg' className='w-10'/></li>
                                <li><img src='/logos/dotnet.svg' className='w-10'/></li>
                                <li><img src='/logos/react.svg' className='w-10'/></li>
                                <li><img src='/logos/vite.svg' className='w-10'/></li>
                                <li><img src='/logos/nodedotjs.svg' className='w-10'/></li>
                                <li><img src='/logos/flutter.svg' className='w-10'/></li>
                            </ul>
                        </div>
                        {/* Database */}
                        <div className='flex flex-col items-center'>
                            <span className='font-bold text-2xl text-indigo-600 mb-4'>{t('aboutme.text_16')}</span>
                            <ul className='flex flex-col items-center gap-3'>
                                <li><img src='/logos/postgresql.svg' className='w-12'/></li>
                                <li><img src='/logos/mysql.svg' className='w-12'/></li>
                                <li><img src='/logos/microsoft-sql-server-logo-svgrepo-com.svg' className='w-16'/></li>
                            </ul>
                        </div>
                        {/* Tools */}
                        <div className='flex flex-col items-center'>
                            <span className='font-bold text-2xl text-indigo-600 mb-4'>{t('aboutme.text_17')}</span>
                            <ul className='flex flex-col items-center gap-3'>
                                <li><img src='/logos/jetbrains.svg' className='w-10'/></li>
                                <li><img src='/logos/visualstudiocode.svg' className='w-10'/></li>
                                <li><img src='/logos/visualstudio.svg' className='w-10'/></li>
                                <li><img src='/logos/androidstudio.svg' className='w-10'/></li>
                                <li><img src='/logos/docker.svg' className='w-10'/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutMe;