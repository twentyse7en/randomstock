const DEV = 'http://localhost:8000/'

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
