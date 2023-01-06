import React from 'react';
import { Link } from 'react-router-dom';


function LeftMenu(props) {
    return (
<>
        <div className="leftmenu_wrap">
            <div className="title">[HTML 컴포넌트]</div>
            <ul>
                <li><Link to="/nam24/html_component/SampleButton">Button</Link></li>
                <li><Link to="/nam24/html_component/SampleRadioButton">Radio</Link></li>
                <li><Link to="/nam24/html_component/SampleCheckBox">CheckBox</Link></li>
                <li><Link to="/nam24/html_component/SampleInputBox">InputBox</Link></li>
            </ul>
            
        </div>

</>
    );
}

export default LeftMenu;