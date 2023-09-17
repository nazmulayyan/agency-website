import { Link } from "react-router-dom";
import CtaButton from "../../../Components/CtaButton/CtaButton";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {

    //navbar links
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'Service', link: '/service' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact', link: '/contact' }
    ];

    const [open, setOpen] = useState(false);
    return (
        <div className=" border-b shadow-sm fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto">
                <nav className="md:flex items-center justify-between py-4 z-10">

                    <div>
                        <Link className="text-3xl text-navLinks uppercase" to="/">logo</Link>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white md:bg-transparent  md:z-auto -z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-[68px] opacity-100 md:h-auto h-[320px] ' : 'h-[-0px] top-[68px]'} md:opacity-100 opacity-0`}>

                        {navLinks.map((linkItem) => (
                            <li
                                className="md:ml-6 md:my-0 my-5"
                                key={linkItem.link}>

                                <Link
                                    className="text-base font-semibold uppercase md:text-navLinks text-navMenu hover:text-hoverNavMenu duration-200"
                                    to={linkItem.link}
                                >
                                    {linkItem.name}
                                </Link>

                            </li>
                        ))}

                        <div className="md:hidden md:opacity-0">
                            <CtaButton buttonText='have a project'></CtaButton>
                        </div>
                    </ul>

                    <div className="md:block hidden">
                        <CtaButton buttonText='have a project'></CtaButton>
                    </div>

                    <div onClick={() => setOpen(!open)} className="text-2xl text-white absolute bg-buttonBg py-1 px-2 right-8 top-4 cursor-pointer md:hidden">
                        {
                            open ? <HiXMark /> :  <HiBars3 />
                        }


                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;
