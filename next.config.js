/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'utils', 'component', 'layouts', 'services'],
	},
}

module.exports = nextConfig
