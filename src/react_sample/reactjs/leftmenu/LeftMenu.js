import React from 'react';
import { Link } from 'react-router-dom';


function LeftMenu(props) {
    return (
<>
        <div className="leftmenu_wrap">
            <div className="title">[reactjs]</div>
            <ul>
                <li><Link to="/reactjs/tiktactoe/Tiktactoe_main">틱택톡</Link></li>
            </ul>
            
        </div>

</>
    );
}

export default LeftMenu;