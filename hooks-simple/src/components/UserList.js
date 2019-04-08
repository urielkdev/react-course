import React from 'react';
import userResources from './useResources';

const UserList = () => {
    const users = userResources('users');

    return (
        <div className="ui bulleted list">
            {users.map((user) => <div className="item" key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;