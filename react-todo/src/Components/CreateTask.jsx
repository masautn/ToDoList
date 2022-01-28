import { useState } from "react";
import TaskService from "../Services/TaskService";
import { Button, TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const CreateTask = (props) => {
    
    const {onCreateTask} = props;

    const [taskName, setTaskName] = useState('');
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
        setTaskName('');
    };
    
    const saveTask = () => {
        if(!error){
            TaskService.CreateTask({description:taskName, done:false}).then((data) => {
                onCreateTask({description:data.description, done:data.done, id:data.id});
                setOpen(false);
            });
        }



    };

    

    return (
        
        <>   
            <Button sx={{background: '#cfe2f3', ":hover":{background:'#9fc5e8'} }} variant="outlined" onClick={handleClickOpen}>
                Create Task
            </Button> 
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Task</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please describe new Task.
                </DialogContentText>
                    <TextField onChange={handleInputTextChange} variant="outlined" error={error} helperText={error?'Task Name is required':''} /> 
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={saveTask} >Add</Button>
                </DialogActions>
            </Dialog>
                

        </>
    )};
export default CreateTask;