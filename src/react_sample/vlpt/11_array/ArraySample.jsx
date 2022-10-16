import React, {useState, useReducer, useRef, useMemo, useCallback } from 'react';
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
    const onChange = useCallback (
        e => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value
            });
        },
        [inputs]
    );
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

    const countActiveUsers = () =>{
        console.log('활성 사용자 수를 세는중...');
        return users.filter(user => user.active).length;
    }

    const onCreate = useCallback(
        () => {
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
        }, [users, username, email]
    );


    const onRemove = useCallback(
        id => {
            // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
            // = user.id 가 id 인 것을 제거함
            setUsers(users.filter(user => user.id !== id));
        }, [users]
    );

    const onToggle = useCallback (
        id => {
            setUsers(
                users.map(user =>
                    user.id === id ? { ...user, active: !user.active } : user
                )
            );
        }, [users]
    );
      
    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <div className="section">
            <div className="sub_title">12. CRUD 만들기 (useRef 로 컴포넌트 안의 변수 만들기) - useState 이용</div>
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

            <div>활성사용자 수 : {count}</div>
        </div>
    );
}



/** ↓↓↓↓↓↓↓↓↓↓↓↓ 배열항목 CRUD - useReducer 으로 튜닝 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
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
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            };
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                user.id === action.id ? { ...user, active: !user.active } : user
                )
            };
            case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default:
         return state;
    }
}


function Chapter12_UseReducer(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const { users } = state;
    const { username, email } = state.inputs;

    const countActiveUsers = () =>{
        console.log('활성 사용자 수를 세는중!!...');
        return users.filter(user => user.active).length;
    }
    
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
    }, [username, email]);

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        });
    }, []);
    
    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        });
    }, []);
    const count = useMemo(() => countActiveUsers(users), [users]);


    return (
        <div className="section">
            <div className="sub_title">12. CRUD 만들기 (useRef 로 컴포넌트 안의 변수 만들기) - useReducer 이용</div>
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
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성사용자 수 : {count}</div>
        </div>
    );
}


function ArraySample(props) {
   
    return (
        <>
            <LeftMenu />
           
            <div className="content_wrap">
                <Chapter11 />

                {/* <Chapter12 /> */}


                <Chapter12_UseReducer />
            </div>
        </>
    );
}

export default ArraySample;