const env = process.env;
export const config = {
	API_BASE_URL: (env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'http://localhost:5000',
	localStoreKeys: {
		LOCAL_LEARNING_APP_TAGS: 'learning_app_tags',
	},
}

