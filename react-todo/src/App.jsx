import './App.css';
import React, { useEffect } from 'react';
import TodoList from './Components/TodoList';
import CreateTask from './Components/CreateTask';
import { Box } from '@mui/material';
import TaskService from './Services/TaskService';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },});

function App() {

  const [todoItems, setTodoItems] = React.useState([]);

  useEffect(() => {
    TaskService.GetTasks().then((res) => {
      setTodoItems(res);
    });
  },[]);

  const handleCreateNewTask = (task) => {
    setTodoItems([ ...todoItems, task]);
  };
  const handleUpdateList = (updatedList) => {
    setTodoItems(updatedList);
  };
  

  return (
    <ThemeProvider theme={theme}>
        <div className='app'>
          <Box sx={{textAlign: 'center', mt:6 }}>
            <Box sx={{mb:3}}>
              <CreateTask onCreateTask={handleCreateNewTask}/>
            </Box>
            <Box sx={{width: '100%' , justifyContent: 'center', display: 'flex'}} >
              <TodoList todoItems={todoItems} onUpdateList={handleUpdateList} />
            </Box>
          </Box>
        </div> 
    </ThemeProvider>  
      );
    } 
    
export default App;