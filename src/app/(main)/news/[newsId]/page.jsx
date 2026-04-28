import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const NewsDetailsPage = async ({ params }) => {
  const { newsId } = await params;
  console.log(newsId, "paramsRes");

  const news = await getNewsDetailsById(newsId);
  console.log(news);
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold text-[#403f3f] mb-5">Dragon News</h2>

      {/* news details card */}
      <div className="max-w-[840px] mx-auto">
        {/* go home button */}
        <Link
          href="/"
          className="mb-5 flex gap-3 items-center pl-4 text-[#d72050]"
        >
          <IoArrowBack />
          Back to Home
        </Link>
        <div className="p-8 pb-4 border border-[#e7e7e7] rounded-md  mb-15">
          {/* category badge */}
          <div className="badge rounded-full bg-[#d72050] py-4 px-3 text-[#ffffff] font-semibold mb-2 ">
            Category #{news.category_id}
          </div>

          {/* title */}
          <h2 className="text-[#403f3f] text-2xl font-bold mb-3">
            {news.title}
          </h2>

          {/* author */}
          <div className="mb-5 pb-5 border-b border-[#e7e7e7] flex justify-between items-center">
            <div className="flex gap-3 items-center">
              {/* author image */}
              <Image
                src={news?.author?.img}
                alt={news.author?.name}
                width={40}
                height={40}
                className="rounded-full"
              />

              {/* author name */}
              <h2 className="text-xl font-semibold">{news?.author?.name}</h2>
            </div>
            {/* ratings and views */}
            <div>
              <h2 className="flex items-center gap-3">
                {" "}
                <FaStar className="text-[#FF8C47]" /> {news.rating.number}
              </h2>
              <h2 className="flex items-center gap-3">
                {" "}
                <FaEye />
                {news.total_view}
              </h2>
            </div>
          </div>

          {/* news image */}
          <Image
            src={news?.image_url}
            alt={news.author?.name}
            width={300}
            height={400}
            className="w-full mb-5"
          />
          <p className="text-[#706f6f] mb-4">{news.details}</p>
          <button className="btn bg-[#D72050] text-[#FFFFFF]">
            <Link
              href={`/category/${news.category_id}`}
              className=" flex gap-3 items-center"
            >
              <IoArrowBack />
              All news in these category
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
