import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = ({ title, description, category, image, id }) => {
  // Convert description to an array of words and limit to 50 words
  const shortDescription = description.split(' ').slice(0, 50).join(' ') + (description.split(' ').length > 50 ? '...' : '');

  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
        <Image src={image} width={400} height={400} className='border-b border-black' alt='' />
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{shortDescription}</p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
          Read More <Image src={assets.arrow} width={12} className='ml-2' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;