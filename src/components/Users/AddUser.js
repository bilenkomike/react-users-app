import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();
    const handleUserAdd = e => {
        e.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({title: 'Invalid input!',  
            message: 'Please set not empty name and age!'
        });
            return;
        }
        if (+age < 1) {
            setError({title: 'Invalid age!',  
                message: 'Age cannot be less than 1!'
            });
            return;
        }

        props.onAddNewUser({name: userName, age:age, id: Math.random().toString()});

        setUserName('');
        setAge('');
        
    };

    const handleUserNameChange = e => {
        setUserName(e.target.value);
    };
    const handleAgeChange = e => {
        setAge(e.target.value);
    };

    const handleError = () => {
        setError(null);
    }

    return (<>
        {error && <ErrorModal title={error.title} message={error.message} onErrorClose={handleError} />}
    <Card className={classes.input}>
        <form onSubmit={handleUserAdd}>
            <label htmlFor='username'>Username</label>
            <input value={userName} onChange={handleUserNameChange} id="username" type="text" />
            <label htmlFor='age'>Age (years)</label>
            <input id="age" value={age} onChange={handleAgeChange} type="number" />
            <Button  type="submit">Add User</Button>
        
        </form>
    </Card>
    </>);
};


export default AddUser;