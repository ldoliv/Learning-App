const env = process.env;
export const config = {
	localStoreKeys: {
		LOCAL_LEARNING_APP_TAGS: 'learning_app_tags',
		API_BASE_URL: (env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'http://localhost:5000',
	},
}

