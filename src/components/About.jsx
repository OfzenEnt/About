import React from "react";
import { Link } from "react-router-dom";
function AboutUs() {
    return (
        <div className="bg-gray-50 w-screen h-full m-0">
            <h2 className="text-6xl font-bold text-gray-900 mb-4 mt-14">About us</h2>
            <section className="flex flex-col lg:flex-row justify-between items-center py-16 px-4 text-xl mr-32">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={"src/assets/Screenshot 2025-04-15 213606.png"}
                        alt="Team illustration"
                        className="rounded-xl w-[500px] h-[400px] object-contain"
                    />
                </div>

                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 ">
                    <div className="flex flex-wrap gap-6 text-center mb-6 items-center py-3">
                        <div>
                            <p className="text-blue-700 font-semibold text-xl">50+</p>
                            <p className="text-gray-600 text-sm">Employees</p>
                        </div>
                        <div>
                            <p className="text-blue-700 font-semibold text-xl">5 Years +</p>
                            <p className="text-gray-600 text-sm">Experiences</p>
                        </div>
                        <div>
                            <p className="text-blue-700 font-semibold text-xl">100 +</p>
                            <p className="text-gray-600 text-sm">Smiles</p>
                        </div>
                        <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow-sm hover:bg-purple-200">
                            <Link to="/about">learn More</Link>
                        </button>
                    </div>
                    <p className="italic text-gray-700 mb-6 text-justify">
                        Koyya Enterprises Private Limited (KEPL), headquartered in Bengaluru, operates across two key sectors:
                        Technology and Agriculture. The company is structured into two distinct verticals Glarimy Business Unit
                        and Krissaco Business Unit each with a clear focus and purpose.Glarimy Business Unit
                    </p>
                    <p className="italic text-gray-700 font-semibold"></p>

                    <div className="flex items-center gap-4 mt-14">
                        <img
                            src={"src/assets/Screenshot 2025-04-15 213153.png"}
                            alt="Krishna Mohan Koyya"
                            className="rounded-full w-[100px] h-[100px] object-cover shadow-lg shadow-gray-300"
                        />
                        <div>
                            <p className="text-lg font-serif">Krishna Mohan Koyya</p>
                            <p className="text-sm text-gray-700">Krishna Mohan Koyya . CEO</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
