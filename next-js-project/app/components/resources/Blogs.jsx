import Image from 'next/image';
import Blog1 from '../../icons/resources/blog/blog1.svg';
import BlogPerson1 from '../../icons/resources/blog/blogPerson1.svg';
import { statecontext } from '@/app/utils/context/context';
import { useEffect } from 'react';
import { customTrack } from '@/app/utils/mixpanel/customTrack';
import { useRouter } from 'next/navigation';
const Blogs = () => {
    const router = useRouter();
    const { blogs, setblogs, fetchBlogs } = statecontext();
    useEffect(() => {
        if (!blogs || blogs.length === 0) {
            fetchBlogs();
        }
    }, []);
    return (
        <div className='max-sm:px-5 px-20 pb-28'>
            <div className='text-4xl max-sm:text-xl font-bold pb-10 mt-1'>
                Our Blogs
            </div>
            <div className='flex flex-wrap w-full'>
                {blogs.slice(0, 3).map((blog) => (
                    <div key={blog.id} onClick={() => {
                        customTrack("Blog Cliked on Resources page", { blogTopic: blog.topic, blogId: blog.id });
                        router.push(`/blog/${blog.topic}/${blog.id}`)
                    }} className="flex justify-center gap-8 w-1/3 max-lg:w-full pb-2 cursor-pointer">
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
                                        <img className='w-8 h-8 rounded-full object-cover' src={blog.author.profile_image} alt="" />
                                    </div>
                                    <div>
                                        <div className='text-sm max-sm:text-xs font-normal object-cover'>{blog.author.name || "Ottermap"}</div>
                                        <div className='text-sm max-sm:text-xs font-normal text-[#667085]'>{blog.date_posted}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <span className='flex justify-center items-center text-white mt-10'>
                <div onClick={() => {

                    customTrack("All blog button clicked on resource page");
                    router.push(`/blog`)
                }}
                    className='h-fit w-fit bg-[#218448] rounded-full py-2 px-7 cursor-pointer'>
                    More Blogs
                </div>
            </span>
        </div>
    )
}

export default Blogs
