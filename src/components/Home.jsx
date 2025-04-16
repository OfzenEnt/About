import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Home() {
    return (
        <div>
            <NavBar />
            <div className=" bg-gray-50 flex flex-col md:flex-row items-center justify-between px-8 py-16 font-sans">
                {/* Text Section */}
                <div className="md:w-1/2 mb-10 md:mb-0 text-left px-12">
                    <h1 className="text-4xl font-bold leading-tight ">
                        Empowering <span className="text-green-600">Agriculture</span><br />
                        and <span className="text-blue-500">Technology</span><br />
                        <span className="text-gray-800">Naturally Innovative.</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Bridging the gap between cutting-edge technology and sustainable agriculture
                        to create impactful solutions for the future.
                    </p>
                    <button className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition">
                        Explore More
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={"src/assets/Screenshot 2025-04-15 213606.png"}
                        alt="Homepage Visual"
                        className=" shadow-lg max-w-[45%] h-96 rounded-ss-[200px] border-2 border-black"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}
