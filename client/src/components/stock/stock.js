import { useState, useEffect } from 'react';
import './style.css';

const Stock = ({value, updateHandler}) => {
	const [status, setStatus] = useState();
	const {quote, lastPrice, change, pChange } = value;
	useEffect(() => {
		if(change >= 0) {
			setStatus("up");
		}
		else {
			setStatus("down");
		}
	}, [value])

	return (
		<div className='stock'>
			<header>
				Random Stock Picker
			</header>
			<div className="stock-info">
				<div className="price-info">
					<div className="current-price"> <i class="fas fa-rupee-sign" /> {lastPrice} </div>
					<div className={`price-change ${status}`}>
						<i className={`fas fa-arrow-circle-${status}`} /> {change} ({pChange}%)
					</div>
				</div>
				<div className="company-name"> {quote} </div>
			</div>
			<button onClick={updateHandler} > Refresh </button>
		</div>
	);
}

export default Stock;
