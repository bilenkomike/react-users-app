import React from 'react';


const AddUser = props => {

    const handleUserAdd = e => {
        e.preventDefault();
        
    };

    return <form onSubmit={handleUserAdd}>
        <label htmlFor='username'>Username</label>
        <input id="username" type="text" />
        <label htmlFor='age'>Age (years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
        
    </form>
};


export default AddUser;