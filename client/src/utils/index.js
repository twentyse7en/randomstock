export const fetchRandomStock = async () => {
	const url = 'https://randomstocknse.herokuapp.com/api/random/';
	const resp = await fetch(url, {
		method: 'GET',
//		mode: 'cors'
	})
	return resp.json();
}
