import { statecontext } from "../../utils/context/context";
import BackIcon from '../../assets/blog/back.svg';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "../common/Navbar";

const Blog = () => {
  const { blogs, setblogs } = statecontext();
  const navigate = useNavigate();

  const blogData = '<h1><u><em><strong>Artificial Intelligence (AI)</strong></em></u></h1>\r\n\r\n<hr />\r\n<p>It is no longer a futuristic concept&mdash;it is now embedded in our smartphones, homes, and even vehicles.</p>\r\n\r\n<p><img alt=\"\" src=\"https://plus.unsplash.com/premium_photo-1715639312136-56a01f236440?q=80&amp;w=2057&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\" style=\"border-style:solid; border-width:2px; float:left; height:271px; width:400px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style=\"text-align: center;\">&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h2 style=\"font-style:italic\"><tt>Voice assistants</tt></h2>\r\n\r\n<hr />\r\n<p>Like Siri and Alexa, personalized recommendations on Netflix or Amazon, and predictive text while typing are all examples of how AI subtly enhances our daily experiences.</p>\r\n\r\n<p><img alt=\"Siri\" src=\"https://images.unsplash.com/photo-1603184017968-953f59cd2e37?q=80&amp;w=2071&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\" style=\"height:133px; width:200px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\" style=\"height:333px; width:500px\" /></p>\r\n\r\n<hr />\r\n<h2><kbd><strong>Conclusion</strong></kbd></h2>\r\n\r\n<hr />\r\n<p>As AI continues to evolve, it will increasingly impact areas like healthcare, education, and transportation. While the benefits are vast, it&rsquo;s also important to consider the ethical implications and ensure responsible AI development.<br />\r\nThe future is not just about machines replacing humans, but about humans and machines working together to build smarter solutions for a better world.</p>\r\n\r\n<p><a href=\"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"><img alt=\"AI robo\" src=\"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\" style=\"float:left; height:400px; width:320px\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3><strong>Thanks for reading! 🚀✨</strong></h3>'



  const fetchBlogs = async () => {
    try {
      const res = await axios.get('https://dev.ottermap.com/v1/api/blogs/');
      setblogs(res.data); // this will update context state
      console.log("Fetched blogs:", res.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };


  useEffect(() => {
    fetchBlogs();
  }, []);


  if (!blogs || blogs.length === 0) {
    return <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#218448]"></div>
    </div>
  }

  return (
    <>
      <Navbar />
      <div className="px-20 pt-7">
        <div className="rounded-2xl relative h-[510px]">
          <img src={blogs[0].thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded-2xl" />
          <div onClick={() => navigate(-1)} className="absolute top-10 left-10 bg-white rounded-full p-1 cursor-pointer shadow-md">
            <img src={BackIcon} alt="back icon" />
          </div>
        </div>
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: blogData }} />
      </div>
    </>
  );
};
export default Blog
