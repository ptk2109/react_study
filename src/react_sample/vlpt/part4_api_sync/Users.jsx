import React, { useState, useEffect } from 'react';
import LeftMenu from "../leftmenu/LeftMenu";
import axios from 'axios';
import useAsync from './useAsync';
import User from './User';

async function getUsers(){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
}

function Users() {
    const [userId, setUserId] = useState(null);
    const [state, refetch] = useAsync(getUsers, [], true);
    const {loading, data: users, error} = state;
    
    if(loading) return <div>로딩중..</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!users) return <button onClick={refetch}>다시 불러오기</button>;

    return(
        <div>
            <ul>
                {users.map(user => (
                <li 
                    key={user.id}
                    onClick={() => setUserId(user.id)}
                    style={{cursor: 'pointer'}}
                >
                    {user.username} ({user.name})
                </li>
                ))}
            </ul>
            <br /> 
            <button onClick={refetch}>다시 불러오기</button>

            { userId && <User id={userId} /> }
        </div>
    );
}

function UsersLayout(){
    return(
        <>
            <LeftMenu />

            <div className="content_wrap">
                <Users />
            </div>
        </>
    );
}

export default UsersLayout;