import React, { useState } from 'react';
import LeftMenu from "./leftmenu/LeftMenu"


function Base(props) {

	const [minutes, setMinutes] = useState();

	const onChangeMinutes = (event) => {
		setMinutes(event.target.value);
	}

	const onReset = () => setMinutes(0);
	return (
		<>
			<LeftMenu />

			<div className="content_wrap">
				<div className="section">
					<div className="sub_title">Super Converter</div>
					<div className="discription">
						- Minutes 입력하면 시간으로 변환하여 Hours에 출력 <br />
					</div>

					<div>
						<label>
							<span style={{ width: "60px", display: 'inline-block' }}>Minutes</span>
							<input placeholder='Minutes' type="number" value={minutes} onChange={onChangeMinutes} />
						</label>
					</div>

					<div>
						<label>
							<span style={{ width: "60px", display: 'inline-block' }}>Hours</span>
							<input placeholder='Hours' type="number" value={Math.round(minutes / 60)} />
						</label>
					</div>


					<div>
						<button onClick={onReset}>Reset</button>
					</div>
				</div>
			</div>
		</>
	)

}

export default Base; 