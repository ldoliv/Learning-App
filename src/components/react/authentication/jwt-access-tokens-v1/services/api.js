import {config} from "../config";

let apiMethods;

if (config.useAxios) {
	apiMethods = require('./axios/api').apiMethods;
} else {
	apiMethods = require('./fetch/api').apiMethods;
}

export {apiMethods};
