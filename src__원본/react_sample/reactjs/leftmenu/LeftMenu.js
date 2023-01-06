import React from 'react';
import { Link } from 'react-router-dom';


function LeftMenu(props) {
    return (
<>
        <div className="leftmenu_wrap">
            <div className="title"><a href="https://ko.reactjs.org" rel="noreferrer">[reactjs]</a></div>
            <ul>
                <li><Link to="/reactjs/tiktactoe/TiktactoeMain">틱택톡</Link></li>
            </ul>
            
        </div>

</>
    );
}

export default LeftMenu;