import { useEffect } from "react";
import { statecontext } from "../../utils/context/context";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const { blogs, setblogs, fetchBlogs } = statecontext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!blogs || blogs.length === 0) {
            fetchBlogs();
        }
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <div className='text-3xl text-center font-bold mt-20'>
                Blogs
            </div>
            {
                !blogs || blogs.length === 0 &&
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#218448]"></div>
                </div>
            }
            <div className="flex flex-wrap">

                {
                    blogs && blogs.length > 0 &&
                    blogs.map((blog) => {
                        return <div key={blog.id} onClick={() => navigate(`/blog/${blog.topic}/${blog.id}`)} className="flex justify-center gap-8 w-1/3 pt-28 pb-2 cursor-pointer">
                            <div className='bg-[#f4f5fb] rounded-xl w-[90%] flex flex-col gap-8 pb-7 mt-2'>

                                <div className='flex justify-center mt-6 mx-6'>
                                    <img src={blog.thumbnail} alt="" loading='lazy' />
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col gap-3 pl-6 pr-9'>
                                        <div className='text-base font-medium'>
                                            {blog.topic}
                                        </div>
                                        <div className='text-base font-normal text-[#667085]'>
                                            {blog.summary}
                                        </div>
                                    </div>
                                    <div className='flex gap-3 pl-6 items-center'>
                                        <div>
                                            <img className='w-8 h-8 rounded-full' src={blog.person} alt="" />
                                        </div>
                                        <div>
                                            <div className='text-sm font-normal object-cover'>{blog.updated_by || "Manjeet"}</div>
                                            <div className='text-sm font-normal text-[#667085]'>{blog.date_posted}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
            <Footer />
        </div>
    )
}

export default Blogs
