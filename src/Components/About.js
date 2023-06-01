import React from "react";
import styled from "styled-components";
import Face from '../Assets/myface.jpg'



const About = () => {

    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#34ebdb]">About</p>
                        {/* <img className="w-[80px] rounded-full " src = {Face} alt = "Face"/> */}
                    </div>
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="md:text-right text-4xl font-bold pl-4 lg:pl-8 sm:text-left">
                            <p>Hi there! im Keven, nice to meet you. Please have a look around!</p>
                        </div>
                        <div className="">
                            <p>I am a full stack web developer. i love creating beautiful and functional websites and 
                                applications that facilitate peoples lives. I have expertise in HTML, CSS, JavaScript,
                                React, and more.
                            <p>I am constantly learning and experimenting with new technologies and programming languages
                                to stay up-to-date and deliver the best results i possibly can.
                            </p>
                            <p>
                                When i'm not coding, i love to do anything from playing sports like basketball or soccer,
                                to staying home and playing some video games. I love traveling (when the world permits)
                                and learning about new places and cultures
                            </p>
                            <p>
                                Thank you for taking the time to read about me and look at my portfolio, i cant wait to
                                work with you and bring your ideas to life!
                            </p>
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;