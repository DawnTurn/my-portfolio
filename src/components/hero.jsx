import heroImg from '../assets/programmer-working-flat-style.png'
import heroSvg from '../assets/26432.svg'

const hero = () => {
    const socialLinkstyling = "flex gap-1 items-center py-2 px-4 bg-secondary dark:bg-gray-200 rounded dark:hover:text-white dark:hover:bg-primary hover:bg-primary group hover:shadow-lg hover:shadow-primary transition-all"
    const socialIconStyling = "text-primary text-xl group-hover:text-white"
    const socialTextStyling = "text-[.8rem] font-[300]"

    return (
        <div className="flex flex-col gap-8 mt-20 px-7 relative lg:max-w-screen-xl lg:mx-auto lg:px-10">
            <div className='absolute w-[2.5em] h-[5em] skew-y-[40deg] bg-secondary dark:bg-gray-200 left-3 top-[15%]'></div>
            <div className='text-center z-10'>
                <h2 className="text-primary text-xl font-medium">Hello!, I'm-</h2>
                <h1 className="text-[2.5rem] font-medium my-2">Timmy Turner</h1>
                <p className="text-sm leading-6 font-[300] z-10">
                    <span className="text-lg font-[500]">
                        A Frontend Developer.
                    </span> Fond of creating websites and web application designs and bring them to life using code & develop mobile designs.
                </p>
                <p className="my-5 text-sm font-[200] "><span className="text-lg">🚀</span> Currently specializing in Next.js</p>
                <div className="my-6 flex gap-4 justify-center">
                    <a target="_blank" href="" className={socialLinkstyling}>
                        <i className={`bx bxl-github ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>Github</span>
                    </a>
                    <a target="_blank" href="" className={socialLinkstyling}>
                        <i className={`bx bxl-linkedin ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>LinkedIn</span>
                    </a>
                    <a target="_blank" href="mailto:adebowaleademuyiwa12@gmail.com" className={socialLinkstyling}>
                        <i className={`bx bxs-envelope ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>Email</span>
                    </a>
                </div>
            </div>
            <div className='relative mt-3'>
                <img src={heroSvg} className='absolute w-[30%] h-[30%] right-0'/>
                <img src={heroImg} className='grayscale-[90%]' alt=""/>
            </div>
        </div>
    )
}

export default hero