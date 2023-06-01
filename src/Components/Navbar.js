import React from 'react'
import styled from 'styled-components'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Face from '../Assets/myface.jpg'
import { useState } from 'react'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <Box>
            <Img>
                <img src = {Face} alt = "Face"/>
                
            </Img>
            {/* {menu} */}
            <Menu className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </Menu>
            {/* {hamburger} */}
            <HamBurger onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </HamBurger>


            {/* {mobile menu } */}
            <MobileMenu className={!nav ? 'hidden' : 'flex'}>
            <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
            </ul>
            </MobileMenu>

            {/* {social icons} */}
            <Social className='hidden lg:flex'>
        <ul>
            <li className='bg-blue-600'> 
                <a href="/">
                    Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className='bg-gray-700'> 
                <a href="/">
                    GitHub <FaGithub size={30} />
                </a>
            </li>
            <li className='bg-[#6fc2b0]'> 
                <a href="/">
                    Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='bg-orange-600'> 
                <a href="/">
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
        </ul>
            </Social>
        </Box>
    )
}

const Box = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
    background-color: #0a192f;
    color: lightgrey;
`
const Img = styled.div`
    img{
        width: 50px;
        border-radius: 50%;
    }
`
const Menu = styled.div`
    
    ul{
        display: flex;
    }
    li {
        padding: 0 1rem 0 1rem;
        cursor: pointer;
    }
`
const HamBurger = styled.div`
    position: absolute;
    right: 0;
    padding-right: 15px;
`
const MobileMenu = styled.div`
    ul{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #0a192f;
    }
    li{
        padding: 1.5rem 0 1.5rem 0;
        font-size: 2em;
        
    }
`
const Social = styled.div`
    
    position: fixed;
    flex-direction: column;
    top: 35%;
    left: 0;
    a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 160px;
        height: 60px;
        margin-left: -100px;
        transition-duration: 0.3s;
        &:hover{
            margin-left: 0px;
            transition-duration: 0.3s;
        }
    }
`
export default Navbar;