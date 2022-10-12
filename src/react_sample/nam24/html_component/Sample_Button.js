import React, { useState } from 'react';
import LeftMenu from "../leftmenu/LeftMenu"


/**
 * 기본 - 버튼 이벤트 구현
 * 참고자료 : https://react.vlpt.us/basic/08-manage-input.html
 */
function BaseButton(){

    return (
        <div className="section">
            <div className="sub_title">버튼</div>
            <div className="discription">
                
            </div>
        </div>
    );
}





function Sample_Button(props) {
   
    return (
        <>
            <LeftMenu />
           
            <div className="content_wrap">
                {/* 기본 - 버튼 이벤트 구현 */}
                <BaseButton />
            </div>
        </>
    );
}

export default Sample_Button;