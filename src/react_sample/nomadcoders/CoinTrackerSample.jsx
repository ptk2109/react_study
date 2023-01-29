import React, { useState } from 'react';
import LeftMenu from "./leftmenu/LeftMenu"




/**
 * 기본 컨포넌트
 */
function Base() {
	

	return (
		<>
			<LeftMenu />

			<div className="content_wrap">
			<div className="section">
				<div className="sub_title">코인 트래커</div>
				<div className="discription">
					<b>[학습목표]</b> <br />
					- useEffect 활용
				</div>
			</div>
		</div>
		</>
	)

}

export default Base; 