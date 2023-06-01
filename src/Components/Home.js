import React from "react";
import styled from "styled-components";
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <Box name='home'>

            {/* {container} */}
            <Content>
                <p className="text-[#34ebdb]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl">Keven Vielleuse</h1>
                <h2 className="text-4xl sm:text-7xl">I'm a Full Stack Developer.</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">A bunch of really interesting things and speech about how competent i am, it goes on for a while and really sells me well to potential employers</p>
                {/* {button stuff} */}
                <Button>
                    <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b3fcf8] duration-300 hover:border-[#b3fcf8] hover:text-gray-600">View Projects<span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3"/></span></button>
                </Button>
            </Content>
        </Box>
    )
}

const Box = styled.div`
    background-color: #0a192f;
    width: 100vw;
    height: 100vh;
`
const Content = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 0 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    h1{
        font-weight: bold;
        color: #cffffb;
    }
    h2{
        font-weight: bold;
        color: #8892b0;
    }
`
const Button = styled.div`
    button{
        border-radius: 10px;
    }
`
export default Home;