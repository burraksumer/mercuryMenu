export const load = async ({ fetch, setHeaders }) => {
	const fetchCollections = async () => {
		const collectionsRes = await fetch(
			'https://mercury.pockethost.io/api/collections/options/records?sort=order'
		);
		const collectionsData = await collectionsRes.json();
		return collectionsData.items;
	};

	return {
		collections: fetchCollections()
	};
};
