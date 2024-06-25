import {config} from '../config';
import {useAxios} from '../services/axios/useAxios';
import {useFetch} from '../services/fetch/useFetch';


export const useApiMethods = () => {
	const fetchApiMethods = useFetch();
	const axiosApiMethods = useAxios();

	// return axiosApiMethods;

	if (config.useAxios) {
		return axiosApiMethods;
	} else {
		return fetchApiMethods;
	}

};


