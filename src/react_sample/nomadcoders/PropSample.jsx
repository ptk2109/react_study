import React, { useState } from 'react';
import LeftMenu from "./leftmenu/LeftMenu"



function Btn({name, big=false}){
	console.log(big);
	return(
		<button 
			style={{
				backgroundColor: "tomato",
				color:"white",
				padding: "10px 20px",
				border: 0,
				borderRadius: 10
			}}
		>{name}</button>
	);
}



/**
 * 기본 컨포넌트
 */
function Base(props) {
	return (
		<>
			<LeftMenu />

			<div className="content_wrap">
				<div className="section">
					<div className="sub_title">Super Converter</div>
					<div className="discription">
						<b>[학습목표]</b>
						- prop를 사용할 수 있다. <br />
					</div>

					<Btn name="Save Btn" big={true}/>
					<Btn name="Continue"/>
					
				</div>
			</div>
		</>
	)

}

export default Base; 