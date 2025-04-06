import logo from "../assets/logo.png"
import Button from "../components/ui/button";
import { accordionData, NavbarLinks, projectData } from "../data";
import banner from "../assets/banner.png"
import card1 from "../assets/bannerCard1.png"
import card3 from "../assets/card3.png"
import profileImage1 from "../assets/profileImage1.png"
import profileImage2 from "../assets/profileImage2.png"
import keyPoint from "../assets/keyPoint.png"
import dummy1 from "../assets/dummy1.png"
import image12 from "../assets/image12.png"
import profileImage3 from "../assets/profileImage3.png"
import projectImage from "../assets/projectImage.png"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Accordion, AccordionItem } from "../components/ui/accordian";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CardSlider from "../components/ui/carsole";
import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const Home = () => {

    const reviews = [
        {
            quote: "Having a home based business is wonderful asset to your life. The problem still stands comes time your business.",
            name: "Jesica Harris",
            location: "Mumbai",
            imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            quote: "Starting a business from home gives you the flexibility to balance work and life. It's been an amazing journey.",
            name: "John Doe",
            location: "New York",
            imageUrl: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            quote: "The freedom to manage my own business and schedule has changed my life for the better.",
            name: "Sarah Lee",
            location: "Los Angeles",
            imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" w-full h-full">
            <div className=" w-full h-full">
                <Navbar />
            </div>
            <div className="w-full flex flex-col">
                <div className="relative w-full h-[120vh] flex items-center justify-center bg-black overflow-hidden">
                    <img
                        src={banner}
                        alt="Banner"
                        className="absolute w-full h-full object-cover brightness-75"
                    />
                    <div className="relative z-10 text-white text-center px-6 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                            Green Solution For Sustainable Future
                        </h1>
                        <p className="text-lg md:text-xl mt-6 leading-7 md:leading-9">
                            From cutting-edge green designs to recycling programs, we're dedicated to
                            transforming the world with eco-friendly products.
                        </p>
                    </div>
                    <div className="hidden md:grid grid-cols-12 gap-6 w-full px-10 absolute bottom-10 z-20">
                        <div className="col-span-5 bg-gray-300/5 backdrop-blur-lg p-4 rounded-2xl shadow flex items-center gap-4">
                            <img src={banner} alt="Sustainable" className="w-40 h-40 rounded-xl object-cover" />
                            <div className="text-white">
                                <h2 className="text-xl font-semibold">Where Sustainability meets Style.</h2>
                                <p className="text-white/80 text-sm mt-1">
                                    With green designs and recycling, we're making the world eco-friendly.
                                </p>
                                <a href="#" className="text-white underline text-sm mt-1 inline-block">
                                    Discover Our Services
                                </a>
                            </div>
                        </div>
                        <div className="col-span-2 bg-gray-300/5 backdrop-blur-lg p-6 rounded-2xl shadow flex flex-col items-center justify-center">
                            <div className="flex -space-x-4 mb-4">
                                <img src={profileImage1} className="w-10 h-10 rounded-full" />
                                <img src={profileImage2} className="w-10 h-10 rounded-full" />
                                <img src={profileImage3} className="w-10 h-10 rounded-full" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">10M+</h2>
                            <p className="text-white/80 text-sm">Customers</p>
                        </div>
                        <div className="col-span-5 bg-gray-300/5 backdrop-blur-lg p-6 rounded-2xl shadow flex items-start gap-4">
                            <img src={card3} className="w-10 h-10" />
                            <div className="text-white">
                                <h2 className="text-xl font-semibold">Efficient Solar Panels</h2>
                                <p className="text-white/80 text-sm mt-1">
                                    Our solar panels deliver maximum efficiency...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden w-full px-4 mt-10 mb-16 grid grid-cols-1 gap-6">
                    <div className="bg-gray-300/5 backdrop-blur-lg p-4 rounded-2xl shadow flex flex-col gap-4">
                        <img src={banner} className="w-full h-48 rounded-xl object-cover" />
                        <div className="text-black">
                            <h2 className="text-lg font-semibold">Where Sustainability meets Style.</h2>
                            <p className="text-black/80 text-sm mt-1">
                                With green designs and recycling, we're making the world eco-friendly.
                            </p>
                            <a href="#" className="text-black underline text-sm mt-1 inline-block">
                                Discover Our Services
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-300/5 backdrop-blur-lg p-4 rounded-2xl shadow text-black flex flex-col items-center">
                        <div className="flex -space-x-4 mb-3">
                            <img src={profileImage1} className="w-10 h-10 rounded-full" />
                            <img src={profileImage2} className="w-10 h-10 rounded-full" />
                            <img src={profileImage3} className="w-10 h-10 rounded-full" />
                        </div>
                        <h2 className="text-2xl font-bold">10M+</h2>
                        <p className="text-black/80 text-sm">Customers</p>
                    </div>
                    <div className="bg-gray-300/5 backdrop-blur-lg p-4 rounded-2xl shadow flex gap-4">
                        <img src={card3} className="w-10 h-10" />
                        <div className="text-black">
                            <h2 className="text-lg font-semibold">Efficient Solar Panels</h2>
                            <p className="text-black/80 text-sm mt-1">
                                Our solar panels deliver maximum efficiency...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full bg-white p-14">
                <div className="text-4xl font-semibold mb-14">Why Green Energy Key Points</div>
                <div className="relative w-full">
                    <div className="absolute top-28 right-0 w-full h-full bg-gray-200 flex items-center max-w-4xl">
                        <img src={keyPoint} alt="" className=" w-full h-full object-cover absolute inset-0 z-0 md:block lg:block hidden" />
                        <div className=" w-full lg:flex md:flex flex-col gap-8 max-w-md ml-52 z-50">
                            <p className="text-2xl font-medium text-white leading-8 mt-32 md:block lg:block hidden">
                                Green Energy philosophy is to work in the best interest of its customers. We are System Integrator, having collaborations.
                            </p>
                            <div className="w-max md:block lg:block hidden">
                                <Button className="bg-blue-950 text-white rounded-full flex items-center gap-4 pl-6 pe-3 py-2 text-base font-semibold hover:bg-blue-950 transition">
                                    Know More
                                    <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                        <ArrowForwardIcon fontSize="small" className="text-white" />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-0 max-w-7xl w-full">
                        {[...Array(6)].map((_, idx) => (
                            <div
                                key={idx}
                                className="relative z-10 border col-span-3 border-gray-200 bg-white p-10 flex flex-col gap-8"
                            >
                                <ElectricBoltIcon className="!text-7xl text-red-500" fontSize="inherit" />
                                <div className="text-5xl font-bold text-red-500">200MN+</div>
                                <div className="text-gray-500 font-medium text-3xl leading-10">Capacities Executed</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative w-full h-full mt-28">
                <div className=" w-full h-screen flex-shrink-0">
                    <img src={dummy1} alt="Background" className=" inset-0 w-full h-full object-cover brightness-50" />
                </div>
                <div className="absolute bottom-0 left-60 transform -translate-x-1/2 translate-y-[15%] w-[60%] opacity-20 pointer-events-none">
                    <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2">
                        <circle cx="100" cy="100" r="3" />
                        <line x1="100" y1="100" x2="100" y2="10" />
                        <line x1="100" y1="100" x2="30" y2="170" />
                        <line x1="100" y1="100" x2="170" y2="170" />
                        <path d="M100 10 C102 40, 105 50, 100 100" />
                        <path d="M30 170 C55 160, 75 140, 100 100" />
                        <path d="M170 170 C140 160, 125 140, 100 100" />
                        <line x1="100" y1="100" x2="100" y2="220" />
                    </svg>
                </div>
                <div className="absolute bottom-0 left-[40%] transform -translate-x-1/2 translate-y-[20%] w-[50%] opacity-20 pointer-events-none">
                    <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2">
                        <circle cx="100" cy="100" r="3" />
                        <line x1="100" y1="100" x2="100" y2="10" />
                        <line x1="100" y1="100" x2="30" y2="170" />
                        <line x1="100" y1="100" x2="170" y2="170" />
                        <path d="M100 10 C102 40, 105 50, 100 100" />
                        <path d="M30 170 C55 160, 75 140, 100 100" />
                        <path d="M170 170 C140 160, 125 140, 100 100" />
                        <line x1="100" y1="100" x2="100" y2="220" />
                    </svg>
                </div>
                <div className="absolute bottom-0 left-[60%] transform -translate-x-1/2 translate-y-[20%] w-[40%] opacity-20 pointer-events-none">
                    <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2">
                        <circle cx="100" cy="100" r="3" />
                        <line x1="100" y1="100" x2="100" y2="10" />
                        <line x1="100" y1="100" x2="30" y2="170" />
                        <line x1="100" y1="100" x2="170" y2="170" />
                        <path d="M100 10 C102 40, 105 50, 100 100" />
                        <path d="M30 170 C55 160, 75 140, 100 100" />
                        <path d="M170 170 C140 160, 125 140, 100 100" />
                        <line x1="100" y1="100" x2="100" y2="220" />
                        <rect x="80" y="220" width="40" height="10" fill="white" stroke="white" />
                        <line x1="50" y1="230" x2="150" y2="230" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div className="absolute inset-0 flex flex-col lg:px-24 md:px-24 px-6 text-white lg:p-16 md:p-16 py-60 w-full">
                    <div className="w-full flex lg:flex-row md:flex-row flex-col justify-between items-center">
                        <h1 className="lg:text-6xl md:text-6xl text-4xl font-bold leading-tight w-full">Green Services <br /> For A Sustainable <br /> Future.</h1>
                        <div className=" translate-y-20">
                            <p className="text-2xl leading-8"> At Green Energy, our mission is to lead the way in sustainability through a range of innovative solutions designed to protect our planet.</p>
                            <Button className="bg-blue-950 text-white rounded-full flex items-center gap-4 pl-6 pe-3 py-2 text-base font-semibold hover:bg-blue-950 transition mt-8">
                                Know More
                                <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                    <ArrowForwardIcon fontSize="small" className="text-white" />
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative lg:absolute bottom-0 w-full mt-10 lg:mt-0 px-4 lg:px-14 z-20">
                    <div className="flex lg:flex-row flex-col gap-6 overflow-x-auto mb-10">
                        <div className="min-w-[350px] bg-pink-100 p-6 rounded-3xl flex items-center justify-between gap-6 shadow">
                            <div className="flex flex-col gap-4">
                                <div className="text-lg font-semibold text-black">
                                    System Design and Sizing
                                </div>
                                <div className="text-sm font-medium text-gray-600">
                                    Our solar panels deliver maximum output for your needs.
                                </div>
                                <Button className="border border-blue-950 text-black rounded-full flex items-center gap-4 px-4 py-2 text-sm hover:bg-blue-950 hover:text-white transition mt-2 w-max">
                                    Know More
                                    <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                        <ArrowForwardIcon className="text-white w-4 h-4" />
                                    </span>
                                </Button>
                            </div>
                            <div className="bg-white p-4 w-24 h-24 rounded-2xl flex items-center justify-center">
                                <img
                                    src={image12}
                                    alt="Service Icon"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="min-w-[350px] bg-pink-100 p-6 rounded-3xl flex items-center justify-between gap-6 shadow">
                            <div className="flex flex-col gap-4">
                                <div className="text-lg font-semibold text-black">
                                    System Design and Sizing
                                </div>
                                <div className="text-sm font-medium text-gray-600">
                                    Our solar panels deliver maximum output for your needs.
                                </div>
                                <Button className="border border-blue-950 text-black rounded-full flex items-center gap-4 px-4 py-2 text-sm hover:bg-blue-950 hover:text-white transition mt-2 w-max">
                                    Know More
                                    <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                        <ArrowForwardIcon className="text-white w-4 h-4" />
                                    </span>
                                </Button>
                            </div>
                            <div className="bg-white p-4 w-24 h-24 rounded-2xl flex items-center justify-center">
                                <img
                                    src={image12}
                                    alt="Service Icon"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="min-w-[350px] bg-pink-100 p-6 rounded-3xl flex items-center justify-between gap-6 shadow">
                            <div className="flex flex-col gap-4">
                                <div className="text-lg font-semibold text-black">
                                    System Design and Sizing
                                </div>
                                <div className="text-sm font-medium text-gray-600">
                                    Our solar panels deliver maximum output for your needs.
                                </div>
                                <Button className="border border-blue-950 text-black rounded-full flex items-center gap-4 px-4 py-2 text-sm hover:bg-blue-950 hover:text-white transition mt-2 w-max">
                                    Know More
                                    <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                        <ArrowForwardIcon className="text-white w-4 h-4" />
                                    </span>
                                </Button>
                            </div>
                            <div className="bg-white p-4 w-24 h-24 rounded-2xl flex items-center justify-center">
                                <img
                                    src={image12}
                                    alt="Service Icon"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full h-full bg-white p-10 flex flex-col gap-20">
                <div className="flex lg:flex-row md:flex-row flex-col items-start justify-between w-full gap-4">
                    <div className=" lg:text-5xl md:text-5xl text-4xl font-semibold w-full max-w-2xl lg:leading-relaxed md:leading-relaxed leading-0">Innovative , Eco-Friendly Solutions That Support</div>
                    <div className=" flex flex-col gap-8 w-full max-w-xl">
                        <div className=" text-xl text-gray-500 font-semibold">We deliver clean sustaniable to your home using the latest technology. Our solutions cut your carbon footprint.</div>
                        <Button className="bg-blue-950 text-white rounded-full flex items-center gap-4 pl-6 pe-3 py-2 text-base font-semibold hover:bg-blue-950 transition w-max">
                            Know More
                            <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                <ArrowForwardIcon fontSize="small" className="text-white" />
                            </span>
                        </Button>
                    </div>
                </div>
                <Accordion>
                    <AccordionItem
                        number="01"
                        title="Solar Power"
                        description="Solar energy, which is harnessed from the abundantly available sunlight, is a clean and renewable source of generating electricity that has transformed."
                    >
                        <div className="w-full h-screen bg-gray-300 rounded-3xl relative">
                            <img src={banner} alt="" className="w-full h-full object-cover rounded-3xl" />
                            <div className="absolute lg:left-10 md:left-10 left-0 right-0 top-1/2 transform -translate-y-1/2 bg-white lg:p-8 md:p-8 p-8 rounded-xl shadow-lg lg:max-w-xl md:max-w-xl max-w-[80%] lg:mx-0 md:mx-0 mx-auto flex flex-col gap-8">
                                <div className="lg:text-5xl md:text-5xl text-2xl font-semibold text-gray-800 lg:leading-[60px] md:leading-[60px] leading-0">
                                    The Benefits of Adopting Wind Energy
                                </div>
                                <div className="text-gray-600 text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto amet repellendus nulla at dolorum dolore? Possimus reprehenderit obcaecati eaque nulla quam voluptates, voluptatum
                                </div>
                                <div className="flex flex-col gap-6 w-full">
                                    {["Sustainability", "Cost-Effective", "Renewable", "Eco-Friendly"].map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 w-full">
                                            <CheckCircleOutlineIcon className="text-red-500" style={{ fontSize: "24px" }} />
                                            <div className="text-xl font-semibold">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button className="absolute bottom-10 right-10 bg-blue-950 text-white rounded-full flex items-center gap-4 pl-6 pe-3 py-2 text-base font-semibold hover:bg-blue-950 transition w-max">
                                View More
                                <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                    <ArrowForwardIcon fontSize="small" className="text-white" />
                                </span>
                            </Button>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        number="02"
                        title="Wind Power"
                        description="Wind power harnesses the natural movement of air currents to generate clean energy."
                    >
                        <div className="w-full h-screen bg-gray-300 rounded-3xl relative">
                            <img src={banner} alt="" className="w-full h-full object-cover rounded-3xl" />
                            <div className="absolute lg:left-10 md:left-10 left-0 right-0 top-1/2 transform -translate-y-1/2 bg-white lg:p-8 md:p-8 p-8 rounded-xl shadow-lg lg:max-w-xl md:max-w-xl max-w-[80%] lg:mx-0 md:mx-0 mx-auto flex flex-col gap-8">
                                <div className="lg:text-5xl md:text-5xl text-2xl font-semibold text-gray-800 lg:leading-[60px] md:leading-[60px] leading-0">
                                    The Benefits of Adopting Wind Energy
                                </div>
                                <div className="text-gray-600 text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto amet repellendus nulla at dolorum dolore? Possimus reprehenderit obcaecati eaque nulla quam voluptates, voluptatum
                                </div>
                                <div className="flex flex-col gap-6 w-full">
                                    {["Sustainability", "Cost-Effective", "Renewable", "Eco-Friendly"].map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 w-full">
                                            <CheckCircleOutlineIcon className="text-red-500" style={{ fontSize: "24px" }} />
                                            <div className="text-xl font-semibold">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button className="absolute bottom-10 right-10 bg-blue-950 text-white rounded-full flex items-center gap-4 pl-6 pe-3 py-2 text-base font-semibold hover:bg-blue-950 transition w-max">
                                View More
                                <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                    <ArrowForwardIcon fontSize="small" className="text-white" />
                                </span>
                            </Button>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="relative w-full h-full">
                <div className="absolute inset-0">
                    <div className="w-full h-1/2 bg-pink-100"></div>
                    <div className="w-full h-1/2 bg-blue-900"></div>
                </div>
                <div className="relative z-10 p-16 flex flex-col items-center justify-center h-full w-full">
                    <div className=" flex flex-col gap-8 items-center justify-center w-full">
                        <div className=" text-5xl font-semibold">Our Projects</div>
                        <div className=" max-w-3xl mx-auto text-center w-full text-xl text-gray-500 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus consequatur eveniet necessitatibus id nostrum commodi aliquam similique! Error explicabo cumque ut saepe sit option.</div>
                        <div className=" flex items-center justify-center w-full">
                            <Button className="bg-blue-950 text-white rounded-full flex items-center gap-4 pl-6 pe-3 py-2 text-base font-semibold hover:bg-blue-950 transition w-max">
                                View More
                                <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                                    <ArrowForwardIcon fontSize="small" className="text-white" />
                                </span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-16 overflow-auto">
                        <CardSlider>
                            {projectData.map((data) => (
                                <div
                                    className="relative w-64 h-40 md:w-80 md:h-52 group"
                                    key={data.id}
                                >
                                    <img
                                        src={data.image}
                                        alt=""
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                    <Button className="absolute bottom-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Windy Point Farm
                                    </Button>
                                </div>
                            ))}
                        </CardSlider>
                    </div>

                    <div className=" flex lg:flex-row md:flow-row flex-col items-center gap-8 justify-between w-full mt-10">
                        <div className="lg:w-48 md:w-48 w-36 h-full flex-shrink-0">
                            <img src={projectImage} alt="" className="w-full h-full object-cover filter sepia hue-rotate-180" />
                        </div>
                        <div className="lg:w-48 md:w-48 w-36 h-full flex-shrink-0">
                            <img src={projectImage} alt="" className=" w-full h-full object-cover" />
                        </div>
                        <div className="lg:w-48 md:w-48 w-36 h-full flex-shrink-0">
                            <img src={projectImage} alt="" className=" w-full h-full object-cover" />
                        </div>
                        <div className="lg:w-48 md:w-48 w-36 h-full flex-shrink-0">
                            <img src={projectImage} alt="" className=" w-full h-full object-cover" />
                        </div>
                        <div className="lg:w-48 md:w-48 w-36 h-full flex-shrink-0">
                            <img src={projectImage} alt="" className=" w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full p-10 bg-white">
                <div className="relative bg-white flex flex-col items-center justify-center overflow-hidden">
                    <div className="text-center z-10 mt-20">
                        <div className="md:text-6xl text-3xl font-bold text-[#001f5c]">
                            We help 10k+ Customers
                        </div>
                        <div className="md:text-6xl text-3xl font-bold text-[#001f5c] mt-2">
                            fulfill their dreams
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[500px] flex justify-center items-center">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User1" className="absolute md:left-8 left-2 top-0 w-16 h-16 rounded-full border-4 border-white shadow-md" />
                    <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User2" className="absolute md:right-8 right-2 top-0 w-16 h-16 rounded-full border-4 border-white shadow-md" />
                    <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="User3" className="absolute md:left-16 -left-8 bottom-40 w-16 h-16 rounded-full border-4 border-white shadow-md" />
                    <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="User4" className="absolute md:right-16 -right-8 bottom-40 w-16 h-16 rounded-full border-4 border-white shadow-md" />
                    <div className="flex flex-col items-center justify-center text-center px-4 transition-all duration-300">
                        <div className="bg-blue-900 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                            <span className="text-4xl text-red-500">“</span>
                        </div>
                        <p className="text-2xl md:text-4xl text-blue-900 max-w-4xl mb-8 leading-tight text-balance whitespace-pre-line" style={{ lineHeight: "60px", minHeight: '160px' }}>
                            {reviews[currentIndex].quote}
                        </p>
                        <h3 className="text-blue-900 text-xl font-semibold">{reviews[currentIndex].name}</h3>
                        <p className="text-blue-900 text-lg">{reviews[currentIndex].location}</p>
                        <div className="flex space-x-3 mt-8">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-blue-900' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full relative">
                <div className="w-full md:h-[50vh] h-[70vh] flex-shrink-0">
                    <img src={dummy1} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-red-500 opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 w-full px-10">
                    <div className="text-white md:text-5xl text-4xl font-bold md:text-nowrap text-wrap">Any Inquir?. Feel free to Contact our Team</div>
                    <div className=" text-2xl text-white">If you have naything in mind just contact with our expert.</div>
                    <Button className="bg-blue-950 text-white rounded-full flex items-center gap-4 pl-6 pe-3 py-2 text-base font-semibold hover:bg-blue-950 transition w-max">
                        Contact Now
                        <span className="p-2 rounded-full bg-red-500 flex items-center justify-center">
                            <ArrowForwardIcon fontSize="small" className="text-white" />
                        </span>
                    </Button>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Home;