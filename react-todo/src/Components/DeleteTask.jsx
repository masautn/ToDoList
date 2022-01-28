import { useState } from "react";
import TaskService from "../Services/TaskService";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteTask = (props) => {
    
    const {onDeleteTask, task} = props;

    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
    };
    
    const deleteTask = () => {
        
            TaskService.DeleteTask({description:task.description, done:task.done, id:task.id}).then((data) => {
                onDeleteTask(task);
                setOpen(false);
            });
        };

    return (
        <>   
            <Button sx={{background: '#f4cccc', ":hover":{background:'#ea9999', borderColor: '#cc0000' }, borderColor: '#cc0000', color: '#cc0000' }} variant="outlined" onClick={handleClickOpen}>
                Delete
            </Button> 
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete Task</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Are you sure that you want to delete this Task?
                </DialogContentText> 
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={deleteTask} >Yes</Button>
                </DialogActions>
            </Dialog>
                

        </>
    )};
export default DeleteTask;