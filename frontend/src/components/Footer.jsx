// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

//         <div>
//             <img src={assets.logo} className='mb-5 w-32' alt="" />
//             <p className='w-full md:w-2/3 text-gray-600'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//             </p>
//         </div>

//         <div>
//             <p className='text-xl font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy policy</li>
//             </ul>
//         </div>

//         <div>
//             <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>+1-212-456-7890</li>
//                 <li>contact@foreveryou.com</li>
//             </ul>
//         </div>

//       </div>

//         <div>
//             <hr />
//             <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
//         </div>

//     </div>
//   )
// }

// export default Footer


import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="ForeverYou Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            ForeverYou is your one-stop destination for the latest trends in
            fashion. From casual wear to formal attire, we bring you
            high-quality clothing that redefines style and comfort.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#delivery" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Phone: +1-212-456-7890</li>
            <li>
              Email:{" "}
              <a
                href="mailto:contact@foreveryou.com"
                className="hover:underline"
              >
                contact@foreveryou.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2024 ForeverYou - All Rights Reserved. Designed for fashion-forward
          individuals.
        </p>
      </div>
    </div>
  );
};

export default Footer;
