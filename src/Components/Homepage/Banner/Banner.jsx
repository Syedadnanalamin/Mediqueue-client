import React from 'react';

const Banner = () => {
    return (
        <div className='h-screen bg-[#48a9a6]'>
            <div className='container mx-auto pt-2'>

                <div className="carousel w-full h-[550px] rounded-2xl overflow-hidden">

                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                            className="w-full object-cover"
                            alt=""
                        />

                        <div className="absolute inset-0 bg-black/60"></div>

                        <div className="absolute inset-0 flex items-center">
                            <div className="max-w-2xl ml-10 md:ml-20 text-white">
                                <h1 className="text-5xl font-bold mb-5">
                                    Find Your Perfect Tutor
                                </h1>

                                <p className="mb-6 text-lg">
                                    Book expert tutors instantly and start learning with flexible
                                    schedules from anywhere.
                                </p>

                                <button className="btn btn-primary mr-3">
                                    Explore Tutors
                                </button>

                                <button className="btn btn-outline btn-secondary">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                            className="w-full object-cover"
                            alt=""
                        />

                        <div className="absolute inset-0 bg-black/60"></div>

                        <div className="absolute inset-0 flex items-center">
                            <div className="max-w-2xl ml-10 md:ml-20 text-white">
                                <h1 className="text-5xl font-bold mb-5">
                                    Learn Anytime, Anywhere
                                </h1>

                                <p className="mb-6 text-lg">
                                    Online and offline sessions with experienced tutors at affordable
                                    prices.
                                </p>

                                <button className="btn btn-primary">
                                    Book Session
                                </button>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                            className="w-full object-cover"
                            alt=""
                        />

                        <div className="absolute inset-0 bg-black/60"></div>

                        <div className="absolute inset-0 flex items-center">
                            <div className="max-w-2xl ml-10 md:ml-20 text-white">
                                <h1 className="text-5xl font-bold mb-5">
                                    Build Your Future Today
                                </h1>

                                <p className="mb-6 text-lg">
                                    Thousands of students trust MediQueue to achieve their learning
                                    goals.
                                </p>

                                <button className="btn btn-secondary">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;