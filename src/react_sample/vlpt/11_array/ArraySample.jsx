import React from 'react';
import LeftMenu from "../leftmenu/LeftMenu"



function Part_11_1_users({user}){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

/**
 * 배열값을 출력하기
 */
function Part_11_1(){
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
            <Part_11_1_users user={users[0]} />
            <Part_11_1_users user={users[1]} />
            <Part_11_1_users user={users[2]} />


            <div className="discription">
            - 배열값 출력하기(루프 map() 사용) <br />
            - 유일한 값을 이용하여 key 잡아야 한다. (삽입, 삭제 시 이득됨)
            </div>

            <div>
                {users.map((user, index) => (
                    <Part_11_1_users user={user} key={index} />
                ))}
            </div>

        </div>
    );
}



// function Part_11_2(){
//     const users = [
//         {
//           id: 1,
//           username: 'velopert',
//           email: 'public.velopert@gmail.com'
//         },
//         {
//           id: 2,
//           username: 'tester',
//           email: 'tester@example.com'
//         },
//         {
//           id: 3,
//           username: 'liz',
//           email: 'liz@example.com'
//         }
//     ];

//     return (
//         <div className="section">
//             <div className="sub_title">11. 배열 렌더링하기</div>
//             <hr />

//             <div className="sub_title">* 배열값을 출력하기(기본)</div>
//             <div className="discription">
//             </div>
//             <div>
//                 <b>{users[0].username}</b> <span>({users[0].email})</span>
//             </div>
//             <div>
//                 <b>{users[1].username}</b> <span>({users[1].email})</span>
//             </div>
//             <div>
//                 <b>{users[2].username}</b> <span>({users[1].email})</span>
//             </div>
//         </div>
//     );
// }

function ArraySample(props) {
   
    return (
        <>
            <LeftMenu />
           
            <div className="content_wrap">
                <Part_11_1 />
            </div>
        </>
    );
}

export default ArraySample;