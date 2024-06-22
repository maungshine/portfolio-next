import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#040506] text-gray-700 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Brand Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">MAUNG SHINE</h2>
            <p className='pr-4'>A web developer, who loves creating web application that users love.</p>
          </div>
          
          {/* Navigation Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Navigation</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-blue-500 dark:hover:text-blue-400">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/devmaungshine" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/maungshine" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/maungshine" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Contact Us</h3>
            <p>Feel free to get in touch with us via email:</p>
            <p className="font-medium text-blue-500 dark:text-blue-400">devmaungshine@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4">
        <div className="container mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2024. All rights reserved By MAUNG SHINE.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
