import React from 'react'
import Blog1 from '../../../assets/industries/landscaping/blog/blog1.svg';
import BlogPerson1 from '../../../assets/industries/landscaping/blog/blogPerson1.jpg';
const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "The landscaping industry",
            desc: "Discover how gut bacteria impact your mood, immunity, and health, plus natural ways to boost gut wellness.",
            author: "Rajeev Chahal",
            date: "19 feb 2025",
            image: Blog1,
            person: BlogPerson1
        },
        {
            id: 2,
            title: "The landscaping industry",
            desc: "Discover how gut bacteria impact your mood, immunity, and health, plus natural ways to boost gut wellness.",
            author: "Rajeev Chahal",
            date: "19 feb 2025",
            image: Blog1,
            person: BlogPerson1
        },
        {
            id: 3,
            title: "The landscaping industry",
            desc: "Discover how gut bacteria impact your mood, immunity, and health, plus natural ways to boost gut wellness.",
            author: "Rajeev Chahal",
            date: "19 feb 2025",
            image: Blog1,
            person: BlogPerson1
        }
    ]
    return (
        <div>
            <div className='flex gap-5 px-20 w-full'>
                {blogs.map((blog) => (
                    <div key={blog.id} className="flex justify-center gap-8 w-1/3 pt-28 pb-2">
                        <div className='bg-[#f4f5fb] rounded-xl w-[90%] flex flex-col gap-8 pb-14 mt-2'>

                            <div className='flex justify-center mt-6 mx-6'>
                                <img src={blog.image} alt="" loading='lazy' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-3 pl-6 pr-9'>
                                    <div className='text-base font-medium'>
                                        {blog.title}
                                    </div>
                                    <div className='text-base font-normal text-[#667085]'>
                                        {blog.desc}
                                    </div>
                                </div>
                                <div className='flex gap-3 pl-6 items-center'>
                                    <div>
                                        <img className='w-8 h-8 rounded-full' src={blog.person} alt="" />
                                    </div>
                                    <div>
                                        <div className='text-sm font-normal object-cover'>{blog.author}</div>
                                        <div className='text-sm font-normal text-[#667085]'>{blog.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs
