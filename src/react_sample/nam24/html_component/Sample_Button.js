import React from 'react';
import { Link } from 'react-router-dom';
import LeftMenu from "../leftmenu/LeftMenu"


function Sample_Button(props) {
    return (
        <>
            <LeftMenu />

            <div className="content_wrap">
               버튼
            </div>
        </>
    );
}

export default Sample_Button;