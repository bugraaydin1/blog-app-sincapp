/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "icon8.com",
				pathname: "/icon/**",
				port: "",
			},
		],
	},
};

export default nextConfig;
