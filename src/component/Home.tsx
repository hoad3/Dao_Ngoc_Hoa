import {FaGithub} from "react-icons/fa6";
import {MdOutlineEmail} from "react-icons/md";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {useTranslation} from "react-i18next";


const Home: React.FC = () => {
    const {t} = useTranslation()
    return (
        <div className='flex justify-center w-3/4' data-aos="fade-up" data-aos-delay="0">
            <div className='flex justify-start flex-col'>
                <h1 className="text-4xl font-bold mt-5" data-aos='fade-left' data-aos-delay='200'></h1>
                <h2 className="mt-3 text-2xl md:text-4xl font-bold relative w-full" data-aos='fade-up' data-aos-delay="400">
                    <span className="relative">{t('homepage.text_1')}</span>
                    <span className='ml-2 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent'>{t('homepage.text_2')}</span>
                </h2>
                <h2 className="mt-3 text-2xl md:text-4xl" data-aos="fade-up" data-aos-delay="600">
                    <span className='mr-3 font-bold'>{t('homepage.text_3')}</span>
                    <span className='mr-3 relative font-bold text-transparent'>
                    <span className='bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent'>{t('homepage.text_4')}</span>
                    </span>
                </h2>
                <h2 className="mt-3 text-2xl md:text-4xl" data-aos="fade-up" data-aos-delay="800">
                    <span className='font-bold'>{t('homepage.text_5')}</span>
                    <span className='ml-3 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent font-bold'>{t('homepage.text_6')}</span>
                </h2>
                <div className='flex flex-row mt-5 border border-gray-600 w-44 rounded-lg'>
                    <div>
                        <a href='https://github.com/hoad3'>
                            <FaGithub size='30' className='m-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-11 h-11 rounded-full font-serif' />
                        </a>
                    </div>
                    <div>
                        <a href='mailto:hoad3579@gmail.com'>
                            <MdOutlineEmail size='30' className='m-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 w-11 h-11 rounded-xl font-serif' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;