import React from "react";
import Terraria from '../Assets/terraria.png'
import cookie from '../Assets/cookie.png'
import Shuffle from '../Assets/Shuffle.png'
import Result from '../Assets/ShuffleResult.png'
import styled from 'styled-components'
import chat from '../Assets/ChatHome.png'

const Projects = () => {

    return (
        <div name='projects' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#34ebdb]">Projects</p>
                    <p className="py-6">// Check out some of my recent work</p>
                </div>

                {/* {container} */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {/* {grid items} */}
                    <div style= {{backgroundImage: `url(${Shuffle})`}}className="group container rounded-md flex justify-center mx-auto w-100 content-div">
                        {/* {hover effects} */}
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <Span className="text-2xl font-bold text-white tracking-wider pb-5">
                                React based App
                            </Span>
                            <div className="pt-8 text-center ">
                                <a href="https://shuffle-liart.vercel.app/">
                                    <Button>Demo</Button>
                                </a>
                                <a href="https://github.com/KVielle/final-project">
                                    <Button2>Code</Button2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style= {{backgroundImage: `url(${chat})`}}className="group container rounded-md flec justify-center mx-auto content-div">
                        {/* {hover effects} */}
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React/Socket.io live chat app 
                            </span>
                            <div className="pt-8 text-center ">
                                {/* <a href="https://chat-project-one.vercel.app/">
                                    <Button>Demo</Button>
                                </a> */}
                                <a href="https://github.com/KVielle/chat-project">
                                    <Button2>Code</Button2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style= {{backgroundImage: `url(${Terraria})`}}className=" group container rounded-md flec justify-center mx-auto content-div">
                        {/* {hover effects} */}
                        <div className="opacity-0 group-hover:opacity-100 duration-300 mb-4">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                HTML/CSS based game
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://project-js-nyan-cat-ten.vercel.app/">
                                    <Button>Demo</Button>
                                </a>
                                <a href="https://github.com/KVielle/project-js-nyan-cat">
                                    <Button2>Code</Button2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style= {{backgroundImage: `url(${cookie})`}}className="group container rounded-md flec justify-center mx-auto content-div">
                        {/* {hover effects} */}
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React based game
                            </span>
                            <div className="pt-8 text-center ">
                                <a href="https://cookie-clicker-jade.vercel.app/">
                                    <Button>Demo</Button>
                                </a>
                                <a href="https://github.com/KVielle/react-effects">
                                    <Button2>Code</Button2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Button = styled.button`
    display: flex;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem 0.75rem 1rem;
    margin: 0.5rem;
    background-color: white;
    color: rgb(55,65,81);
    font-weight: bold;
    .text-lg{
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
`
const Button2 = styled.button`
    display: flex;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem 0.75rem 1rem;
    margin: 0.5rem;
    background-color: white;
    color: rgb(55,65,81);
    font-weight: bold;
    .text-lg{
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
`
const Span = styled.div`
    margin-top: -1.5em;
`
export default Projects;