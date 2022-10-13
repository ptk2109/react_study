import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';

import "./css/layout_common.css";

/* 공식사이트 예제 */
import TiktactoeMain from '../reactjs/tiktactoe/TiktactoeMain';

/* html 컴포넌트 제어 */
import SampleButton from '../nam24/html_component/SampleButton';
import SampleRadioButton from '../nam24/html_component/SampleRadioButton';
import SampleCheckBox from '../nam24/html_component/SampleCheckBox';
import H_SampleInputBox from '../nam24/html_component/SampleInputBox';

/* 벨로퍼트 */
import PropsSample from '../vlpt/05_props/PropsSample';
import SampleInputBox from '../vlpt/08_input_state/SampleInputBox';


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
						<Route path="/reactjs/tiktactoe/TiktactoeMain" element={<TiktactoeMain />}></Route>

						{/* html 컴포넌트 제어 */}
						<Route path="/nam24/html_component/SampleButton" element={<SampleButton />}></Route>
						<Route path="/nam24/html_component/SampleRadioButton" element={<SampleRadioButton />}></Route>
						<Route path="/nam24/html_component/SampleCheckBox" element={<SampleCheckBox />}></Route>
						<Route path="/nam24/html_component/SampleInputBox" element={<H_SampleInputBox />}></Route>

						{/* 벨로퍼트 */}
						<Route path="/vlpt/PropsSample" element={<PropsSample />}></Route>
						<Route path="/vlpt/SampleInputBox" element={<SampleInputBox />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default SampleLayout;