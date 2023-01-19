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
import HSampleInputBox from '../nam24/html_component/SampleInputBox';

/* 벨로퍼트 */
import PropsSample from '../vlpt/05_props/PropsSample';
import SampleInputBox from '../vlpt/08_input_state/SampleInputBox';
import Counter from '../vlpt/07_counter/Counter';
import ArraySample from '../vlpt/11_array/ArraySample';
import TodoListApp from '../vlpt/todo_list/App';
import ApiSyncUsers from '../vlpt/part4_api_sync/Users';

/* 노마드코더 */
import SuperConverter from '../nomadcoders/SuperConverter';
import PropSample from '../nomadcoders/PropSample';
import EffectSample from '../nomadcoders/EffectSample';

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
						<Route path="/nam24/html_component/SampleInputBox" element={<HSampleInputBox />}></Route>

						{/* 벨로퍼트 */}
						<Route path="/vlpt/PropsSample" element={<PropsSample />}></Route>
						<Route path="/vlpt/SampleInputBox" element={<SampleInputBox />}></Route>
						<Route path="/vlpt/Counter" element={<Counter />}></Route>
						<Route path="/vlpt/ArraySample" element={<ArraySample />}></Route>
						<Route path="/vlpt/TodoListApp" element={<TodoListApp />}></Route>
						<Route path="/vlpt/ApiSyncUsers" element={<ApiSyncUsers />}></Route>

						{/* 노마드코더 */}
						<Route path="/nomadcoders/SuperConverter" element={<SuperConverter />}></Route>
						<Route path="/nomadcoders/PropSample" element={<PropSample />}></Route>
						<Route path="/nomadcoders/EffectSample" element={<EffectSample />}></Route>

						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default SampleLayout;