import { assets } from '@/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await axios.post('/api/email', formData);
      if (response.data.success === true) {
        toast.success('You have successfully subscribed to our newsletter!');
        setEmail('');
      } else {
        toast.error('Failed to subscribe to newsletter. Please try again!');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
        <div className="flex items-center gap-4">
          <Link href="/admin" legacyBehavior>
            <a className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
              Admin Panel
            </a>
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} alt='' />
          </button>
        </div>
      </div>
      <div className='text-center my-8'>
         <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
         <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
          Discover the latest tech news, updates, and articles from around the world. Explore our blog section to find your next tech-related insight! Read more about our blog.
         </p>
         <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action=''>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter Your Email" className="py-4 outline-none px-3 flex-grow"/>
            <button className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>
            Subscribe
           </button>
         </form>
      </div>
    </div>
  );
}

export default Header;