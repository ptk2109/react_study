import React from 'react';
import { Link } from 'react-router-dom';
import LeftMenu from "../leftmenu/LeftMenu"


function Sample_InputBox(props) {
    return (
        <>
            <LeftMenu />

            <div className="content_wrap">
                인풋 박스
            </div>
        </>
    );
}

export default Sample_InputBox;