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
            <div className="sub_title">input 상태관리(useState 사용)</div>
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

    return (
        <div className="section">
            <div className="sub_title">여거래 input 상태관리 (useRef 사용)</div>
            <div className="discription">
                1. 텍스트박스에 입력한 값은 값: 에 그대로 타이핑된다. <br />
                2. 초기화를 클릭하면 입력값, 값: 에 작성된 데이터가 사라진다.
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
            />
            <button onClick={onReset}>초기화</button><br />
            <b>이름 : {name}</b><br />
            <b>취미 : {hobby}</b>
        </div>
    );
}


function Sample_Button(props) {
   
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

export default Sample_Button;