import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const handleUserAdd = e => {
        e.preventDefault();
        
    };

    const handleUserNameChange = e => {
        setUserName(e.target.value);
    };
    const handleAgeChange = e => {
        setAge(e.target.value);
    };

    return (<Card className={classes.input}>
        <form onSubmit={handleUserAdd}>
            <label htmlFor='username'>Username</label>
            <input value={userName} onChange={handleUserNameChange} id="username" type="text" />
            <label htmlFor='age'>Age (years)</label>
            <input id="age" value={age} onChange={handleAgeChange} type="number" />
            <Button  type="submit">Add User</Button>
        
        </form>
    </Card>);
};


export default AddUser;