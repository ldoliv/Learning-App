import {config} from 'config';


const localKeys = config.localStoreKeys;
const {LOCAL_LEARNING_APP_TAGS} = localKeys;



const getLocalStore = (key) => {
	return JSON.parse(localStorage.getItem(key));
}
const setLocalStore = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
}

const removeLocalStore = (key) => {
	localStorage.removeItem(key);
}

const deleteStore = () => {
	Object.keys(localKeys).forEach(key => removeLocalStore(localKeys[key]));
}

// -------------------------------------------------------------------------

const getLearningTags = () => {
	return getLocalStore(LOCAL_LEARNING_APP_TAGS) || [];
}

const setLearningTags = (tags) => {
	setLocalStore(LOCAL_LEARNING_APP_TAGS, tags);
}

// -------------------------------------------------------------------------



export const store = {
	getLearningTags,
	setLearningTags
}
