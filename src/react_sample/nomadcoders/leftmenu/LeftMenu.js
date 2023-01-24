import React from 'react';
import { Link } from 'react-router-dom';


function LeftMenu(props) {
    return (
<>
        <div className="leftmenu_wrap">
            <div className="title"><a href="https://nomadcoders.co/react-for-beginners/lobby" rel="noreferrer">[노마드코더]</a></div>
            <ul>
                <li><Link to="/nomadcoders/SuperConverter">[state] Super Converter</Link></li>
                <li><Link to="/nomadcoders/PropSample">[prop] sample</Link></li>
                <li><Link to="/nomadcoders/EffectSample">[effect] sample</Link></li>
                <li><Link to="/nomadcoders/TodoListSample">[연습] TodoList</Link></li>
            </ul>
            
        </div>

</>
    );
}

export default LeftMenu;