import { useState } from "react";
import TaskService from "../Services/TaskService";
import ListItem from '@mui/material/ListItem';
import { Box } from "@mui/system";
import {Typography } from "@mui/material";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const TodoItem = ({item, index, onChangeChecked, onEditTask, onDeleteTask}) => {
   

    const [doneCheck, setdoneCheck] = useState(item.done);
    const handleCheckbox = (event) => {
        TaskService.UpdateTask({...item, done: event.target.checked}).then((res) => {
            setdoneCheck(res.done);
            onChangeChecked(res, index);
            
        });
    };

    const handleEditTask = (task) =>{
        onEditTask(task,index);
        
    };

    const handleDeleteTask = (task) =>{
        onDeleteTask(task,index);
        
    };
   
    return (
    <ListItem sx={{display:'flex', background: 'yellow', color: 'black', borderRadius: '10px', border: '1px solid black', mt: 1}}> 
        <input type="checkbox" onChange={handleCheckbox} checked={doneCheck}    />
        <Box sx={{ml:2, width: '100%'}}>
            <Typography variant= "h6">  
            {item.description}
            </Typography>
        </Box>
        <Box sx={{width:'30%', display: 'flex', justifyContent:'right'}}>
            <EditTask sx={{mr:1}} onEditTask={handleEditTask} task={item}/>
            <DeleteTask onDeleteTask={handleDeleteTask} task={item}/>
        </Box>
    </ListItem>
    )}
export default TodoItem