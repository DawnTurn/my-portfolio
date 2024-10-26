import { useState } from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Technologies from './components/technologies';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
    const [theme, setTheme] = useState('dark')
    const [openNav, setOpenNav] = useState(false);
    const blurStyling = 'fixed w-[100%] h-[100%] backdrop-blur-md bg-black/30 backdrop-brightness-50 dark:backdrop-blur dark:bg-white/30 dark:backdrop-brightness-100 z-40 transition-all'

    return (
        <div className={theme === 'dark' ? ' bg-black text-white transition-all' : 'dark bg-gray-100 text-black transition-all'}>
            <Nav theme={theme} setTheme={setTheme} openNav={openNav} setOpenNav={setOpenNav}/>
            <div className={openNav ? blurStyling : ''}></div>
            <Hero/>
            <main className='px-7 md:px-10 lg:max-w-screen-xl lg:mx-auto lg:px-7'>
                <About/>
                <Skills/>
                <Technologies/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}

export default App