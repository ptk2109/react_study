import React, { useState, useRef } from 'react';
import LeftMenu from "../leftmenu/LeftMenu"


/**
 * input 상태관리
 * 참고자료 : https://react.vlpt.us/basic/08-manage-input.html
 */
function SimpleInputState(){
    const [text, setText] = useState('');

    function onChange(e){
        setText(e.target.value);
    }

    const onReset = () =>{
        setText("");
    }

    return (
        <div className="section">
            <div className="sub_title">8. input 상태 관리하기(useState 사용)</div>
            <div className="discription">
                1. 텍스트박스에 입력한 값은 값: 에 그대로 타이핑된다. <br />
                2. 초기화를 클릭하면 입력값, 값: 에 작성된 데이터가 사라진다.
            </div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button> <br />
            <b>값 : {text}</b>
        </div>
    );
}

/**
 * 여러개의 input 관리
 * https://react.vlpt.us/basic/09-multiple-inputs.html
 */
 function MultiInputState(){
    const [inputs, setInputs] = useState({
        name: "",
        hobby : ""
    });
    
    const nameInput = useRef();
    const hobbyInput = useRef();
    const {name, hobby} = inputs;           // 비구조화 할당을 통한 값 추출

    function onChange(e){                   // name, hobby에 같은 이벤트를 호출하기 때문에 e는 문자입력한 input 객체를 가르킨다.
        const {name, value} = e.target;     // 우선 e.terget에서 name과 value를 추출
        setInputs({
            ...inputs,                  // (...은 spread문법) 기존의 input 객체를 복사한 뒤
            [name] : value,             // name키를 가진 값을 value로 설정
        });
    }

    const onReset = () =>{
        setInputs({
            name : "",
            hobby : ""
        });

        nameInput.current.focus();
    }

    function onFocus(){
        // hobbyInput.current.value = "abc";        // 이렇게하면 취미: 에는 글이 작성안된다.(변수 연동 안된다)
        setInputs({hobby: "취미에 자동 글 작성"});
        hobbyInput.current.focus();
    }

    return (
        <div className="section">
            <div className="sub_title">
                9. 여러개의 input 상태 관리하기 (useRef 사용) <br />
                10. useRef 로 특정 DOM 선택하기
            </div>
            <div className="discription">
                1. 텍스트박스에 입력한 값은 값: 에 그대로 타이핑된다. <br />
                2. 초기화를 클릭하면 입력값, 값: 에 작성된 데이터가 사라진다.
                3. useRef로 특정 DOM 제어하기 
            </div>
            
            <input
                name="name"
                placeholder='이름'
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="hobby"
                placeholder='취미'
                onChange={onChange}
                value={hobby}
                ref={hobbyInput}
            />
            <button onClick={onReset}>초기화</button>
            <button onClick={onFocus}>취미포커스 & 글쓰기</button><br />
            <b>이름 : {name}</b><br />
            <b>취미 : {hobby}</b>
        </div>
    );
}


function SampleButton(props) {
   
    return (
        <>
            <LeftMenu />
           
            <div className="content_wrap">
                {/* input 상태관리 */}
                <SimpleInputState />
                {/* 여러개의 input 관리 */}
                <MultiInputState />
            </div>
        </>
    );
}

export default SampleButton;