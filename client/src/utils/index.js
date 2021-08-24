const DEV = 'http://localhost:8000/api/'
const PROD = 'https//randomstocknse.herokuapp.com/api/'

export const fetchRandomStock = async () => {
	const endpoint = 'random/'
	const resp = await fetch(DEV+endpoint, {
		method: 'GET',
	})
	if(!resp.ok) {
		throw new Error('Something went wrong!');
	}
	return resp.json();
}
