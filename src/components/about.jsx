import displayPic from '../assets/DP.jpg';
import heroSvg from '../assets/26432.svg';

const about = () => {
    return (
        <div className="mt-20 relative md:mt-28 z-10" id='about'>
            <div className='-z-10 absolute w-[2.7em] h-[5em] skew-y-[40deg] bg-secondary dark:bg-gray-200 left-0 top-[-2%] lg:-top-10 lg:right-o'></div>
            <h1 className='z-10 text-2xl mb-3 font-medium md:text-3xl lg:text-3xl lg:mb-16'>About Me</h1>
            
            <div className='flex flex-col lg:flex-row-reverse lg:gap-20 items-center lg:justify-end'>
                <div className=' lg:w-[55%]'>
                    <h3 className='z-10 text-lg md:text-xl mb-5 lg:text-xl'>A <span className='text-primary'>Frontend</span> Web Developer</h3>
                    <p className='text-sm mb-2 font-[300] leading-7 md:mb-3 md:text-[.95rem]'>i'm a self taught, creative Frontend 
                        developer based in <span className='text-primary'>Nigeria</span> and i am very passionate about career, 
                        technology, 👾 gaming and music. i work with <span className='text-primary'>web technologies</span> and 
                        <span className='text-primary'> Ui/UX designs </span> 
                        to build websites with a focus on responsive design, deliver quality, easy usage and accessibility.
                    </p>

                    <p className='text-sm mb-6 font-[300] leading-7 md:text-[.95rem]'>
                        My journey in the world of web development began with <span className='text-primary'>HTML</span> 
                        , <span className='text-primary'>CSS</span>, and <span className='text-primary'>JavaScript</span>, and it's been an exciting ride ever since. 
                        I love staying up-to-date with the latest trends and technologies in 
                        the frontend landscape, always eager to experiment with <span className='text-primary'>new tools</span> and 
                        <span className='text-primary'> frameworks</span> to enhance both aesthetics and functionality.
                    </p>
                    <button>
                        <a 
                            href="#" 
                            className='py-1 px-4 bg-secondary dark:bg-gray-300 dark:text-black rounded text-white flex items-center gap-[1px] text-sm dark:hover:bg-primary dark:hover:text-white hover:bg-primary hover:text-white group hover:shadow-lg hover:shadow-primary transition-all md:text-base md:py-2 md:px-5'
                        >
                            <span>Resume</span>
                            <i className="bx bx-right-arrow-alt rotate-[-45deg] text-2xl text-primary group-hover:text-white"></i>
                        </a>
                    </button>
                </div>
                <div className='w-[80%] mt-20 mx-auto relative md:w-[23rem] lg:m-0'>
                    <img src={displayPic} className='rounded-full object-cover lg:w-[23em] lg:h-[23em' alt="" />
                    <img src={heroSvg} className='absolute w-[30%] h-[30%] right-0 top-0 pointer-events-none'/>
                </div>
            </div>
        </div>
    )
}

export default about