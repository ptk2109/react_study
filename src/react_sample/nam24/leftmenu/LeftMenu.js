import React from 'react';
import { Link } from 'react-router-dom';


function LeftMenu(props) {
    return (
<>
        <div className="leftmenu_wrap">
            <div className="title">[HTML 컴포넌트]</div>
            <ul>
                <li><Link to="/nam24/html_component/Sample_Button">Button</Link></li>
                <li><Link to="/nam24/html_component/Sample_RadioButton">Radio</Link></li>
                <li><Link to="/nam24/html_component/Sample_CheckBox">CheckBox</Link></li>
                <li><Link to="/nam24/html_component/Sample_InputBox">InputBox</Link></li>
            </ul>
            
        </div>

</>
    );
}

export default LeftMenu;