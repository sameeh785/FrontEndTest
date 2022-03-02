import React from "react";
import { ITask } from "../../Interfaces";
import Header from "../Header"
import Input from "../addTask/AddTask";
import styled from "styled-components"



const CreateTask = () => {

    return (
        <>
            <Header />

            <AppContainer>
                <Input/>
                
            </AppContainer>
        </>
    );
};

export default CreateTask;

const AppContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100vw;
height: 90vh;
font-family: Arial, Helvetica, sans-serif;
margin: 0%;
  padding: 0%;
`;

