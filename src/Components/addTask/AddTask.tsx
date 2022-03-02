import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "../../Interfaces";
import styled from "styled-components"
import { useNavigate } from "react-router";





const Input = () => {
  const [task, setTask] = useState<string>("");
  let navigate = useNavigate();
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } 
  };

  const addTask = (): void => {
    if(task === ''){
      alert("Please enter some detail")
    }
    else{
      if(window && window.localStorage && window.localStorage.getItem("list")){
        let taskArray = JSON.parse(window.localStorage.getItem("list") || "");
        let list = [...taskArray,{ taskName : task}]
        window.localStorage.setItem('list',JSON.stringify(list))
        setTask('')
        alert("Successfully created")
        navigate("/")

      }
      else{
        let list : ITask[] = [];
        let newTask = { taskName : task}
        list.push(newTask)
        window.localStorage.setItem('list',JSON.stringify(list))
        setTask('')
        alert("Successfully created")


      }

    }
  
  };

  return (
      <Header>
        <InputContainer>
          <TaskInput
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          /> 
        </InputContainer>
        <AddTask onClick={addTask}>Add Task</AddTask>
      </Header>
     
  );
};

export default Input;


const Header = styled.div`
flex: 30%;
background-color: tomato;
width: 100%;
max-height : 90vh;
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
width: 80px;
height: 42px;
border: none;
border-bottom-right-radius: 8px;
border-top-right-radius: 8px;
padding-left: 10px;
cursor: pointer;
`;
