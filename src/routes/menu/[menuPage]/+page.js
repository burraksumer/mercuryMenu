export const load = async ({ fetch, params }) => {
	const fetchCoffees = async (menuPage) => {
		const coffeesRes = await fetch(
			`https://mercury.pockethost.io/api/collections/${menuPage}/records?sort=order`
		);
		const coffeesData = await coffeesRes.json();
		setHeaders({
			'cache-control': 'max-age=3600'
		});
		return coffeesData.items;
	};

	return {
		coffees: fetchCoffees(params.menuPage)
	};
};
