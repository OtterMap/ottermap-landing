'use client'
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useRouter } from "next/navigation";
import { statecontext } from "../utils/context/context";
import { customTrack } from "../utils/mixpanel/customTrack";
import slugify from "slugify";
import ScrollUpArrow from '../icons/scrollUpArrow.svg';
import Image from "next/image";
import { motion } from 'framer-motion'

const page = () => {
    const { blogs, setblogs, fetchBlogs } = statecontext();
    const router = useRouter();
    const [position, setPosition] = useState("top")

    useEffect(() => {
        if (!blogs || blogs.length === 0) {
            fetchBlogs();
        }
        setPosition("top")
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setPosition("bottom")
            } else {
                setPosition("top")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div>
            <motion.div
                className={`fixed ${position === "top" ? "top-0 right-1/2 transform -translate-x-1/2" : "bottom-6 right-1/2"} bg-white border p-2 rounded-full shadow-lg cursor-pointer z-50`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Image src={ScrollUpArrow} alt="scroll to top" className="w-6" />
            </motion.div>

            <Navbar />
            <div className='text-3xl text-center font-bold mt-10 mb-0'>
                Blogs
            </div>
            {
                !blogs || blogs.length === 0 &&
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#218448]"></div>
                </div>
            }
            <div className="flex flex-wrap max-lg:flex-col px-20 max-lg:px-10 max-sm:px-2">

                {
                    blogs && blogs.length > 0 &&
                    blogs.map((blog) => {
                        return <div key={blog.id} onClick={() => {
                            customTrack("Blog Cliked on all blog page", { blogTopic: blog.topic, blogId: blog.id });
                            const slug = slugify(blog.topic, { lower: true, strict: true });
                            router.push(`/blog/${slug}/${blog.id}`)
                        }}
                            className="flex justify-center gap-8 w-1/3 max-lg:w-full pt-10 pb-2 cursor-pointer">
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
                    })
                }

            </div>
            <Footer />
        </div>
    )
}

export default page
