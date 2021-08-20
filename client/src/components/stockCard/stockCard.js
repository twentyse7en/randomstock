import React, {useEffect, useState} from 'react';
import { fetchRandomStock } from '../../utils';
import './style.css';

const StockCard = () => {
	const [stockData, setStockData] = useState({});
	const updateStock = () => {
		const result = fetchRandomStock();
		result.then((res) => {
			setStockData({
				quote: res.name,
				lastPrice: res.last_price,
				change: Math.round(res.change*100)/100,
				pChange: Math.round(res.pchange*100)/100
			})
		})
	}

	useEffect(() => {
		updateStock();
	}, []);

	return (
		<div className='stock-card'>
			<h1> {stockData.quote} </h1>
			<p> {stockData.lastPrice} | {stockData.change} | {stockData.pChange}% </p>
			<button onClick={() => {updateStock()}} > RANDOM </button>
		</div>
	);
}

export default StockCard;
