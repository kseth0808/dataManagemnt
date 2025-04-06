import projectImage from "../assets/projectImage.png"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <footer className="bg-pink-100 text-blue-900 md:pb-16 md:pt-32 lg:px-14 md:px-14 p-6 py-14">
            <div className="container mx-auto px-6 md:px-16">
                <div className="flex flex-col lg:flex-row md:flex-row  lg:items-center md:items-center items-start justify-between">
                    <div className="flex flex-col lg:flex-row md:flex-row  lg:items-center md:items-center items-start text-4xl font-bold space-y-2 md:space-y-0 md:space-x-4">
                        <span>Let's work together</span>
                        <span className="hidden md:block w-16 border-t border-blue-900"></span>
                        <span className="text-red-600">hello@energy.cc</span>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <div className="flex items-center space-x-2">
                            <img
                                src={projectImage}
                                alt="Energy Logo"
                                className=" w-28 h-full object-cover"
                            />
                            <span className="text-4xl text-blue-900">Energy</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row  lg:items-center md:items-center items-start md:text-left lg:mt-4 md:mt-20 mt-4 gap-14">
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-semibold mb-1 text-xl">OUR LOCATION</h4>
                        <p className="text-xl">Hiranandani Business Park, Orchard Avenue, Powai</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-semibold mb-1 text-xl">GIVE US A CALL</h4>
                        <p className="text-xl">(+91) 99542-99354</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1 text-xl">GET CONNECTED</h4>
                        <div className="flex justify-center space-x-4 mt-2">
                            <div className="border-2 border-blue-900 rounded-full p-2 cursor-pointer hover:border-red-600 hover:text-red-600 transition-colors">
                                <FacebookIcon className="text-blue-900 hover:text-red-600" />
                            </div>
                            <div className="border-2 border-blue-900 rounded-full p-2 cursor-pointer hover:border-red-600 hover:text-red-600 transition-colors">
                                <InstagramIcon className="text-blue-900 hover:text-red-600" />
                            </div>
                            <div className="border-2 border-blue-900 rounded-full p-2 cursor-pointer hover:border-red-600 hover:text-red-600 transition-colors">
                                <LinkedInIcon className="text-blue-900 hover:text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full border border-red-500 my-14"></div>
                <div className=" flex flex-col lg:flex-row md:flex-row justify-between lg:items-center md:items-center items-start text-sm text-blue-900 gap-6">
                    <div className="flex flex-col lg:flex-row md:flex-row md:space-x-6 mb-2 md:mb-0 text-lg font-medium">
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Solutions</a>
                        <a href="#">Projects</a>
                        <a href="#">FAQs</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-row md:space-x-4 text-base font-medium gap-2">
                        <span>Copyright Energy 2025</span>
                        <span className="text-red-600 md:block hidden">|</span>
                        <a href="#">Website Created</a>
                        <span className="text-red-600 md:block  hidden">|</span>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;