// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	experimental: {
		browsersListForSwc: true,
		legacyBrowsers: false,
	},
}

export default nextConfig
