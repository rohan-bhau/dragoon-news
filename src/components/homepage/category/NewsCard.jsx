import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({news}) => {
  return (
    <div className="border border-[#e7e7e7] rounded-md   ">
      {/* author */}
      <div className="flex justify-between items-center py-4 px-5 bg-[#f3f3f3]">
        {/* left */}
        <div className="flex justify-between items-center gap-3">
          <Image
            src={news.author?.img}
            alt={"author name"}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="font-semibold text-xl">{news.author?.name}</h2>
            <p className="text-[#706f6f]">{news.author?.published_date}</p>
          </div>
        </div>
        {/* right */}
        <div className="flex justify-between items-center gap-2">
          <CiBookmark className="text-xl cursor-pointer" />
          <CiShare2 className="text-xl cursor-pointer" />
        </div>
      </div>
      {/* news Data */}
      <div className="py-4 px-5">
        <h2 className="text-2xl font-bold mb-5">{news.title}</h2>
        <div className="pb-5 border-b border-[#e7e7e7]">
          <Image
            src={news?.image_url}
            alt="news photo"
            width={300}
            height={300}
            className="w-full mb-8"
          />
          <p className="text-[16px] text-[#706f6f] line-clamp-2">
            {news?.details}
          </p>
          <Link
            href={`/news/${news._id}`}
            className="font-bold text-orange-500"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* ratings */}
      <div className='flex justify-between px-5 py-4'>
        <h2 className="flex justify-center items-center gap-3">
          {" "}
          <FaStar className="text-[#FF8C47]" /> {news.rating.number}
        </h2>
        <h2 className="flex justify-center items-center gap-3">
          {" "}
          <FaEye />
          {news.total_view}
        </h2>
      </div>
    </div>
  );
}

export default NewsCard
