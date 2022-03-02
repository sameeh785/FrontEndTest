import React, { FC} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./Components/CreateTask";
import DeleteTask from "./Components/DeleteTask/";
import styled from "styled-components"
import TaskList from "./Components/TodoList/TodoTask"
const App: FC = () => {
   return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} /> 
          <Route path="/create/task" element={<CreateTask />} /> 
          <Route path="/delete/task" element={<DeleteTask />} /> 

        </Routes>
      </BrowserRouter>

  );

};

export default App;


const AppContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100vw;
height: 100vh;
font-family: Arial, Helvetica, sans-serif;
margin: 0%;
  padding: 0%;
`;

const Header = styled.div`
flex: 30%;
background-color: tomato;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const InputContainer = styled.div`
display: flex;
flex-direction: column;
`;
const TaskInput = styled.input`
width: 200px;
height: 40px;
border: none;
border-bottom-left-radius: 8px;
border-top-left-radius: 8px;
padding-left: 10px;
font-size: 17px;
border: 1px solid grey;
`;
const AddTask = styled.button`
width: 70px;
height: 42px;
border: none;
border-bottom-right-radius: 8px;
border-top-right-radius: 8px;
padding-left: 10px;
cursor: pointer;
`;
const TodoList = styled.div`
flex: 70%;
width: 100%;
display: flex;
align-items: center;
padding-top: 50px;
flex-direction: column;
`;
