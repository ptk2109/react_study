import React, {useState} from 'react';
import LeftMenu from "../leftmenu/LeftMenu"



function Count1(props){
    const [num, setNum] = useState(0);

    function onCount(e){
        let n = parseInt( e.target.value );
        let result = num + n;
        if (result < 0){
            alert("더 차감할 수 없습니다.");
        }else{
            setNum(result);
        }
    }

    return (
        <div className="section">
            <div className="sub_title">7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기</div>
            <div className="discription">
                참고자료 : https://react.vlpt.us/basic/07-useState.html <br />
            </div>

            <div>
                <h1>{num}</h1>
                <button onClick={onCount} value="-1">-1</button>
                <button onClick={onCount} value="1">+1</button>
            </div>
        </div>
        
    );
}

function CounterMain(props) {
  return (
    <>
        <LeftMenu />
    
        <div className="content_wrap">
            <Count1  />
        </div>
    </>
  )
  
}

export default CounterMain; 