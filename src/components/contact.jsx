

const contact = () => {
    const socialLinkstyling = "flex gap-1 items-center py-2 px-4 bg-secondary dark:bg-gray-300 rounded dark:hover:text-white dark:hover:bg-primary hover:bg-primary group hover:shadow-lg hover:shadow-primary transition-all lg:px-6"
    const socialIconStyling = "text-primary text-xl group-hover:text-white"
    const socialTextStyling = "text-[.8rem] font-[300] md:text-[.9rem]"

    return (
        <div className="mt-32 relative z-10 md:mt-36 lg:mt-48" id="contact">
            <div className='absolute w-[2.7em] h-[5em] skew-y-[40deg] bg-primary right-0 top-[-50%] -z-10'></div>
            <div className="z-10">
                <h1 className="text-3xl font-medium text-center md:text-4xl lg:text-5xl">Get in Touch.</h1>
                <p className="text-sm font-light mt-5 text-center lg:mt-8 md:text-[.95rem]">I'm currnetly specializing in <span className="text-primary">Frontend Development</span></p>

                <div className="mt-8 flex gap-4 justify-center lg:gap-6">
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
        </div>
    )
}

export default contact