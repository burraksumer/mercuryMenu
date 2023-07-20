export const load = async ({ fetch, setHeaders }) => {
	const fetchCollections = async () => {
		const collectionsRes = await fetch(
			'https://mercury.pockethost.io/api/collections/options/records?sort=order'
		);
		setHeaders({
			'cache-control': 'max-age=3600'
		});
		const collectionsData = await collectionsRes.json();
		return collectionsData.items;
	};

	return {
		collections: fetchCollections()
	};
};
