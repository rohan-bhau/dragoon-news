import LeftSideBar from "@/components/homepage/category/LeftSideBar";
import RightSideBar from "@/components/homepage/category/RightSideBar";
import { getCategories, getNewsByCategories } from "@/lib/data";
import Link from "next/link";
import React from "react";

// import { redirect } from "next/navigation"


const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "Params Res");
  const categories = await getCategories();
  // console.log("categories", categories.news_category)

  const news = await getNewsByCategories(id);
  // console.log(news)
  return (
    <div className="grid grid-cols-12 container mx-auto gap-3 mb-10">
      <div className=" col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className=" space-y-4 col-span-7">
        <h2 className="font-bold text-xl"> News By Category</h2>
        {news.length > 0 ? (
          news.map((n) => (
            <h2 className="p-6 rounded-md border" key={n._id}>
              {n.title}
            </h2>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20 px-6">
            {/* Icon */}
            <div className="text-6xl mb-4">📰</div>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2">
              No news in this category yet
            </h2>

            {/* Description */}
            <p className="text-gray-600 max-w-md mb-6">
              We’re working on bringing you the latest updates in this category.
              Please check back soon or explore other sections.
            </p>

            {/* Actions */}
            <div className="flex gap-4">
              <Link
                href="/"
                className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Go Home
              </Link>

              <Link
                href="/categories"
                className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className=" col-span-2">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
