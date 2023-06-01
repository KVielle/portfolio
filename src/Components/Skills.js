import React from "react";
import ReactImg from '../Assets/react.png'
import HTML from '../Assets/html.png'
import CSS from '../Assets/css.png'
import JAVAS from '../Assets/javascript.png'
import TailWind from '../Assets/tailwind.png'
import Node from '../Assets/node.png'
import GitHub from '../Assets/github.png'

const Skills = () => {


    return(
        <div className= "w-full h-screen bg-[#0a192f] text-gray-300" name='skills'> 
            {/* {Container} */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#34ebdb]">Experience</p>
                    <p className="py-4">// These are the technologies i work with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className= "w-20 mx-auto" src={HTML} alt="HTML Icon" />
                        <p>HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className= "w-20 mx-auto" src={CSS} alt="CSS Icon" />
                        <p>CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className= "w-20 mx-auto" src={ReactImg} alt="HTML Icon" />
                        <p>React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className= "w-20 mx-auto" src={JAVAS} alt="JS Icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className= "w-20 mx-auto" src={GitHub} alt="HTML Icon" />
                        <p>GitHub</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className= "w-20 mx-auto" src={TailWind} alt="HTML Icon" />
                        <p>Tailwind.Css</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className= "w-20 mx-auto" src={Node} alt="HTML Icon" />
                        <p>Node.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills;