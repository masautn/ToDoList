import TodoItem from "./TodoItem";
import List from '@mui/material/List';

const TodoList = (props) => {
    
    const {todoItems, onUpdateList} = props;

    const handleOnChangeCheck = (item, index) => {
        const newItems = [...todoItems];
        newItems[index] = {...newItems[index], done:item.done};
        onUpdateList(newItems);
    };

    const hadleOnEditTask = (task, index) => {
        const newItems = [...todoItems];
        newItems[index] = {...newItems[index], description: task.description};   
        onUpdateList(newItems);
    }; 

    const hadleOnDeleteTask = (task, index) => {
        const newItems = [...todoItems];
        newItems.splice(index,1);  
        onUpdateList(newItems);
    }; 


    return (
        <>
             <List sx={{ width: '60%' }}>
             {todoItems.length > 0 && todoItems.map((item, index) => (
              <TodoItem key={index} index={index} item={item} onChangeChecked={handleOnChangeCheck} onEditTask={hadleOnEditTask} onDeleteTask={hadleOnDeleteTask} />
            ))}
             </List>        
           
        </>
    )};
export default TodoList;