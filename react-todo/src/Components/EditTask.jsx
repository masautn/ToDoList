import { useState } from "react";
import TaskService from "../Services/TaskService";
import { Button, TextField, Box } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditTask = (props) => {
    
    const {onEditTask, task, sx} = props;

    const [taskName, setTaskName] = useState(task.description);
    const [error,setError] = useState(false);
    const [open, setOpen] = useState(false);

    const handleInputTextChange = (event) => {
        if(event.target.value !== ''){
            setError(false);
            setTaskName(event.target.value);
        }
        else{
            setError(true);
            setTaskName(event.target.value);
        }
          
    };

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
        setTaskName(task.description);
    };
    
    const saveTask = () => {
        if(!error){
            TaskService.UpdateTask({description:taskName, done:task.done, id:task.id}).then((data) => {
                onEditTask({description:data.description, done:data.done, id:data.id});
                setOpen(false);
            });
        }



    };

    

    return (
        
        <Box sx={sx}>   
            <Button sx={{background: '#cfe2f3', ":hover":{background:'#9fc5e8'} }} variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button> 
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Task</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Change task description.
                </DialogContentText>
                    <TextField onChange={handleInputTextChange} value={taskName} variant="outlined" error={error} helperText={error?'Task Name is required':''} /> 
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={saveTask} >Edit</Button>
                </DialogActions>
            </Dialog>
                

        </Box>
    )};
export default EditTask;