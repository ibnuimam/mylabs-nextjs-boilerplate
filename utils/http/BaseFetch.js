export async function BaseFetch(path, options, ctx, host) {
	const url = host ? host + path : process.env.API_HOST + path
	const { headers, ...otherOptions } = options
	return fetch(url, {
		headers: {
			...headers,
		},
		...otherOptions,
	})
		.then(async (r) => {
			let result
			try {
				result = await r.json()
			} catch (e) {
				result = {}
			}
			return result
		})
		.catch((e) => {
			console.error(e)
		})
}
