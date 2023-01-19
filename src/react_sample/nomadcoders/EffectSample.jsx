import { useEffect } from "react";
import { useState } from "react";
import LeftMenu from "./leftmenu/LeftMenu"


function Hello(){

	useEffect( () => {
		console.log("Hello 컴포넌트 생성됨");
		return () => {
			console.log("Hello 컴포넌트 파괴됨.");
		}
	}, []);

	return <h1>hello</h1>;
}

function CleanFuncTest(){
	const [showing, setShowing] = useState(false);
	const onToggle = () => setShowing( (prev) => !prev );

	return (
		<div className="section">
				<div className="sub_title">effect 예제1</div>
				<div className="discription">
					<b>[학습목표]</b>
					- 컴포넌트가 파괴될때 실행(clean function)되는 함수를 만들어 보자
				</div>

				<button onClick={onToggle}>{showing ? "hide" : "show"}</button>
				{ showing ? <Hello /> : null }
			</div> 
	);
}


/**
 * 기본 컨포넌트
 */
function Base(props) {
	const [count, setCount] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setCount( (prev) => prev + 1 );
	const onChange = (event) => setKeyword(event.target.value);
	console.log("항상실행!");

	/*
	 * 첫번째 인자 : 한번만 실행할 함수 작성
	 * 두번째 인자 : 
	 */
	useEffect( () => {
		console.log("이곳에 api 호출하는 것이 있다면 한번만 실행한다는 뜻!");
	}, []);

	useEffect( () => {
		if(keyword !== "" && keyword.length >= 5){
			console.log("검색어 값 입력할때만 호출", keyword);
		}
	}, [keyword]);



	
	return (
		<>
			<LeftMenu />

			<div className="content_wrap">
				<div className="section">
					<div className="sub_title">effect 예제1</div>
					<div className="discription">
						<b>[학습목표]</b>
						- useEffect를 이해한다.<br />
					</div>

					<input onChange={onChange} value={keyword} placeholder={"검색어를 입력하세요."} />
					<h1>{count}</h1>
					<button onClick={onClick}>click me</button>
					
				</div> 

				<CleanFuncTest />
				
			</div>


		</>
	);
}

export default Base; 