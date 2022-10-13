import React from 'react';
import LeftMenu from "../leftmenu/LeftMenu"

function Hello(props){
    return (
        <div className="section">
            <div className="sub_title">props를 이용한 컨포넌트에 값 전달하기</div>
            <div className="discription">
                값을 한 개만 전달해본다.
            </div>

            <div>결과 : 안녕하세요. {props.name}</div>
        </div>
        
    );
}


function MultiHello(props){
    return (
        <div className="section">
            <div className="sub_title">여러개의 props, 비구조화 할당</div>
            <div className="discription">
                여러개의 값을 전달해본다.<br />
                props.color {'<='}  이런식으로 사용
            </div>

            <span>
                <span style={{color: props.color}}>
                    결과 : 안녕하세요. {props.name}
                </span>
            </span>
        </div>
        
    );
}


function MultiHello2({name, color, isSpecial}){
    return (
        <div className="section">
            <div className="sub_title">여러개의 props, 비구조화 할당2</div>
            <div className="discription">
                여러개의 값을 전달해본다.<br />
                props 아닌 {'{'}name, color{'}'} 사용할수도 있다. <br />
                defaultProps를 사용할 수도 있다. (name값 없으면 이름없음으로 출력) <br />
                HTML 중간에 프로그램도 할 수 있다. (isSpecial 없으면 * 앞에 붙였음)
            </div>
            
            <span>
                결과 : 
                <span style={{color: color}}>
                { isSpecial ? <b>* </b> : null }
                안녕하세요. {name}
                </span>
            </span>
        </div>
        
    );
}
MultiHello2.defaultProps = {
    name: '이름없음'
}

function Base(props) {
  return (
    <>
        <LeftMenu />
    
        <div className="content_wrap">
            <Hello name="react" />
            <MultiHello name="react" color="red" />
            <MultiHello2 name="react" color="blue" />
            <MultiHello2  color="blue" isSpecial={true}/>
        </div>
    </>
  )
  
}

export default Base; 