export const load = async ({ fetch, params, setHeaders }) => {
	try {
		const fetchCoffees = async (menuPage) => {
			const coffeesRes = await fetch(
				`https://mercury.pockethost.io/api/collections/${menuPage}/records?sort=order`
			);

			if (!coffeesRes.ok) {
				throw new Error(`Failed to fetch coffee data. Status: ${coffeesRes.status}`);
			}

			const coffeesData = await coffeesRes.json();
			return coffeesData.items;
		};

		setHeaders({
			'Cache-control': 'max-age=600'
		});

		const coffees = await fetchCoffees(params.menuPage);

		return {
			streamed: {
				coffees
			}
		};
	} catch (error) {
		// Handle the error here
		console.error('An error occurred:', error.message);
		return {
			redirect: '/error'
		};
	}
};
