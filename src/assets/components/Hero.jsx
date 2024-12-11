import React from 'react';
import BgImage from '../bg-slate.png';
import coffee from '../black.png';  
import Navbar from './Navbar/Navbar';
import {motion} from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "115vh",
    width: "100vw",
};

const Hero = () => {
    const [sidebar, setSidebar] = React.useState(false);
    
    return (
        <main style={bgImage}>
            <section className="relative min-h-[750px] w-full">
                <div className="container">
                    {/* Navbar */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} /> 

                    {/* Hero */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                        {/* Left Text */}
                        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24">
                            <h1 className="text-7xl font-bold leading-tight ml-14">
                                <motion.h1
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
                                    className="text-7xl font-bold leading-tight ml-14"
                                >
                                    Blvck Tumbler
                                </motion.h1>
                            </h1>
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }}
                                className="relative"
                            >
                                <div className="relative z-10 space-y-4">
                                    <h1 className="text-2xl">Black lifestyle lovers</h1>
                                    <h1 className="text-sm opacity-55 leading-loose">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </h1>
                                </div>
                                <div className="absolute -top-6 -left-6 w-[250px] h-[190px] bg-gray-700/25"></div>
                            </motion.div>
                        </div>

                        {/* Image and Ring */}
                        <div className="relative">
                            <motion.img 
                                initial={{ opacity: 0, scale: 0 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }} 
                                src={coffee} 
                                alt="Coffee" 
                                className="relative z-40 h-[400px] md:h-[700px] img-shadow" 
                            />
                            {/* Second Ring */}
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
                                className="h-[180px] w-[180px] absolute top-[80px] right-[-40px] border-primary border-[20px] rounded-full z-30"
                            ></motion.div>

                            {/* Big Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
                                className="absolute -top-0 left-[300px] z-[1]"
                            >
                                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">Blvck Tumbler</h1>
                            </motion.div>
                        </div>

                        {/* Right Text */}
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }}
                            className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24"
                        >
                            <div className="relative">
                                <div className="relative z-10 space-y-4">
                                    <h1 className="text-2xl">Blvck Tumbler</h1>
                                    <h1 className="text-sm opacity-55 leading-loose">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </h1>
                                </div>
                                <div className="absolute -top-20 -right-1 w-[250px] h-[190px] bg-darkGray/50"></div>
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
                {/* Sidebar */}
                {sidebar && (
                    <motion.div initial= {{x:100}} whileInView={{x:0}}className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primarydark/80 backdrop-blur-sm z-10">
                        <div className="w-full h-full flex justify-center">
                            <div className="flex flex-col justify-center items-center gap-6 text-white"> 
                                {/* Line */}
                                <div className="w-[1px] h-[70px] bg-white"></div>

                                {/* Social Icons */}
                                <FaFacebookF className="inline-block p-2 rounded-full cursor-pointer border border-white text-2xl" />
                                <FaTwitter className="inline-block p-2 rounded-full cursor-pointer border border-white text-2xl" />
                                <FaInstagram className="inline-block p-2 rounded-full cursor-pointer border border-white text-2xl" />

                                <div className="w-[1px] h-[70px] bg-white"></div>    
                            </div>
                        </div>
                    </motion.div>
                )}
            </section>
        </main>
    );
};

export default Hero;
