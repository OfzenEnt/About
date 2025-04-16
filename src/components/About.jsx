import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function AboutUs() {
    return (
        <div className="bg-gray-50 w-full px-4 sm:px-8 lg:px-16 py-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 text-center">About Us</h2>

            <section className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={"src/assets/Screenshot 2025-04-15 213606.png"}
                        alt="Team illustration"
                        className="rounded-xl w-full max-w-sm lg:max-w-[500px] lg:h-[400px] object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-center lg:mb-6 items-center py-3">
                        <div>
                            <p className="text-blue-700 font-semibold text-xl">50+</p>
                            <p className="text-gray-600 text-sm">Employees</p>
                        </div>
                        <div>
                            <p className="text-blue-700 font-semibold text-xl">5 Years +</p>
                            <p className="text-gray-600 text-sm">Experience</p>
                        </div>
                        <div>
                            <p className="text-blue-700 font-semibold text-xl">100+</p>
                            <p className="text-gray-600 text-sm">Smiles</p>
                        </div>

                        <div className="hidden lg:block ">
                            <Link to="/about">
                                <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow-sm hover:bg-purple-200 mt-4 lg:mt-0">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="block lg:hidden mb-6">
                        <Link to="/about">
                            <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow-sm hover:bg-purple-200 mt-4 lg:mt-0">
                                Learn More
                            </button>
                        </Link>
                    </div>
                    <p className="italic text-gray-700 lg:mb-6 text-justify lg:mr-4 lg:ml-0 mr-10 ml-10">
                        Koyya Enterprises Private Limited (KEPL), headquartered in Bengaluru, operates across two key sectors:
                        Technology and Agriculture. The company is structured into two distinct verticals: Glarimy Business Unit
                        and Krissaco Business Unit, each with a clear focus and purpose.
                    </p>

                    {/* Founder Info */}
                    <div className="flex items-center gap-4 m-10">
                        <img
                            src={"src/assets/Screenshot 2025-04-15 213153.png"}
                            alt="Krishna Mohan Koyya"
                            className="rounded-full w-[80px] h-[80px] object-cover shadow-lg shadow-gray-300"
                        />
                        <div>
                            <p className="text-lg font-serif">Krishna Mohan Koyya</p>
                            <p className="text-sm text-gray-700">CEO, Krishna Mohan Koyya</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default AboutUs;
