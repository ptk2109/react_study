import React from 'react';
import { Link } from 'react-router-dom';


function SampleHeader(props) {
    return (
<>
        <div className="header_wrap">
            <div className="logo_area">Nam24's React Study</div>	
            <div className="topmenu_wrap">
                <span className="topmenu"><Link to="/reactjs/tiktactoe/TiktactoeMain">공식사이트 샘플</Link></span>
                <span className="topmenu"><Link to="/nam24/html_component/SampleButton">HTML컴포넌트</Link></span>
                <span className="topmenu"><Link to="/vlpt/PropsSample">벨리퍼트</Link></span>
                <span className="topmenu"><Link to="/nomadcoders/SuperConverter">노마드코더</Link></span>
            </div>	
        </div>

</>
    );
}

export default SampleHeader;