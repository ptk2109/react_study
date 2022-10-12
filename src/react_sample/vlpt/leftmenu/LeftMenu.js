import React from 'react';
import { Link } from 'react-router-dom';


function LeftMenu(props) {
    return (
<>
        <div className="leftmenu_wrap">
            <div className="title"><a href="https://react.vlpt.us/" rel="noreferrer">[벨로퍼트]</a></div>
            <ul>
                <li><Link to="/vlpt/PropsSample">5. 컨포넌트에 값 전달(props)</Link></li>
            </ul>
            
        </div>

</>
    );
}

export default LeftMenu;