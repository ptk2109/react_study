import React, { useState } from 'react';
import LeftMenu from "./leftmenu/LeftMenu"




function ToDoList(){
	const [toDos, setToDos] = useState([]);
	const [toDo, setToDo] = useState("");

	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if(toDo === "") return;

		setToDo("");
		setToDos( (eventArray) => [toDo, ...toDos] );
	}
	const onReset = () => {
		setToDo("");
		setToDos([]);
	}

	return (
		<div className="content_wrap">
			<div className="section">
				<div className="sub_title">todo 리스트 만들기</div>
				<div className="discription">
					<b>[학습목표]</b>
				</div>
				<form onSubmit={onSubmit}>
					<h1>todo list ({toDos.length})</h1>
					<input type="text" onChange={onChange} value={toDo} placeholder={"입력하세요."} />
					<button  >등록</button>
					<button type="button" onClick={onReset}>초기화</button>

					{toDos.map( (_todo, _idx) => (
							<li key={_idx}>{_todo}</li>
							
						))
					}
				</form>
			</div>
		</div>
	)
}

/**
 * 기본 컨포넌트
 */
function Base() {
	

	return (
		<>
			<LeftMenu />

			<ToDoList />
		</>
	)

}

export default Base; 