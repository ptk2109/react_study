import React, {useState, useRef} from 'react';
import LeftMenu from "../leftmenu/LeftMenu";

import UserList from "./crud/UserList";
import CreateUser from "./crud/CreateUser";


function User({user}){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

/**
 * 11. 배열 렌더링하기
 */
function Chapter11(){
    const users = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ];

    return (
        <div className="section">
            <div className="sub_title">11. 배열 렌더링하기</div>
            참고 : <a href="https://react.vlpt.us/basic/11-render-array.html" target="_blank">https://react.vlpt.us/basic/11-render-array.html</a>
            <hr />

            {/* <div className="sub_title">* 배열값을 출력하기</div> */}
            
            <div className="discription">
            - 배열값 출력하기(기본 출력)
            </div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[1].email})</span>
            </div>

            
           
            <div className="discription">
            - 배열값 출력하기(컴포넌트 재사용 하기)
            </div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />


            <div className="discription">
            - 배열값 출력하기(루프 map() 사용) <br />
            - 유일한 값을 이용하여 key 잡아야 한다. (삽입, 삭제 시 이득됨)
            </div>

            <div>
                {users.map((user, index) => (
                    <User user={user} key={index} />
                ))}
            </div>

        </div>
    );
}



/** ↓↓↓↓↓↓↓↓↓↓↓↓ 배열항목 CRUD ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */


function Chapter12(){
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
    const { name, value } = e.target;
    setInputs({
        ...inputs,
        [name]: value
    });
    };
    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active: true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false
        }
    ]);

    const nextId = useRef(4);


    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    };


    const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
          users.map(user =>
            user.id === id ? { ...user, active: !user.active } : user
          )
        );
      };
      
    return (
        <div className="section">
            <div className="sub_title">12. CRUD 만들기 (useRef 로 컴포넌트 안의 변수 만들기)</div>
            <hr />

            <div className="discription">
                - CRUD 구현
            </div>

            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
}

function ArraySample(props) {
   
    return (
        <>
            <LeftMenu />
           
            <div className="content_wrap">
                <Chapter11 />

                <Chapter12 />
            </div>
        </>
    );
}

export default ArraySample;