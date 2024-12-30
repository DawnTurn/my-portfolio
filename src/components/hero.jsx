import heroImg from '../assets/programmer-working-flat-style.png'
import heroSvg from '../assets/26432.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const hero = () => {
    const socialLinkstyling = "flex gap-1 items-center py-2 px-4 bg-secondary dark:bg-gray-300 rounded dark:hover:text-white dark:hover:bg-primary hover:bg-primary group hover:shadow-lg hover:shadow-primary transition-all lg:px-6"
    const socialIconStyling = "text-primary text-xl group-hover:text-white"
    const socialTextStyling = "text-[.8rem] font-[300] md:text-[.9rem]"

    useGSAP(() => {
        gsap.to('.slideY', {
            duration: .8,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: 'power1.inOut'
        });

        gsap.to('.slideX', {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut',
            delay: 0.5
        })
    },[])

    return (
        <div className="flex flex-col gap-8 mt-20 px-7 relative md:px-10 lg:max-w-screen-xl lg:mx-auto lg:flex-row lg:items-center lg:gap-4 lg:px-7 lg:pt-7 lg:pb-20">
            <div className='absolute w-[2.5em] h-[5em] skew-y-[40deg] bg-secondary dark:bg-gray-200 left-[5%] top-[12%] lg:left-5 lg:top-10'></div>
            
            <div className='text-center z-10 lg:text-left lg:w-[60%]'>
                <h2 className="text-primary text-xl font-medium md:text-2xl lg:text-3xl slideY">Hello!, I'm-</h2>
                <h1 className="text-[2.5rem] font-medium my-2 md:text-[3rem] lg:text-[4.7rem] lg:font-bold slideY">Timmy Turner.</h1>
                <p className="text-sm leading-6 font-[300] text-white/70 dark:font-medium dark:text-gray-800 z-10 md:w-[75%] md:mx-auto md:text-[.95rem] lg:w-[unset] slideY lg:mx-0 lg:text-xl lg:my-4 lg:pr-4">
                    <span className="text-lg font-[500] dark:font-bold text-white dark:text-black lg:text-2xl">
                        A Frontend Developer.
                    </span> Fond of creating websites and web application designs and bring them to life using code & develop mobile designs.
                </p>
                <p className="my-5 text-sm font-[300] text-white/70 dark:font-medium dark:text-gray-800 md:text-[.95rem] lg:mt-7 lg:mb-12 lg:text-lg slideY"><span className="text-lg">🚀</span> Currently specializing in Next.js</p>
                <div className="my-6 flex gap-4 justify-center md:gap-6 lg:justify-start lg:my-0 slideY">
                    <a href="https://github.com/DawnTurn" target="_blank" className={socialLinkstyling}>
                        <i className={`bx bxl-github ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>Github</span>
                    </a>
                    <a href="https://www.linkedin.com/in/adebowale-ademuyiwa-505b56323/" target="_blank" className={socialLinkstyling}>
                        <i className={`bx bxl-linkedin ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>LinkedIn</span>
                    </a>
                    <a  href="mailto:adebowaleademuyiwa12@gmail.com" target="_blank" className={socialLinkstyling}>
                        <i className={`bx bxs-envelope ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>Email</span>
                    </a>
                </div>
            </div>

            <div className='relative mt-3 md:w-[28rem] md:mx-auto lg:w-[40%] slideX'>
                <img src={heroImg} className='grayscale-[90%] link' alt=""/>
                <img src={heroSvg} className='absolute w-[30%] h-[30%] right-0 top-0 pointer-events-none'/>
            </div>
        </div>
    )
}

export default hero