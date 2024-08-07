import {FaGithub} from "react-icons/fa6";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {useTranslation} from "react-i18next";


const Product: React.FC = () => {

    const {t} = useTranslation();
    return (
        <div className='container-element-product'>
            <a className='mt-10' href='https://github.com/hoad3/Shoping-Web'>
                <button className='button-element-product'>
                    <div className='element-product'>
                        <img src="/assets/web.png" alt="website" className='w-96 h-96'/>
                        <div className='mt-5'>
                            <h1 className='font-bold text-2xl md:text-sm text-black'>{t('projectpage.tetx_1')}</h1>
                            <h2 className='font-serif text-sm text-black mt-5 md:text-2xl w-auto'>{t('projectpage.tetx_2')}</h2>
                        </div>
                    </div>
                </button>
            </a>
            <a className='mt-10' href='https://github.com/hoad3/NewStalker' >
                <button className='button-element-product'>
                    <div className='element-product'>
                        <img src="/assets/Summerizer.png" alt="website" className='w-96'/>
                        <div className='mt-5'>
                            <h1 className='font-bold text-2xl text-black'>{t('projectpage.tetx_3')}</h1>
                            <h2 className='font-serif text-sm text-black md:text-2xl w-auto mt-5'>{t('projectpage.tetx_4')}</h2>
                        </div>
                    </div>
                </button>
            </a>
            <a className='mt-10' href='https://github.com/hoad3'>
                <button className='button-element-product'>
                    <div className='element-product'>
                        <div className='mt-5 flex flex-col justify-center items-center'>
                            <span className='font-bold text-2xl text-black'>{t('projectpage.tetx_5')}</span>
                            <FaGithub size='30' className='m-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-11 h-11 rounded-full font-serif' />
                        </div>
                    </div>
                </button>
            </a>
        </div>



    );
};
export default Product;