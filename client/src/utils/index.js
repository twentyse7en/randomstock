const DEV = 'http://localhost:8000/api/'
const PROD = 'https//randomstocknse.herokuapp.com/'

export const fetchRandomStock = async () => {
	const endpoint = 'api/random/'
	const resp = await fetch(endpoint, {
		method: 'GET',
	})
	if(!resp.ok) {
		throw new Error('Something went wrong!');
	}
	return resp.json();
}
