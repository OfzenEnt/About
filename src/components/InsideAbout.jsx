import React from "react";
import { TiTick } from "react-icons/ti";
import { FaComputer } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { MdCheckCircle, MdTrackChanges } from "react-icons/md";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
function AboutUsPage() {
    const teamMembers = [
        { name: "Krishna Mohan Koyya", role: "CEO", img: "/krishna.png" },
        { name: "Maya Mathy", role: "Founder", img: "/blackshirt.jpg" },
        { name: "Alexis Jensen", role: "CTO", img: "/fiveperson.jpg" },
        { name: "Keira Battye", role: "Product Designer", img: "/Twopersons.jpg" },
        { name: "Dominic Game", role: "3D Artist", img: "/woman.jpg" },
        { name: "James Vial", role: "Head of Front-End", img: "/fiveperson.jpg" }
    ]
    return (
        <>
            <NavBar />
            <div className="text-gray-800 font-sans max-w-screen mx-auto">
                <header className="h-[150px] lg:h-[300px] bg-cover bg-center flex items-center justify-center " style={{ backgroundImage: `url(${"/tablesitting.jpg"})`, opacity: 0.6, z: -1 }}>
                    <div className=" p-6 rounded-md">
                        <h1 className="text-black relative  text-5xl font-bold">About us</h1>
                        <p className="text-black relative  text-xl mt-2">Home → About</p>

                    </div>
                </header>

                <section className="grid lg:grid-cols-4 gap-8 p-10 max-w-screen lg:max-h-[449]  overflow-hidden relative ">
                    <div className="col-span-2 grid grid-cols-2 gap-4 row-span-2 rounded-lg hover:scale-102 trasition-all duration-300 ease-in-out overflow-hidden">
                        <img src={"/Twopersons.jpg"} className="rounded-lg w-full lg:h-[450px] md:max-h-[575px] tab:h-[405px] ipad:h-[460px] px-2  md:p-0 hover:scale-102 trasition-all duration-300 ease-in-out overflow-hidden" />
                        <div className="overflow-hidden relative rounded-lg">
                            <img src={"/tablesitting.jpg"} className="rounded-lg w-full h-auto object-cover max-h-[295px]  mb-7 hover:scale-105 hover:rounded-br-2xl hover:rounded-bl-2xl trasition-all duration-300 ease-out-in overflow-hidden" />
                            <div className="col-span-2 grid grid-cols-2 gap-4 space-y-3 overflow-hidden rounded-lg">
                                <img src={"/woman.jpg"} className="rounded-lg max-w-screen object-cover hover:scale-105 hover:rounded-br-xl hover:rounded-tr-xl trasition-all duration-300 ease-in-out overflow-hidden" />
                                <div className="bg-blue-600 text-white text-center flex items-center justify-center  md:text-xl text-xs font-semibold rounded-lg hover:scale-102 trasition-all duration-300 ease-in-out overflow-hidden">25+<br />Years of Experience</div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-blue-100 lg:p-6 p-4 rounded-lg  w-full lg:space-y-4 lg:text-lg text-sm max-h-[449px] ">
                        <h3 className="text-blue-800 font-serif mb-2 text-left lg:text-3xl text-xl lg:mt-5 mt-3">ABOUT KOYYA</h3>
                        <h2 className="font-semibold text-400 lg:mb-4 mb:3 text-left lg:text-4xl text-2xl">Digitally rooted.<br /> Naturally driven.That’s<br /> the Koyya way.</h2>
                        <p className="mb-4 font-sans lg:text-lg text-base text-justify">Koyya is a dual-vertical company bridging Technology and AgriBusiness, delivering innovative digital solutions and empowering agricultural brands through modern tech and marketing.</p>
                        <ul className="list-disc list-inside space-y-2 text-left">
                            <li className="flex items-center"><MdCheckCircle color="blue" lg:size={"25"} size={"20"} /> &nbsp; Bridging Technology & AgriBusiness</li>
                            <li className="flex items-center"><MdCheckCircle color="blue" lg:size={"25"} size={"20"} /> &nbsp; Building web, mobile & IoT products</li>
                            <li className="flex items-center"><MdCheckCircle color="blue" lg:size={"25"} size={"20"} /> &nbsp; Offering consulting & upskilling services</li>
                        </ul>
                    </div>
                </section >

                <section className="px-12 py-19 bg-gray-50 text-left w-full">
                    <h2 className="lg:text-4xl text-3xl font-bold mb-4 lg:w-2/3 text-blue-600 text-left">Empowering Progress: Bridging Agriculture and Technology for a Better Tomorrow</h2>

                    <div className="grid lg:grid-cols-3 gap-20 ">
                        <div className="space-y-6 col-span-2">
                            <p className="lg:text-xl text-base mb-8 text-gray-600 max-w-2xl ">Bridging agriculture and technology to create impactful, sustainable solutions that shape a brighter tomorrow.</p>
                            <div className="bg-blue-50 lg:p-3 p-2 rounded-lg shadow-lg lg:mr-20 flex items-center hover:translate-x-6 trasition-all duration-300 ease-in-out">
                                <img src={"/missionimg.png"} className="lg:w-16 lg:h-16 w-12 h-12 mr-2 mt-3" alt="Mission Icon" />
                                <div>
                                    <h3 className="text-blue-700 font-semibold lg:mb-2 lg:text-2xl ml-3">Mission</h3>
                                    <p className="flex items-center ml-3 text-sm lg:text-base text-justify">
                                        Our mission is to leverage cutting-edge technologies to solve real-world problems, focusing on technology and agriculture to create meaningful impact and value.</p>

                                </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg shadow-lg lg:ml-20 flex items-center hover:-translate-x-6 trasition-all duration-300 ease-in-out">
                                <img src={"/visionimg.png"} className="lg:w-16 lg:h-16 w-12 h-12 mr-2 mt-3" alt="Vision Icon" />
                                <div>
                                    <h3 className="text-blue-700 font-semibold lg:mb-2 lg:text-2xl ml-3">Vision</h3>
                                    <p className="flex items-center ml-3 text-sm lg:text-base text-justify">To be a leading force in bridging the gap between agribusiness and technology, creating a future where digital innovation uplifts rural roots and modern enterprises alike.</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg shadow-lg lg:mr-20 flex items-center hover:translate-x-6 trasition-all duration-300 ease-in-out">
                                <img src={"/coreimg.png"} className="lg:w-16 lg:h-16 w-12 h-12 mr-2 mt-3" alt="Mission Icon" />
                                <div>
                                    <h3 className="text-blue-700 font-semibold lg:mb-2 ml-3 lg:text-2xl">Core Values</h3>

                                    <ul className="list-disc list-inside  md:grid-cols-5 grid grid-cols-2 text-left  md:ml-3 ml-1 gap-2 lg:text-base text-sm">
                                        <li>
                                            Innovation
                                        </li>
                                        <li>Integrity </li>
                                        <li>Sustainability </li>
                                        <li>Excellence </li>
                                        <li className="text-xs lg:text-base md:text-sm"> Collaboration</li>
                                    </ul>
                                    {/* <ul className="list-disc list-inside lg:grid-cols- grid-cols-2 grid text-left ml-3 lg:hidden">
                                    <li >Excellence </li>
                                    <li >Collaboration</li>
                                </ul> */}
                                </div>
                            </div>
                        </div>
                        <img src={"/blackshirt.jpg"} className="rounded-lg lg:w-auto lg:h-[450px]  w-72 h-96 ml-11 hover:scale-104 trasition-all duration-300 ease-in-out hidden lg:block" />
                    </div>
                </section >

                <section className="p-12 w-full overflow-hidden">
                    <div className="p-12 bg-blue-200 h-4 -z-10 mt-24 -m-52 hover:scale-y-110 ">
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-8 ">
                        <img src={"/fiveperson.jpg"} className="p-1 lg:w-2/5  rounded-lg" />

                        <div className=" px-6 lg:py-8 py-1 rounded-md w-full lg:w-1/2">
                            <h2 className="lg:text-6xl text-4xl font-bold text-blue-800 mb-2 ">Behind the KOYYA</h2>
                            <div className="space-y-10">
                                <p className="text-xl text-gray-800 lg:mt-6">Rooted in Legacy. Growing with Innovation.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lg:p-6 p-5 bg-violet-100  ml-11 mr-11 overflow-hidden rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 ">Our Story</h2>
                    <p className="text-gray-700  text-justify">
                        <strong>Koyya Enterprises Private Limited (KEPL)</strong> was born from the vision of <strong>Krishna Mohan Koyya</strong> and <strong>Karuna Koyya</strong>  a family-driven initiative to merge deep industry experience with purpose-driven innovation.
                        What began as <strong>Glarimy Technology Services</strong> in 2010 a trusted name in tech upskilling and consulting  evolved in 2023 into a broader mission: to build meaningful, scalable solutions in technology and agriculture.
                        Founded by Krishna and Sriram Koyya, Koyya Enterprises blends over two decades of technical expertise with a fresh perspective on agribusiness, aiming to deliver impact across industries and communities.
                    </p>
                </section>

                <section className="p-12 grid lg:grid-cols-2 gap-8">
                    <div className="bg-blue-100 p-6 lg:rounded-bl-[90px] rounded-lg overflow-hidden">
                        <img src="/glarimy.png" className="w-16 h-16 lg:w-24 lg:h-28 float-left drop-shadow-xl hover:scale-104 transition-all duration-300" />
                        <h3 className="font-bold text-xl mb-2">Glarimy – The Spirit of Innovation</h3>
                        <p className="italic font-semibold ">Curious | Creative | Tech-savvy</p>
                        <p className="mt-4 ml-2 text-justify"><strong>Glarimy</strong> symbolizes our technology vertical a young, agile, and curious mind constantly exploring new possibilities. She represents our approach to solving modern business problems through SaaS, mobile apps, consulting, and upskilling programs.
                            Her energy drives digital transformation across enterprises.</p>
                    </div>
                    <div className="bg-green-100 p-6 lg:rounded-tr-[90px] rounded-lg overflow-hidden">
                        <img src="/krissaco logo.png" className="w-16 h-20 lg:w-24 lg:h-28 md:float-right float-left drop-shadow-xl hover:scale-104 transition-all duration-300" />

                        <h3 className="font-bold text-xl mb-2">Krissaco – The Heart of Agriculture</h3>
                        <p className="italic font-semibold">Grounded | Visionary | Future-Ready</p>
                        <p className="mt-4 text-justify"><strong>Krissaco</strong> stands for the modern agriculturist rooted in tradition, yet empowered by technology. He leads our agribusiness initiatives with a focus on IoT, AI, cloud-based tools, and food product innovation. His mission is to add value to agriculture through sustainable, tech-driven solutions.</p>
                    </div>
                </section>

                <section className="lg:p-10 p-5 bg-blue-50 mb-4 ml-11 mr-11 rounded-lg ">
                    <h2 className="text-blue-600 text-4xl font-bold mb-8 text-center ">Meet our team members</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {teamMembers.map((member, i) => (
                            <div key={i} className=" bg-white rounded-lg shadow p-2 flex lg:flex-row lg:text-left lg:space-x-4 flex-col hover:scale-104 trasition-all duration-300 ease-in-out">
                                <img src={member.img} className="w-16 h-16 tab:w-36 tab:h-36 tab:rounded-lg  rounded-full  mx-auto mt-2 object-cover  lg:m-0 " />{/* lg:w-36 lg:h-36 lg:rounded-lg lg:float-start lg:ml-0 lg:mt-0 lg:mx-0 */}
                                <div>
                                    <h3 className="font-bold lg:mt-4 items-center ">{member.name}</h3>
                                    <p className="text-blue-600 lg:text:xl text-sm">{member.role}</p>

                                    <div className="flex space-x-4 mt-4 justify-center lg:justify-start ">
                                        <a href="#"><FaFacebook className="opacity-90 text-gray-850 hover:opacity-100 hover:text-gray-950  size-5" /></a>
                                        <a href="#"><FaGithub className="opacity-90 text-gray-850 hover:opacity-100 hover:text-gray-950  size-5" /></a>
                                        <a href="#"><FaLinkedin className="opacity-90 text-gray-850 hover:opacity-100 hover:text-gray-950  size-5" /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <Footer />

            </div >
        </>
    );
};

export default AboutUsPage;
