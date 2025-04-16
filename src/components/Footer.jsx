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
            <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
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
                    <ul className="text-sm space-y-1">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-lg">Technology Services</h3>
                    <ul className="text-sm space-y-1">
                        <li>Web Development</li>
                        <li>Mobile Apps</li>
                        <li>IoT Solutions</li>
                        <li>Tech Consulting</li>
                        <li>Upskilling Programs</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-lg">AgriBusiness</h3>
                    <ul className="text-sm space-y-1">
                        <li>Coffee Products</li>
                        <li>Packaging Solutions</li>
                        <li>Agri I-Commerce</li>
                        <li>Farmer Branding</li>
                        <li>Web Presence Setup</li>
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
