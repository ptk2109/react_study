import React, { useState } from 'react';
import LeftMenu from "./leftmenu/LeftMenu"
import PropTypes from 'prop-types';
 

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



function Btn2({name, onClick}){
	console.log(`${name} : `, onClick);
	return(
		<button 
			onClick={onClick}
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
const MemorizedBtn2 = React.memo(Btn2);



function Btn3({name, fontSize}){
	return(
		<button 
			style={{
				backgroundColor: "tomato",
				color:"white",
				padding: "10px 20px",
				border: 0,
				borderRadius: 10,
				fontSize
			}}
		>{name}</button>
	);
}
Btn3.propTypes = {
	text : PropTypes.string.isRequired,
	fontSize : PropTypes.number,
}

/**
 * 기본 컨포넌트
 */
function Base(props) {

	const [btnName, setBtnName] = useState("Save Btn");
	const changeValue = () => setBtnName("change btn name");

	
	return (
		<>
			<LeftMenu />

			<div className="content_wrap">
				<div className="section">
					<div className="sub_title">prop 예제1</div>
					<div className="discription">
						<b>[학습목표]</b>
						- prop를 사용할 수 있다. <br />
					</div>

					<Btn name="Save Btn" big={true}/>
					<Btn name="Continue"/>
					
				</div> 


				<div className="section">
					<div className="sub_title">prop 예제2</div>
					<div className="discription">
						<b>[학습목표]</b>
						1. 리스너를 형태로 넘겨도 결국은 prop 이다.<br /> 
						2. prop를 이용하여 함수를 넘길 수도 있다.<br />
						3. 불필요한 re-render 하는 방법을 배운다.
					</div>

					<MemorizedBtn2 name={btnName} onClick={changeValue}/> 
					<MemorizedBtn2 name="Continue"/>												
					
				</div>


				<div className="section">
					<div className="sub_title">prop 예제2</div>
					<div className="discription">
						<b>[학습목표]</b>
						1. PropTypes으로 prop 값 예외처리 하는 방법을 배운다. 
					</div>

					<Btn3 name="Save Btn" fontSize={18}/> 
					<Btn3 name={18} fontSize={"text"}/> 
					<Btn3  fontSize={"text2"}/> 
					
				</div>
			</div>


		</>
	)

}

export default Base; 