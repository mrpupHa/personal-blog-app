import { Search } from "lucide-react";
import { useState } from "react";

import BlogCard from "./BlogCard";

import authorImage from "../assets/images/tourist.jpg";

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

const categories = ["Highlight", "Cat", "Inspiration", "General"];

function ArticleSection() {
  const [isActive, setIsActive] = useState("Highlight");

  return (
    <>
      <div className="flex flex-col gap-[48px]">
        <div>
          <h3>Latest articles</h3>
        </div>
        <div className="flex justify-between bg-brown-200 rounded-lg px-[24px] py-[16px]">
          <div className="flex gap-[8px]">
            {categories.map((category) => (
              <button>{category}</button>
            ))}
          </div>
          <div className="relative flex items-center w-[360px] pl-[16px] py-[12px] pr-[12px] bg-white rounded-md">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
              className="border-none bg-transparent outline-none w-full text-[16px]"
            />
            <Search className="h-[24px] w-[24px] text-brown-400" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleSection;
