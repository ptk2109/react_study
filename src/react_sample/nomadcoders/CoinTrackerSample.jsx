import React, { useState } from 'react';
import { useEffect } from 'react';
import LeftMenu from "./leftmenu/LeftMenu"




/**
 * 기본 컨포넌트
 */
function Base() {
	const [isLoading, setIsLoading] = useState(false);
	const [coins, setConins] = useState([]);

	useEffect( () => {

		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setConins(json);
				setIsLoading(true);
			}
		);



	}, []);

	return (
		<>
			<LeftMenu />

			<div className="content_wrap">
			<div className="section">
				<div className="sub_title">코인 트래커</div>
				<div className="discription">
					<b>[기능설명]</b> <br />
					- ajax로 모든 코인 정보 불러와서 출력한다.
				</div>

				<h1>The Coin! ({coins.length.toLocaleString()})</h1>
				
				{
					isLoading ? 
						<table border={'1'}>
							<tr>
								<td>번호</td>
								<td>랭크</td>
								<td>코인이름</td>
								<td>USD</td>
							</tr>
							{coins.map( 
								(_coin, _idx) => (
									<tr>
										<td>{_idx+1}</td>
										<td>{_coin.rank}</td>
										<td>{_coin.name}</td>
										<td>{_coin.quotes.USD.price}</td>
									</tr>
								) 
							) }
							</table>
					: "Loading..."
				}
			</div>
		</div>
		</>
	)

}

export default Base; 