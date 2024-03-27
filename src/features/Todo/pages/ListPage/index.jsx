import React, { useState } from 'react';
import PropTypes from 'prop-types'
import TodoList from '../../components/TodoList';


function ListPage(props) {
    const initTodoList = [
      {
        id: 1,
        status: "new",
        title: "Eat",
      },
      {
        id: 2,
        status: "completeda",
        title: "Sleep",
      },
      {
        id: 3,
        status: "new",
        title: "Code",
      },
    ];

    const [todoList,setTodoList] = useState(initTodoList)
    const [filterStatus,setFilterStatus] = useState('all')
    const handleTodoClick = (todo,idx) => {
      const newTodoList = [...todoList]

      // console.log(todo,idx);

      newTodoList[idx] = {
        ...newTodoList[idx],
        status :newTodoList[idx].status === 'new' ? 'completed' : 'new',
      }
      setTodoList(newTodoList)
    }
    const handldShowAllClick = () => {
      setFilterStatus('all')
    }
    const handldShowCompletedClick = () => {
      setFilterStatus('completed')
    }
    const handldShowNewClick = () => {
      setFilterStatus('new')
    }
    const rederedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)
    // console.log(rederedTodoList);
  return (
    <div>
        <h3>To do list</h3>
        <TodoList 
          todoList={todoList}
          onTodoClick= {handleTodoClick}
        />

        <div>
          <button onClick={handldShowAllClick}>Show All</button>
          <button onClick={handldShowCompletedClick}>Show Completed</button>
          <button onClick={handldShowNewClick}>Show New</button>
        </div>
    </div>
  )
}

ListPage.propTypes = {}

export default ListPage

