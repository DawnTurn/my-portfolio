

const services = () => {
    return (
        <div className="mt-20 relative" id="skills">
            <div className='absolute w-[2.7em] h-[5em] skew-y-[40deg] bg-primary right-0 top-[-2%]'></div>

            <div className="">
                <h1 className="text-2xl font-medium">Skills</h1>
                <p className="text-sm font-light my-2">What i offer</p>

                <div className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="w-[90%] h-[20em] flex flex-col justify-end mx-auto bg-secondary dark:bg-gray-300 px-7 pt-20 pb-7 rounded-md">
                            <i className="bx bx-devices text-4xl text-primary"></i>
                            <h1 className="text-xl mt-2 mb-4">UI/UX</h1>
                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>User-Centered Design</span>
                            </p>

                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Prototyping & Wireframing</span>
                            </p>

                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Responsive Design</span>
                            </p>
                        </div>

                        <div className="w-[90%] h-[20em] flex flex-col justify-end mx-auto bg-secondary dark:bg-gray-300 px-7 pt-20 pb-7 rounded-md">
                            <i className="bx bx-code text-4xl text-primary"></i>
                            <h1 className="text-xl mt-2 mb-4">Frontend Development</h1>
                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Responsive Development</span>
                            </p>

                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Modern Technologies</span>
                            </p>

                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Performance Optimization</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="w-[90%] h-[20em] flex flex-col justify-end mx-auto bg-secondary dark:bg-gray-300 px-7 pt-20 pb-7 rounded-md">
                            <i className="bx bxs-data text-4xl text-primary"></i>
                            <h1 className="text-xl mt-3 mb-4">Backend Development</h1>
                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Server-Side Logic</span>
                            </p>

                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Backend Technologies</span>
                            </p>
                        </div>

                        <div className="w-[90%] h-[20em] flex flex-col justify-end mx-auto bg-secondary dark:bg-gray-300 px-7 pt-20 pb-7 rounded-md">
                            <i className="bx bx-edit text-4xl text-primary"></i>
                            <h1 className="text-xl mt-2 mb-4">Brand Design</h1>
                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Visual Identity Creation</span>
                            </p>

                            <p className="text-sm font-light flex items-center gap-2 py-1">
                                <i className="bx bx-check text-primary text-lg"></i>
                                <span>Consistency Across Platforms</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services