import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram
} from 'react-icons/fa';

export default function Footer() {

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 mt-5 rounded-lg">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-5 gap-10 text-left lg:text-xl text-md">
                <div className="col-span-1 lg:col-span-1">
                    <h3 className="font-semibold mb-2 text-lg">About KOYYA</h3>
                    <p className="text-sm leading-relaxed">
                        Bridging technology and agriculture to create sustainable, innovative solutions for a better future.
                    </p>
                    <div className="flex space-x-3 mt-4 text-gray-300">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-lg">Quick Links</h3>
                    <ul className="text-sm space-y-1 ">
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Home</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>About Us</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Services</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Careers</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-lg">Technology Services</h3>
                    <ul className="text-sm space-y-1">
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Web Development</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Mobile Apps</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>IoT Solutions</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Tech Consulting</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Upskilling Programs</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-lg">AgriBusiness</h3>
                    <ul className="text-sm space-y-1">
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Coffee Products</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Packaging Solutions</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Agri I-Commerce</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Farmer Branding</li>
                        <li className='opacity-70 hover:opacity-90 hover:underline'>Web Presence Setup</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-lg">Contact Us</h3>
                    <p className="text-sm">123 Tech Park, Nairobi</p>
                    <p className="text-sm">+254 700 123456</p>
                    <p className="text-sm">info@koyya.co.ke</p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
                © 2023 KOYYA. All rights reserved.
            </div>
        </footer>
    );
}
