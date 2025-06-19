import axios from "axios";
import { createContext, useContext, useState } from "react";

const statecontexts = createContext();

export const StateContext = ({ children }) => {
    const [blogs, setblogs] = useState([]);
    const fetchBlogs = async () => {
        const res = await axios.get('https://dev.ottermap.com/v1/api/blogs/');
        setblogs(res.data);
        console.log(blogs);
        console.log(res.data);
    }
    return <statecontexts.Provider value={{ blogs, setblogs, fetchBlogs }}>
        {children}
    </statecontexts.Provider >;
};

export const statecontext = () => useContext(statecontexts);