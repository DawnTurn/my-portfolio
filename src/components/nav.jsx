import { useState } from "react";

const nav = ({theme, setTheme, openNav, setOpenNav}) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const burgerStyling = "w-[32px] h-[2.1px] bg-white dark:bg-black rounded-md transition-all"
    const openNavStyling = 'absolute gap-4 bg-secondary dark:bg-gray-200 text-white dark:text-black w-[45%] right-1 top-[100%] p-6 flex flex-col items-center rounded translate-x-0 transition-all'
    const closeNavStyling = 'absolute gap-4 bg-gray-950 dark:bg-gray-200 text-white dark:text-black w-[45%] right-0 top-[100%] p-6 flex flex-col items-center rounded transition-all translate-x-full lg:translate-x-0 lg:text-sm lg:font-light lg:p-0 lg:h-auto lg:flex lg:gap-10 lg:flex-row lg:static lg:w-auto lg:bg-transparent lg:dark:bg-transparent lg:dark:text-black'
    const openDropdownStyling = "absolute flex flex-col gap-2 bg-secondary p-3 rounded left-[-100%] top-[100%] transition-all dark:bg-gray-200"
    const closeDropdownStyling = "absolute flex flex-col gap-2 bg-secondary p-3 rounded left-[-100%] top-[100%] opacity-0 pointer-events-none transition-all dark:bg-gray-200"
    const drodownStylingContent = "flex items-center gap-2 p-2 rounded font-light text-sm lg:hover:bg-primary lg:hover:text-white lg:cursor-pointer lg:transition-all"
    const HighlightedDrodown = "flex items-center gap-2 p-2 rounded font-light text-sm text-primary lg:hover:bg-primary lg:hover:text-white lg:cursor-pointer lg:transition-all"
    const navListStyling = "w-[100%] flex justify-center text-center"
    const navLinkStyling = "py-[12px] w-[100%] dark:hover:text-white hover:bg-primary rounded font-light text-sm lg:bg-transparent lg:dark:bg-transparent lg:py-0 lg:hover:text-primary transition-all lg:dark:hover:text-primary lg:hover:bg-transparent lg:dark:font-[300]"

    return (
        <div className="sticky top-0 border-b-[1px] border-secondary dark:border-gray-200 transition-all z-50 backdrop-blur-md bg-black/30 backdrop-brightness-50 dark:backdrop-blur dark:bg-white/30 dark:backdrop-brightness-100">
            <div className="flex justify-between items-center py-6 px-7 lg:max-w-screen-xl lg:mx-auto text-white relative dark:text-black lg:px-10">
                <h1 className="text-3xl font-medium text-primary">TT</h1>

                <div className="flex items-center gap-7 lg:gap-16">
                    <ul className={openNav ? openNavStyling : closeNavStyling}>
                        <li className={navListStyling}><a href="#" className={navLinkStyling}>Home</a></li>
                        <li className={navListStyling}><a href="#about" className={navLinkStyling}>About</a></li>
                        <li className={navListStyling}><a href="#skills" className={navLinkStyling}>Skills</a></li>
                        <li className={navListStyling}><a href="#projects" className={navLinkStyling}>Projects</a></li>
                        <li className={navListStyling}><a href="#contact" className={navLinkStyling}>Contact</a></li>
                        <li className={navListStyling}><a href="#" className={navLinkStyling}>Resume</a></li>
                    </ul>

                    <div className="relative pt-1">
                        <span 
                            className="text-xl cursor-pointer transition-all" 
                            onClick={() => {
                                setOpenNav(false);
                                setOpenDropDown(!openDropDown)
                            }}
                        >
                            <i className={theme === 'dark' ? 'bx bx-moon text-primary' : 'bx bx-sun text-primary' }></i>
                            <i className={openDropDown ? 'bx bx-chevron-up' : 'bx bx-chevron-down'}></i>
                        </span>

                        <div className={openDropDown ? openDropdownStyling : closeDropdownStyling}>
                            <p 
                                className= {theme === 'light' ? HighlightedDrodown : drodownStylingContent}
                                onClick={() => {
                                    setTheme('light');
                                    setOpenDropDown(false);
                                }}
                            >
                                <i className="bx bxs-sun"></i>
                                <span>Light</span>
                            </p>

                            <p 
                                className= {theme === 'dark' ? HighlightedDrodown : drodownStylingContent} 
                                onClick={() => {
                                    setTheme('dark');
                                    setOpenDropDown(false);
                                }}
                            >
                                <i className="bx bxs-moon"></i>
                                <span>Dark</span>
                            </p>

                            <p 
                                className="flex items-center gap-2 p-2 rounded font-light text-sm lg:hover:bg-primary lg:hover:text-white lg:cursor-pointer" 
                                onClick={() => {
                                    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
                                    if(isSystemDark){
                                        setTheme('dark')
                                    }else{
                                        setTheme('light')
                                    }
                                    setOpenDropDown(false);
                                }}
                            >
                                <i className="bx bx-laptop"></i>
                                <span>System</span>
                            </p>
                        </div>
                    </div>

                    <div 
                        className="flex flex-col gap-[8px] z-50 b-burger cursor-pointer lg:hidden" 
                        onClick={() => {
                            setOpenDropDown(false)
                            setOpenNav(!openNav)
                        }}
                    >
                        <div className={openNav ? `${burgerStyling} translate-y-[5px] rotate-[45deg]` : burgerStyling}></div>
                        <div className={openNav ? `${burgerStyling} translate-y-[-5.4px] rotate-[-45deg]` : burgerStyling}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nav