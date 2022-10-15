import React from 'react';
import { Link } from 'react-router-dom';


function LeftMenu(props) {
    return (
<>
        <div className="leftmenu_wrap">
            <div className="title"><a href="https://react.vlpt.us/" rel="noreferrer">[벨로퍼트]</a></div>
            <ul>
                <li><Link to="/vlpt/PropsSample">5~6. 컴포넌트에 값 전달(props)</Link></li>
                <li><Link to="/vlpt/Counter">7. 컴포넌트 값 관리(useState)</Link></li>
                <li><Link to="/vlpt/SampleInputBox">8~10. input state</Link></li>
                <li><Link to="/vlpt/ArraySample">11~16. 배열</Link></li>
            </ul>
            
        </div>

</>
    );
}

export default LeftMenu;