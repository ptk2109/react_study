import React, { useState } from 'react';
import LeftMenu from "./leftmenu/LeftMenu"


/**
 * 분/시간 변환 컴포넌트
 */
function MinutesToHours(){
	const [amount, setAmount] = useState();
	const [fliped, setFliped] = useState(false);


	const onChangeAmount = (event) => {
		setAmount(event.target.value);
	}

	const onFlip = () => {
		onReset();
		setFliped( (current) => !current);
	}


	const onReset = () => setAmount(0);

	return (
		<>
			<div>
				<label>
					<span style={{ width: "60px", display: 'inline-block' }}>Minutes</span>
					<input placeholder='Minutes' type="number" disabled={fliped} value={fliped ? amount * 60 : amount} onChange={onChangeAmount} />
				</label>
			</div>

			<div>
				<label>
					<span style={{ width: "60px", display: 'inline-block' }}>Hours</span>
					<input placeholder='Hours' type="number" disabled={!fliped} value={!fliped ? Math.round(amount / 60) : amount} onChange={onChangeAmount} />
				</label>
			</div>


			<div>
				<button onClick={onReset}>Reset</button>
				<button onClick={onFlip}>Flip</button>
			</div>
		</>
	);
}


/**
 * km/mile 변환 컴포넌트
 */
function KmToMiles(){
	const [amount, setAmount] = useState();
	const [fliped, setFliped] = useState(false);


	const onChangeAmount = (event) => {
		setAmount(event.target.value);
	}

	const onFlip = () => {
		onReset();
		setFliped( (current) => !current);
	}


	const onReset = () => setAmount(0);

	return (
		<>
			<div>
				<label>
					<span style={{ width: "60px", display: 'inline-block' }}>Km</span>
					<input placeholder='Km' type="number" disabled={fliped} value={fliped ? amount * 1.609344 : amount} onChange={onChangeAmount} />
				</label>
			</div>

			<div>
				<label>
					<span style={{ width: "60px", display: 'inline-block' }}>Miles</span>
					<input placeholder='Miles' type="number" disabled={!fliped} value={!fliped ? (amount / 1.609344).toFixed(10) : amount} onChange={onChangeAmount} />
				</label>
			</div>


			<div>
				<button onClick={onReset}>Reset</button>
				<button onClick={onFlip}>Flip</button>
			</div>
		</>
	);
}


/**
 * 기본 컨포넌트
 */
function Base(props) {

	const [index, setIndex] = useState("xx");

	const onSelect = (event) => {
		setIndex(event.target.value);
	}
	
	return (
		<>
			<LeftMenu />

			<div className="content_wrap">
				<div className="section">
					<div className="sub_title">Super Converter</div>
					<div className="discription">
						<b>[학습목표]</b>
						- state를 사용할 수 있다. <br />
						- state로 prop 흉내내본다.<br />
					</div>


					<select value={index} onChange={onSelect}>
						<option value="xx">::선택::</option>
						<option value="0">Minute & Hour</option>
						<option value="1">Km & Mile</option>
					</select>

					<hr />

					{index === "xx" ? "선택해주세요" : null}
					{index === "0" ? <MinutesToHours /> : null}
					{index === "1" ? <KmToMiles /> : null}

					
				</div>
			</div>
		</>
	)

}

export default Base; 