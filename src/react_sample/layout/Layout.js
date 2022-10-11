import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';

import "./css/layout_common.css";

import Tiktactoe_main from '../reactjs/tiktactoe/Tiktactoe_main';
import Sample_RadioButton from '../nam24/html_component/Sample_RadioButton';
import Sample_CheckBox from '../nam24/html_component/Sample_CheckBox';
import Sample_InputBox from '../nam24/html_component/Sample_InputBox';
// import "./css/common_layout.css"
// import NotFound from './NotFound';

const SampleLayout = () => {
	return (
		<div className='container_wrap'>
			<BrowserRouter>
				<Header />
				<div className="main_wrap">
					<Routes>
						{/* 공식사이트 예제 */}
						<Route path="/reactjs/tiktactoe/Tiktactoe_main" element={<Tiktactoe_main />}></Route>

						{/* html 컴포넌트 제어 */}
						<Route path="/nam24/html_component/Sample_RadioButton" element={<Sample_RadioButton />}></Route>
						<Route path="/nam24/html_component/Sample_CheckBox" element={<Sample_CheckBox />}></Route>
						<Route path="/nam24/html_component/Sample_InputBox" element={<Sample_InputBox />}></Route>

						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default SampleLayout;