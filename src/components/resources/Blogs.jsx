import Blog1 from '../../assets/resources/blog/blog1.svg';
import BlogPerson1 from '../../assets/resources/blog/blogPerson1.svg';
const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "Behind the Map: The Tech That Powers Ottermap",
            desc: "Deep dive into the fundamentals of the tech behind the Ottermap platform.",
            author: "Mehak",
            date: "19 feb 2025",
            image: Blog1,
            person: BlogPerson1
        },
        {
            id: 2,
            title: "User Experience Redefined: Navigating the Ottermap Interface",
            desc: "Discover how user-centric design principles shape the Ottermap experience.",
            author: "Alex",
            date: "19 feb 2025",
            image: Blog1,
            person: BlogPerson1
        },
        {
            id: 3,
            title: "Data Integrity in Mapping: Ensuring Accurate Representation",
            desc: "An analysis of the methods used to maintain data accuracy in Ottermap.",
            author: "Jordan",
            date: "19 feb 2025",
            image: Blog1,
            person: BlogPerson1
        }
    ]
    return (
        <div className='max-sm:px-5 px-20'>
            <div className='text-4xl max-sm:text-xl font-bold pb-10 mt-1'>
                Our Blogs
            </div>
            <div className='flex max-lg:flex-col gap-5 w-full'>
                {blogs.map((blog) => (
                    <div key={blog.id} className="flex justify-center gap-8 w-1/3 max-lg:w-full pb-2">
                        <div className='bg-[#f4f5fb] rounded-xl w-[90%] max-sm:w-full flex flex-col gap-8 pb-14 max-sm:pb-5 mt-2'>

                            <div className='flex justify-center mt-6 mx-6'>
                                <img src={blog.image} alt="" loading='lazy' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-3 pl-6 pr-9'>
                                    <div className='text-base max-sm:text-xs font-medium'>
                                        {blog.title}
                                    </div>
                                    <div className='text-base max-sm:text-xs font-normal text-[#667085]'>
                                        {blog.desc}
                                    </div>
                                </div>
                                <div className='flex gap-3 pl-6 items-center'>
                                    <div>
                                        <img className='w-8 h-8 rounded-full' src={blog.person} alt="" />
                                    </div>
                                    <div>
                                        <div className='text-sm max-sm:text-xs font-normal object-cover'>{blog.author}</div>
                                        <div className='text-sm max-sm:text-xs font-normal text-[#667085]'>{blog.date}</div>
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
