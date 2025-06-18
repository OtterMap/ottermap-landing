import { statecontext } from "../../utils/context/context";
import BackIcon from '../../assets/blog/back.svg';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Blog = () => {

  const { blogs, setblogs, fetchBlogs } = statecontext();
  const navigate = useNavigate();
  const { slug, id } = useParams();
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [nextBlog, setNextBlog] = useState(null);

  useEffect(() => {
    if (!blogs || blogs.length === 0) {
      fetchBlogs();
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const foundBlog = blogs.filter(blog => blog.id.toString() === id); // ensure both are strings
      setFilteredBlog(foundBlog || null);

      const next = blogs[foundBlog[0].id + 1];
      setNextBlog(next || blogs[foundBlog[0].id + 2] || blogs[foundBlog[0].id - 2] || null);
    }
    window.scrollTo(0, 0);
  }, [blogs, id]);

  ;
  return (
    <>
      <Navbar />
      {
        !filteredBlog || filteredBlog.length === 0 &&
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#218448]"></div>
        </div>
      }
      {
        filteredBlog && filteredBlog.length > 0 &&
        <div className="px-20 max-lg:px-10 max-sm:px-2 pt-7">
          <div className="rounded-2xl relative h-[510px] max-md:h-[200px]">
            <img src={filteredBlog[0].thumbnail} alt="thumbnail" className="w-full h-full object-fill rounded-2xl" />
            <div onClick={() => navigate(-1)} className="absolute top-[2%] left-[1%] bg-white rounded-full p-1 max-sm:p-[0.7px] cursor-pointer shadow-md">
              <img src={BackIcon} alt="back icon" />
            </div>
          </div>
          <div className="mt-7 flex gap-3 items-center">
            <div>
              <img className="w-16 h-16 max-sm:w-10 max-sm:h-10 min-h-5 min-w-5 object-cover border rounded-full" src={filteredBlog[0].author.profile_image} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xl max-sm:text-sm font-medium text-[#101828]">{filteredBlog[0].author.name || "Ottermap"}</div>
              <div className="text-lg max-sm:text-xs text-[#667085] font-normal">{filteredBlog[0].date_posted}</div>
            </div>
          </div>
          <div className="mt-12">
            <div className="text-4xl font-medium text-[#101828]">
              {filteredBlog[0].topic}
            </div>
            <div className="mt-12 text-2xl font-normal text-[#667085]">
              {filteredBlog[0].summary}
            </div>
          </div>
          <div className="mt-24 prose-xl pb-24 px-5 border-b border-[#8C8C8C]" dangerouslySetInnerHTML={{ __html: filteredBlog[0].content }} />
          <div className="flex items-start justify-end mt-8 gap-2">
            <div className="text-base max-sm:text-xs font-bold text-nowrap">Read next:</div>
            <div onClick={() => navigate(`/blog/${nextBlog.topic}/${nextBlog.id}`)} className="text-base max-sm:text-xs font-medium hover:underline cursor-pointer">
              {nextBlog?.topic}
            </div>
          </div>
          <div className="mt-20">
            <div className="text-[#101828] text-3xl max-sm:text-xl font-medium">
              More articles on the go
            </div>
            <div className="flex flex-wrap max-lg:flex-col mb-20">
              {blogs
                .filter(blog => blog.id.toString() !== id) // Exclude the current blog
                .slice(0, 3)
                .map(blog => (
                  <div key={blog.id} onClick={() => navigate(`/blog/${blog.topic}/${blog.id}`)} className="flex justify-center gap-8 max-lg:w-full w-1/3 pt-28 max-sm:pt-10 pb-2 cursor-pointer">
                    <div className='bg-[#f4f5fb] rounded-xl w-[90%] flex flex-col justify-between gap-8 pb-7 mt-2'>

                      <div className='flex justify-center mt-6 mx-6'>
                        <img className='w-full h-50 max-sm:h-32 object-fill rounded' src={blog.thumbnail} alt="" loading='lazy' />
                      </div>
                      <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-3 pl-6 pr-9'>
                          <div className='text-base max-sm:text-sm font-medium'>
                            {blog.topic}
                          </div>
                          <div className='text-base max-sm:text-xs font-normal text-[#667085] line-clamp-2'>
                            {blog.summary}
                          </div>
                        </div>
                        <div className='flex gap-3 pl-6 items-center'>
                          <div>
                            <img className='w-8 h-8 rounded-full' src={blog.author.profile_image} alt="" />
                          </div>
                          <div>
                            <div className='text-sm max-sm:text-xs font-normal object-cover'>{blog.author.name || "Ottermap"}</div>
                            <div className='text-sm max-sm:text-xs font-normal text-[#667085]'>{blog.date_posted}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
      }
      <Footer />
    </>
  );
};
export default Blog
