import React, {useState, useReducer} from 'react';
import LeftMenu from "../leftmenu/LeftMenu"


/**************** 7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기 *********************/
function Count_UseState(props){
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


/************ 20. useReducer 를 사용하여 상태 업데이트 로직 분리하기 ******************/

function reducer1(state, action){
    console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            if (state < 1){
                alert("더 차감할 수 없습니다.");
                return state;
            }else{
                return state -1
            }
            break;

        default:
            return state;
    }
}

function Count_UseReducer(props){
    const [number, dispatch1] = useReducer(reducer1, 0);

    const onIncrease = () => {
        dispatch1({type: 'INCREMENT'});
    }

    const onDecrease  = () => {
        dispatch1({type: 'DECREMENT'});
    }


    return (
        <div className="section">
            <div className="sub_title">20. useReducer 를 사용하여 상태 업데이트 로직 분리하기</div>
            <div className="discription">
                참고자료 : https://react.vlpt.us/basic/20-useReducer.html <br />
            </div>

            <div>
                <h1>{number}</h1>
                <button onClick={onDecrease}>-1</button>
                <button onClick={onIncrease}>+1</button>
            </div>
        </div>
        
    );
}

function CounterMain(props) {
  return (
    <>
        <LeftMenu />
    
        <div className="content_wrap">
            <Count_UseState  />

            <Count_UseReducer  />
        </div>
    </>
  )
  
}

export default CounterMain; 