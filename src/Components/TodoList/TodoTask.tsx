import React from "react";
import { ITask } from "../../Interfaces";
import Header from "../Header/"
import styled, { StyledProps } from "styled-components"



const TodoTask = () => {
  const [list,setTodoList] = React.useState<ITask[]>([])
  React.useEffect(() => {
    if(window && window.localStorage && window.localStorage.getItem('list')){
      let tasks : ITask[] = JSON.parse(window.localStorage.getItem('list') || "")
      setTodoList([...tasks])
    }
  },[])
  return (
    <>
    <Header/>
    <ParentComponent>
      {list.length ? list.map((task: ITask, key: number) => {
           return <Task key={key} > <Description><Text>{task.taskName}</Text></Description></Task>;
        }) : <Heading>Please create some tasks</Heading>}
      </ParentComponent>  
    </>
  );
};

export default TodoTask;

const Text = styled.div`
margin-top : 2rem
`
const Task = styled.div`
width: 300px;
margin-top : 30px;
min-height : 100px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;
margin-left : 1rem
`;

const ParentComponent = styled.div `
display : flex;
justify-content : center
`

const TodoList = styled.div`
flex: 70%;
width: 100%;
display: flex;
align-items: center;
padding-top: 50px;
flex-direction: column;
`;

const Heading = styled.h4`
  text-align : center
`;

const Description = styled.div`
width: 100%;
font-size : 20px


`;