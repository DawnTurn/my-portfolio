

const technologies = () => {
    const techLogoStyling = 'text-primary px-1 text-4xl'

    return (
        <div className="mt-14 relative z-10 md:mt-24 lg:mt-28">
            <div className='absolute w-[2.7em] h-[5em] skew-y-[40deg] bg-secondary dark:bg-gray-200 left-0 top-[-5%] -z-10'></div>
            <div className='z-10'>
                <h1 className="text-2xl font-medium md:text-3xl">Technologies</h1>
                <p className="text-sm mt-2 mb-9 md:text-base lg:mb-12">Technlogies i'm most familiar with</p>

                <div className="grid grid-cols-4 mx-auto gap-3 md:gap-8 lg:grid-cols-8 lg:gap-16">
                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-figma ${techLogoStyling}`}></i>
                        Figma
                    </span>

                    <span className="flex flex-col px-3 items-center text-[.85rem] font-[300]">
                        <i className={`bx bxl-html5 ${techLogoStyling}`}></i>
                        HTML
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-css3 ${techLogoStyling}`}></i>
                        CSS
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-bootstrap ${techLogoStyling}`}></i>
                        Bootstrap
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-sass ${techLogoStyling}`}></i>
                        SASS
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-tailwind-css ${techLogoStyling}`}></i>
                        Tailwind
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-javascript ${techLogoStyling}`}></i>
                        Javascript
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-typescript ${techLogoStyling}`}></i>
                        Typescript
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-git ${techLogoStyling}`}></i>
                        Git
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-github ${techLogoStyling}`}></i>
                        GitHub
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-react ${techLogoStyling}`}></i>
                        React
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-redux ${techLogoStyling}`}></i>
                        Redux
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-nodejs ${techLogoStyling}`}></i>
                        Nodejs
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-mongodb ${techLogoStyling}`}></i>
                        MongoDB
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-postgresql ${techLogoStyling}`}></i>
                        PostgreSQL
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300]">
                        <i className={`bx bxl-flask ${techLogoStyling}`}></i>
                        Flask
                    </span>
                </div>
            </div>
        </div>
    )
}

export default technologies