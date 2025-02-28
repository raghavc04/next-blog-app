import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    const blogDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900'>
                <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} alt='Author Image' />
                <p>{author ? author : "No author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title ? title : 'No Title'}
            </td>
            <td className='px-6 py-4'>
                {blogDate ? blogDate : 'No Date'}
            </td>
            <td onClick={() => deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer relative group'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100'>
                    Delete Blog
                </span>
            </td>
        </tr>
    );
}

export default BlogTableItem;