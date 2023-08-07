export const load = async ({ fetch, params, setHeaders }) => {
	const fetchCoffees = async (menuPage) => {
		const coffeesRes = await fetch(
			`https://mercury.pockethost.io/api/collections/${menuPage}/records?sort=order`
		);
		const coffeesData = await coffeesRes.json();
		return coffeesData.items;
	};

	setHeaders({
		'Cache-control': 'max-age=600'
	});

	return {
		streamed: {
			coffees: fetchCoffees(params.menuPage)
		}
	};
};
