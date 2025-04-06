import logo from "../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavbarLinks } from "../data";
import { useState } from "react";
import Button from "./ui/button";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    return (
        <div className="w-full bg-white p-4 flex items-center justify-between fixed top-0 left-0 z-50 shadow-lg">
            {/* Logo */}
            <div className="w-72 h-24 object-cover flex-shrink-0 lg:block md:block hidden">
                <img src={logo} alt="logo" className="w-full h-full object-cover" />
            </div>

            {/* Center nav links + hamburger */}
            <div className="w-max flex items-center gap-8">
                {/* Mobile menu icon */}
                <div className="relative z-50">
                    <div className="lg:hidden md:hidden flex items-center">
                        <MenuIcon className="text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                    </div>

                    {/* Desktop nav links */}
                    <div className="hidden lg:flex md:flex space-x-8">
                        {NavbarLinks.map((data) => (
                            <div
                                key={data.id}
                                className="relative group text-xl cursor-pointer flex items-center space-x-1"
                            >
                                <div className="text-xl flex items-center">
                                    {data.label}
                                    {data.dropdown && (
                                        <KeyboardArrowDownIcon className="ml-1 text-base" />
                                    )}
                                </div>

                                {data.dropdown && (
                                    <div className="absolute left-0 top-full mt-1 w-max bg-white shadow-lg border border-gray-300 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                                        {data.dropdown.map((item, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-2 text-black hover:bg-gray-200 whitespace-nowrap text-sm"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Sidebar */}
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                            } transition-transform duration-300 ease-in-out`}
                    >
                        <div className="flex justify-end p-4">
                            <CloseIcon className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
                        </div>
                        <div className="flex flex-col space-y-4 p-4">
                            {NavbarLinks.map((data) => (
                                <div key={data.id} className="text-lg">
                                    <div
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === data.id ? null : data.id)
                                        }
                                    >
                                        <span>{data.label}</span>
                                        {data.dropdown && (
                                            <KeyboardArrowDownIcon className="text-base" />
                                        )}
                                    </div>
                                    {data.dropdown && openDropdown === data.id && (
                                        <div className="ml-4 mt-2 space-y-1">
                                            {data.dropdown.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="text-sm text-gray-700 hover:bg-gray-200 px-2 py-1 rounded"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Background overlay */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black opacity-50 z-40"
                            onClick={() => setIsOpen(false)}
                        ></div>
                    )}
                </div>
            </div>

            {/* Right Button */}
            <div className="w-max">
                <Button className="rounded-full text-lg bg-red-500 text-white px-8 py-3">
                    Let's Connect
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
