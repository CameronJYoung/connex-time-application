const config = {
	apiUrl: import.meta.env.VITE_API_URL as string || 'http://localhost:8080',
	apiToken: import.meta.env.VITE_API_TOKEN as string || 'mysecrettoken',
};

export default config;
