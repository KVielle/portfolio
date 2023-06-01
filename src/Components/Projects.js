import React from "react";
import Terraria from '../Assets/terraria.png'
import cookie from '../Assets/cookie.png'
import styled from 'styled-components'

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
                    <div style= {{backgroundImage: `url(${Terraria})`}}className="shadow-lg shadow-[#040c16] group container rounded-md flec justify-center mx-auto content-div">
                        
                        {/* {hover effects} */}
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                HTML/CSS based game
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <Button>Demo</Button>
                                </a>
                                <a href="">
                                    <Button2>Code</Button2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style= {{backgroundImage: `url(${cookie})`}}className="shadow-lg shadow-[#040c16] group container rounded-md flec justify-center mx-auto content-div">

                        {/* {hover effects} */}
                        <div className="opacity-0 group-hover:opacity-100 duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React based game
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <Button>Demo</Button>
                                </a>
                                <a href="">
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
export default Projects;