import React from "react";
import styled from "styled-components";

const Contact = () => {
    return(
        <Box name='contact'>
            <Form>
                <Container>
                    <P>Contact</P>
                    <P2> // Submit the form below or feel free to send me an email - Kevielleuse@Gmail.com </P2>
                </Container>
                <Input type="text" placeholder="Name" name="name"></Input>
                <Input2 type="text" placeholder="Email" name="email"></Input2>
                <TextArea name="message" placeholder="Message" rows={10}></TextArea>
                <Button>Let's work together</Button>
            </Form>
        </Box>
    )
}


const Box = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0a192f;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
`
const Container = styled.div`
    padding-bottom: 2rem;
`
const P = styled.p`
    font-size: 2.25rem;
    font-weight: bold;
    display: inline;
    border-bottom-width: 4px;
    border-color: #34ebdb;
    color: #d1d5db;
`
const P2 = styled.p`
    color: #d1d5db;
    padding-top: 1rem;
    padding-bottom: 1rem;
`
const Input = styled.input`
    background-color: #b3fcf8;
`
const Input2 = styled.input`
    background-color: #b3fcf8;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
`
const TextArea = styled.textarea`
    background-color: #b3fcf8;
`
const Button = styled.button`
    color: #d1d5db;
    border-width: 2px;
    font-weight: bold;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    transition-duration: 300ms;
    &:hover {
        color: grey;
        transition-duration: 300ms;
        border-color: #b3fcf8;
        background-color: #b3fcf8;
    }
`
export default Contact;