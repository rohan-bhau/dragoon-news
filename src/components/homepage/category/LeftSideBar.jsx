import Link from 'next/link';
import React from 'react'

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">All Categories</h2>

      <ul className="flex flex-col gap-2 mt-6">
        {categories.news_category.map((category) => (
          <li
            key={category.category_id}
            className={`${activeId === category.category_id ? "bg-[#E7E7E7] text-[#403F3F]" : ""}
                     rounded-md font-semibold text-center text-lg text-[#9f9f9f]`}
          >
            <Link
              href={`/category/${category.category_id}`}
              className="block py-4"
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar
