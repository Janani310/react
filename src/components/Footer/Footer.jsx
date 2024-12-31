import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';

const Footer = () => {
  const FooterLinks = [
    { link: '/Home', name: 'Home' },
    { link: '/shop', name: 'shop' },
    { link: '/About', name: 'About' },
    { link: '/contuct', name: 'contuct' },
  ];

  return (
    <footer className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Maiores alias.
            </p>
            <p className="text-gray-500 mt-4">
              Made with ❤️ by The Coding Journey
            </p>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
              title="Visit our YouTube channel"
            >
              Visit our YouTube channel
            </a>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black duration-300"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black duration-300"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/*company address*/}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-bold sm:text-left md-3'>Address</h1>
                <div>
                    <div className='flex item-center gap-3'>
                        <FaLocationArrow/>
                        <p>Noida,Uttar pradesh</p>
                    </div>
                    <div className='flex item-center gap-3 mt-6'>
                        <FaMobileAlt/>
                        <p>+91 1234567890</p>
                    </div>

                    {/*social link*/}
                    <div className='flex items-center gap-3 mt-6'>
                        <a href='#'>
                            <FaInstagram className='text-3xl 
                            hover:text-primary duration-300'/>
                        </a>
                        <a href='#'>
                            <FaFacebook className='text-3xl 
                            hover:text-primary duration-300'/>
                        </a>
                        <a href='#'>
                            <FaLinkedin className='text-3xl 
                            hover:text-primary duration-300'/>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
