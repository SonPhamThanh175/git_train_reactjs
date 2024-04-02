import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            status: 'new',
            title: 'Eat',
        },
        {
            id: 2,
            status: 'completed',
            title: 'Sleep',
        },
        {
            id: 3,
            status: 'new',
            title: 'Code',
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    };
    // console.log(history);

    const handldShowAllClick = () => {
        // setFilterStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handldShowCompletedClick = () => {
        // setFilterStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handldShowNewClick = () => {
        // setFilterStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const rederedTodoList = todoList.filter(
        (todo) => filterStatus === 'all' || filterStatus === todo.status,
    );

    const handleTodoFormSubmit = (values) => {
        // console.log('Form submit :' ,values);
        const newTodo = {
            id :todoList.length + 1,
            title : values.title,
            status : 'new',
        }
        const newTodoList = [...todoList,newTodo]
        setTodoList(newTodoList)
    }
    return (
        <div>
            <h3>Todo Form </h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>


            <h3>To do list</h3>
            <TodoList
                todoList={rederedTodoList}
                onTodoClick={handleTodoClick}
            />

            <div>
                <button onClick={handldShowAllClick}>Show All</button>
                <button onClick={handldShowCompletedClick}>Show Completed</button>
                <button onClick={handldShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

ListPage.propTypes = {};

export default ListPage;
