import {useEffect, useState} from 'react';
import Stock from '../stock/stock';
import { fetchRandomStock } from '../../utils';
import loading from '../../assets/hourglass.gif';
import './style.css';

const StockCard = () => {

	const [stockData, setStockData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const updateStockHandler = async () => {
	  setIsLoading(true);
	try {
		const result = await fetchRandomStock();
		setStockData({
			quote: result.name,
			lastPrice: result.last_price,
			change: result.change,
			pChange: result.pchange
		})
	}
	catch (error) {
		setError(error.message);
	}
	  setIsLoading(false);
	}

	useEffect(() => {
	  updateStockHandler();
	}, []);

	let content;
	if (isLoading) {
		content = <img src={loading} alt="hourglass"/>;
	} else if (!isLoading && !error) {
		content = <Stock value={stockData} updateHandler={updateStockHandler}/>;
	} else if (!isLoading && error) {
		content = <p> {error} </p>
	}

	return (
		<div className='stock-card'>
			{content}
		</div>
	);
}

export default StockCard;
