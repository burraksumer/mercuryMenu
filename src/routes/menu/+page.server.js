export const load = async ({ fetch, setHeaders }) => {
	try {
		const fetchCollections = async () => {
			const collectionsRes = await fetch(
				'https://mercury.pockethost.io/api/collections/options/records?sort=order'
			);

			if (!collectionsRes.ok) {
				throw new Error(`Failed to fetch collections data. Status: ${collectionsRes.status}`);
			}

			const collectionsData = await collectionsRes.json();
			return collectionsData.items;
		};

		setHeaders({
			'Cache-control': 'max-age=60'
		});

		return {
			streamed: {
				collections: fetchCollections()
			}
		};
	} catch (error) {
		// Handle the error here
		return {
			redirect: '/error'
		};
	}
};
