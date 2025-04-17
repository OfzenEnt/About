import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import CountUp from 'react-countup';

function AboutUs() {
    const NumberCounter = ({ endValue }) => {
        return (
            <div >
                <CountUp
                    start={0}
                    end={endValue}
                    duration={2} // duration in seconds
                    separator=","
                    suffix=" "
                    leadingZeros={false}
                    className="text-2xl font-semibold text-center text-blue-700"
                />
            </div>
        );
    };
    return (
        <>
            <NavBar />
            <div className="bg-gray-50 w-full  lg:p-1   items-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 mt-10 text-center">About Us</h2>

                <section className="flex flex-col lg:flex-row  justify-between items-center gap-12 lg:gap-24">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center">
                        <img
                            src={"/ai3person.png"}
                            alt="Team illustration"
                            className="rounded-xl w-full max-w-sm lg:max-w-[500px] lg:h-[390px] md:max-w-[500px] md:h-[390px] object-contain"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center mt-4">
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-center lg:mb-6 items-center py-3">
                            <div>
                                <div><p className="text-blue-700 font-semibold text-xl md:text-2xl flex items-center justify-center"><NumberCounter endValue={50} /> +</p></div>
                                <p className="text-gray-600 text-sm md:text-base">Employees</p>
                            </div>
                            <div>
                                <div><p className="text-blue-700 font-semibold text-xl md:text-2xl flex items-center justify-center"><NumberCounter endValue={25} /> +</p></div>
                                <p className="text-gray-600 text-sm md:text-base ">Years Experience</p>
                            </div>
                            <div>
                                <div><p className="text-blue-700 font-semibold text-xl md:text-2xl flex items-center justify-center"><NumberCounter endValue={100} /> +</p></div>
                                <p className="text-gray-600 text-sm md:text-base"> Smiles</p>
                            </div>

                            <div className="hidden lg:block">
                                <Link to="/learnmore">
                                    <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow-sm hover:bg-purple-200 mt-4 lg:mt-0">
                                        Learn More
                                    </button>
                                </Link>
                            </div>

                        </div>
                        <div className="lg:hidden mb-6">
                            <Link to="/learnmore">
                                <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow-sm hover:bg-purple-200 mt-4 lg:mt-0 md:mt-6">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                        <p className="italic text-gray-700 lg:mb-6 text-justify lg:mr-32  lg:ml-0 mr-10 ml-10 md:text-2xl">
                            Koyya Enterprises Private Limited (KEPL), headquartered in Bengaluru, operates across two key sectors:
                            Technology and Agriculture. The company is structured into two distinct verticals: Glarimy Business Unit
                            and Krissaco Business Unit, each with a clear focus and purpose.
                        </p>

                        {/* Founder Info */}
                        <div className="flex items-center gap-4 mt-1 lg:mt-1 md:mt-20">
                            <img
                                src={"/krishna.png"}
                                alt="Krishna Mohan Koyya"
                                className="rounded-full w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:h-[100px] lg:w-[100px] object-cover shadow-lg shadow-blue-100 border-4  border-white"
                            />
                            <div>
                                <p className="text-lg md:text-xl font-serif">Krishna Mohan Koyya</p>
                                <p className="text-sm md:text-base text-gray-700">CEO, Krishna Mohan Koyya</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}

export default AboutUs;
