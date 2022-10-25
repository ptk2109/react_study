import React, { useState, useEffect } from 'react';
import LeftMenu from "../leftmenu/LeftMenu";
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const fetchUsers = async() => {
        try{
            // 요청 시작 시 error, users 초기화
            setError(null);
            setUsers(null);

            // loading 상태 true로 변경
            setLoading(true);
            const reponse = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(reponse.data);
        }catch(e){
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        // useEffect 에 첫번째 파라미터로 등록하는 함수에는 async 를 사용 할 수 없기 때문에 함수 내부에서 async 를 사용하는 새로운 함수를 선언해주어야 합니다.
        fetchUsers();
    }, []);

    if(loading) return <div>로딩중..</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!users) return null;

    return(
        // <div className="section">
        //     <div className="sub_title">4장 API 연동</div>
        //     <div className="discription">
        //     </div>

        //     <div>
        //         <ul>
        //             {users.map(user => (
        //             <li key={user.id}>
        //                 {user.username} ({user.name})
        //             </li>
        //             ))}
        //         </ul>
        //         <br /> 
        //         <button onClick={fetchUsers} style={{height:'50px'}}>다시 불러오기</button>
        //     </div>
        // </div>

        <div>
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
                ))}
            </ul>
            <br /> 
            <button onClick={fetchUsers}>다시 불러오기</button>
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