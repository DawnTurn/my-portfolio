import cxl from '../assets/cxl-delivery.jpg'
import jkInterior from '../assets/jk-interior.jpg'
import gsap from '../assets/gsap-greensock.svg'
import weatherApp from '../assets/weather-app.jpg'
import norlPic from '../assets/Norl-Photography.jpg'
import heartPic from '../assets/heart-diesase-prediction.jpg'
import danimnex from '../assets/danimex.jpg'

const projects = () => {
    const projectContainerR = 'flex flex-col gap-4 md:gap-7 md:flex-row md:items-center lg:gap-16'
    const projectContainerRR = 'flex flex-col gap-4 md:gap-7 md:flex-row-reverse md:items-center lg:gap-16'
    const paragraphStyling = 'font-light text-sm my-2 leading-7 md:my-1 md:text-[.95rem] lg:my-3'
    const headingStyling = 'text-xl font-medium text-primary md:text-2xl'
    const imageStyling = 'rounded-md shadow-lg md:object-cover'
    const logoContainer = 'text-2xl flex gap-2 items-end'
    const linkStyling = 'md:w-full'

    return (
        <div className="mt-20 lg:mt-28 bg-DarkBg dark:bg-gray-200 py-20" id='projects'>
            <div className='px-7 md:px-10 lg:max-w-screen-xl lg:mx-auto lg:px-7 relative z-10'>
                <div className='absolute w-[2.7em] h-[5em] skew-y-[40deg] bg-black dark:bg-white right-0 top-0 -z-10'></div>
                <div className='z-10'>
                    <h1 className="text-2xl font-medium md:text-3xl">Recent Projects</h1>
                    <p className="text-sm font-light mt-2 mb-10 leading-6 md:text-[.95rem] md:w-[40em] md:mt-3 md:mb-16">
                        I do most projects under contract but i tend to freelance 
                        from time to time or build projects for fun. 
                        Here are some of my recent projects:
                    </p>

                    <div className='flex flex-col gap-16 md:gap-24 lg:w-[90%] lg:mx-auto'>
                        <div className='flex flex-col gap-16 md:gap-24 lg:gap-24'>
                            <div className={projectContainerR}>
                                <a href="https://jk-interior.onrender.com" className={linkStyling} target='_blank'>
                                    <img 
                                        src={jkInterior} className={imageStyling} 
                                        alt="A picture of an interior decoration website" 
                                    />
                                </a>
                                <div className='md:w-full'>
                                    <h1 className={headingStyling}>Jkan Interior Decoration</h1>
                                    <p className={paragraphStyling}>
                                        A sleek, modern website for an interior decoration business that showcases a 
                                        portfolio of design projects and allows user book consultations. This project was built using HTML, CSS, 
                                        Javascript and gsap for animations.
                                    </p>
                                    <p className={logoContainer}>
                                        <i className="bx bxl-html5"></i>
                                        <i className="bx bxl-css3"></i>
                                        <i className="bx bxl-javascript"></i>
                                        <img src={gsap} className='w-[1.5em] h-[1.5em]' alt="" />
                                    </p>
                                    <button className='mt-3'>
                                        <a 
                                            href="https://jk-interior.onrender.com" 
                                            target='_blank'
                                            className='py-1 px-6 bg-secondary dark:bg-gray-300 dark:text-black rounded text-white flex items-center gap-[1px] text-sm dark:hover:bg-primary dark:hover:text-white hover:bg-primary hover:text-white group hover:shadow-lg hover:shadow-primary transition-all'
                                        >
                                            <span>Visit</span><i className="bx bx-right-arrow-alt rotate-[-45deg] text-2xl text-primary group-hover:text-white"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div className={projectContainerRR}>
                                <a href="https://cxl-web.onrender.com" className={linkStyling} target='_blank'>
                                    <img 
                                        src={cxl} className={imageStyling} 
                                        alt="A picture of a delivery website"
                                    />
                                </a>

                                <div className='md:w-full md:text-right'>
                                    <h1 className={headingStyling}>CXL Logistics Solution</h1>
                                    <p className={paragraphStyling}>
                                        A responsive delivery service website that features a friendly user interface, 
                                        allowing users to track shipments, view delivery options and manage their accounts. 
                                        This project was built using HTML, CSS and Javascript for the frontend
                                    </p>
                                    <p className={logoContainer + 'md:w-full md:justify-end'}>
                                        <i className="bx bxl-html5"></i>
                                        <i className="bx bxl-css3"></i>
                                        <i className="bx bxl-javascript"></i>
                                    </p>
                                    <button className='mt-3'>
                                        <a 
                                            href="https://cxl-web.onrender.com"
                                            target='_blank'
                                            className='py-1 px-6 bg-secondary dark:bg-gray-300 dark:text-black rounded text-white flex items-center gap-[1px] text-sm dark:hover:bg-primary dark:hover:text-white hover:bg-primary hover:text-white group hover:shadow-lg hover:shadow-primary transition-all'
                                        >
                                            <span>Visit</span><i className="bx bx-right-arrow-alt rotate-[-45deg] text-2xl text-primary group-hover:text-white"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>



                        {/* second-project-sec */}
                        <div className='flex flex-col gap-16 md:gap-24'>
                            <div className={projectContainerR}>
                                <a href="https://onyxphotography.onrender.com" className={linkStyling} target='_blank' >
                                    <img 
                                        src={norlPic} className={imageStyling} 
                                        alt="A picture of an interior decoration website"
                                    />
                                </a>
                                <div className='md:w-full'>
                                    <h1 className={headingStyling}>Norl Photography</h1>
                                    <p className={paragraphStyling}>
                                        A visual captivating portfolio website that features an images gallery, 
                                        and a contact booking system. This project was built using HTML, CSS, Javascript 
                                        and gsap for animations.
                                    </p>
                                    <p className={logoContainer}>
                                        <i className="bx bxl-html5"></i>
                                        <i className="bx bxl-css3"></i>
                                        <i className="bx bxl-javascript"></i>
                                        <img src={gsap} className='w-[1.5em] h-[1.5em]' alt="" />
                                    </p>
                                    <button className='mt-3'>
                                        <a 
                                            href="https://onyxphotography.onrender.com" 
                                            target='_blank'
                                            className='py-1 px-6 bg-secondary dark:bg-gray-300 dark:text-black rounded text-white flex items-center gap-[1px] text-sm dark:hover:bg-primary dark:hover:text-white hover:bg-primary hover:text-white group hover:shadow-lg hover:shadow-primary transition-all'
                                        >
                                            <span>Visit</span><i className="bx bx-right-arrow-alt rotate-[-45deg] text-2xl text-primary group-hover:text-white"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div  className={projectContainerRR}>
                                <a href="https://github.com/DawnTurn/weather-app" className={linkStyling} target='_blank'>
                                    <img 
                                        src={weatherApp} className={imageStyling} 
                                        alt="A picture of a delivery website"
                                    />
                                </a>
                                <div className='md:w-full md:text-right'>
                                    <h1 className={headingStyling}>Weather APP</h1>
                                    <p className={paragraphStyling}>
                                        This is a dynamic wather app for real time weather updates. This app was 
                                        built as a final project in HIIT Industrial Training Institute. Created using
                                        HTML, CSS, Javascript, node, express, and mongodb was used to buid this project
                                    </p>
                                    <p className={logoContainer + 'md:w-full md:justify-end'}>
                                        <i className="bx bxl-html5"></i>
                                        <i className="bx bxl-css3"></i>
                                        <i className="bx bxl-javascript"></i>
                                        <i className="bx bxl-nodejs"></i>
                                        <i className="bx bxl-expressjs"></i>
                                        <i className="bx bxl-mongodb"></i>
                                    </p>
                                    <button className='mt-3'>
                                        <a 
                                            href="https://github.com/DawnTurn/weather-app"
                                            target='_blank'
                                            className='py-1 px-6 bg-secondary dark:bg-gray-300 dark:text-black rounded text-white flex items-center gap-[1px] text-sm dark:hover:bg-primary dark:hover:text-white hover:bg-primary hover:text-white group hover:shadow-lg hover:shadow-primary transition-all'
                                        >
                                            <span>Visit</span><i className="bx bx-right-arrow-alt rotate-[-45deg] text-2xl text-primary group-hover:text-white"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>



                        {/* third-project-sec */}
                        <div className='flex flex-col gap-16 md:gap-24'>
                            <div className={projectContainerR}>
                                <a href="https://github.com/DawnTurn/Heart-disease-prediction" className={linkStyling} target='_blank' >
                                    <img 
                                        src={heartPic} className={imageStyling} 
                                        alt="A picture of an interior decoration website"
                                    />
                                </a>
                                <div className='md:w-full'>
                                    <h1 className={headingStyling}>Heart Disease Prediction Platform</h1>
                                    <p className={paragraphStyling}>
                                        A heart disease prediction platform that analyzes patient information to predict the 
                                        likelihood of heart disease by using machine learning models. Created using HTML, 
                                        CSS, Javascript, flask, jupyter Notebook for machine learning and postgreSQL for the database
                                    </p>
                                    <p className={logoContainer}>
                                        <i className="bx bxl-html5"></i>
                                        <i className="bx bxl-css3"></i>
                                        <i className="bx bxl-javascript"></i>
                                        <i className="bx bxl-python"></i>
                                        <i className="bx bxl-flask"></i>
                                        <i className="bx bxl-postgresql"></i>
                                    </p>
                                    <button className='mt-3'>
                                        <a 
                                            href="https://github.com/DawnTurn/Heart-disease-prediction" 
                                            target='_blank'
                                            className='py-1 px-6 bg-secondary dark:bg-gray-300 dark:text-black rounded text-white flex items-center gap-[1px] text-sm dark:hover:bg-primary dark:hover:text-white hover:bg-primary hover:text-white group hover:shadow-lg hover:shadow-primary transition-all'
                                        >
                                            <span>Visit</span><i className="bx bx-right-arrow-alt rotate-[-45deg] text-2xl text-primary group-hover:text-white"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div  className={projectContainerRR}>
                                <a href="https://cxl-web.onrender.com" className={linkStyling} target='_blank'>
                                    <img 
                                        src={danimnex} className={imageStyling} 
                                        alt="A picture of a delivery website"
                                    />
                                </a>
                                <div className='md:w-full md:text-right'>
                                    <h1 className={headingStyling}>DanimeX Site</h1>
                                    <p className={paragraphStyling}>
                                        This was my first anime site i ever built, ran into some problems while building 
                                        but it was a good experience overall. built for fun, not for a client or a company. 
                                        Created using HTML, CSS and Javascript and gsap for animations.
                                    </p>
                                    <p className={logoContainer + 'md:w-full md:justify-end'}>
                                        <i className="bx bxl-html5"></i>
                                        <i className="bx bxl-css3"></i>
                                        <i className="bx bxl-javascript"></i>
                                        <img src={gsap} className='w-[1.5em] h-[1.5em]' alt="" />
                                    </p>
                                    <button className='mt-3'>
                                        <a 
                                            href="https://cxl-web.onrender.com"
                                            target='_blank'
                                            className='py-1 px-6 bg-secondary dark:bg-gray-300 dark:text-black rounded text-white flex items-center gap-[1px] text-sm dark:hover:bg-primary dark:hover:text-white hover:bg-primary hover:text-white group hover:shadow-lg hover:shadow-primary transition-all'
                                        >
                                            <span>Visit</span><i className="bx bx-right-arrow-alt rotate-[-45deg] text-2xl text-primary group-hover:text-white"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects