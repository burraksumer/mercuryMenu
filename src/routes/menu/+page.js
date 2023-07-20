export const load = async ({ fetch }) => {
	const fetchCollections = async () => {
		const collectionsRes = await fetch(
			'https://mercury.pockethost.io/api/collections/options/records?sort=order'
		);
		const collectionsData = await collectionsRes.json();
		return collectionsData.items;
	};

	return {
		headers: {
			'cache-control': 'public, max-age=3600'
		},
		collections: fetchCollections()
	};
};
