import React from "react";
import { ITask } from "../../Interfaces";
import Header from "../Header/"
import styled from "styled-components"



const DeleteTask = () => {
  const [list,setTodoList] = React.useState<ITask[]>([])
  const [reload,setReload] = React.useState<boolean>(false)
  const [deleteItem , setdeleteItem] = React.useState<string[]>([])
  const removeTask = (number : string) => {
       setdeleteItem([...deleteItem,number])
  }
  
  const bulkDelete = () => {
    
      if(deleteItem.length > 0){
       let filterArray =  list.filter((el:ITask)=>{
         if(deleteItem.includes(el.taskName)){
         }
         else{
           return el
         }
        })
         window.localStorage.removeItem('list');
         window.localStorage.setItem('list',JSON.stringify(filterArray))
         setReload(!reload)

      
      }
      else{
          alert("Please select some tasks to delete")
      }
  }
  React.useEffect(() => {
    if(window && window.localStorage && window.localStorage.getItem('list')){
      let tasks : ITask[] = JSON.parse(window.localStorage.getItem('list') || "")
      setTodoList([...tasks])
      
    }
  },[reload])
  return (
    <>
    <Header/>
    <ParentComponent>
      {list.length ? list.map((task: ITask, key: number) => {
           return <Task key={key} > <Description><Text>{task.taskName}
           <Checkbox>
                <input type="checkbox" id={`task_${key}`} value={task.taskName} onClick={ () => removeTask(task.taskName)}/>
                <label htmlFor={`task_${key}`}> Delete</label><br></br>
           </Checkbox>
           </Text></Description></Task>;
        }) : <Heading>Please create some tasks</Heading>}
    
      </ParentComponent>  
      <DeleteButton>
      <button onClick={() => bulkDelete()}>Delete</button>
    </DeleteButton>
    </>
  );
};

export default DeleteTask;

const Text = styled.div`
margin-top : 2rem
`
const Checkbox = styled.div`
font-size : 1rem
`;
const DeleteButton = styled.div`
margin-top : 2rem;
text-align : center
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