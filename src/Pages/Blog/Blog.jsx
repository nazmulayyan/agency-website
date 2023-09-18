import Banner from "../Shared/Banner/Banner"
import BlogCard from "./BlogCard/BlogCard"
import BlogCategories from "./BlogCategories/BlogCategories"
import { blogsData } from "./BlogData/blogdata"
import BlogSearch from "./BlogSearch/BlogSearch"
import BlogTag from "./BlogTag/BlogTag"
import RecentBlogCard from "./RecentBlogCard/RecentBlogCard"

import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';


const Blog = () => {
    const SidebarStyle = "bg-[#1F2732] px-8 py-7 text-white rounded-md"
    const socialIconStyle = "bg-white text-[#FF497C] text-[50px] p-4 hover:bg-[#FF497C] hover:text-white transition-all duration-700"
    return (
        <section className="">
            {/* banner */}
            <Banner title="Right Sidebar" />
            {/* blog card */}
            <div className="container py-[120px] flex gap-24">
                <div className="grid grid-cols-2 gap-14 w-full md:w-1/2 lg:w-2/3">
                    {
                        blogsData.map((blog, index) => <BlogCard key={index} blog={blog} />)
                    }
                </div>
                {/* side bar */}
                <div className="w-full md:w-1/2 lg:w-1/3 space-y-8">
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Search</h3>
                        <BlogSearch />
                    </div>
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Recent Posts</h3>
                        <div className="flex flex-col items-center gap-6">
                            {
                                blogsData.slice(0,3).map((blog, index) => (
                                    <RecentBlogCard key={index} blog={blog} />
                                ))
                            }
                        </div>

                    </div>
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Categories</h3>
                        <div className="flex flex-col gap-3">

                            <BlogCategories categoriesName={'Business'} />
                            <BlogCategories categoriesName={'Digital Agency'} />
                            <BlogCategories categoriesName={'Introductions'} />
                            <BlogCategories categoriesName={'New Technologies'} />
                            <BlogCategories categoriesName={'Web Development'} />
                        </div>

                    </div>
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Tags</h3>
                        <div className="grid grid-cols-2  gap-4" style={{ gridAutoFlow: "dense" }}>
                            <BlogTag blogTag={"Consulting"} />
                            <BlogTag blogTag={"Agency"} />
                            <BlogTag blogTag={"Business"} />
                            <BlogTag blogTag={"Digital"} />
                            <BlogTag blogTag={"Experience"} />
                            <BlogTag blogTag={"Technology"} />

                        </div>
                    </div>
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Follow Us</h3>
                        <div className="flex  items-center gap-5">
                            <FaFacebookF className={`${socialIconStyle}`} />
                            <FaTwitter className={`${socialIconStyle}`} />
                            <FaInstagramSquare className={`${socialIconStyle}`} />
                            <FaLinkedinIn className={`${socialIconStyle}`} />

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Blog