// src/utils/filterFunctions.js
export const applyFilters = (...filters) => {
	return (items) => {
		return filters.reduce((acc, filterFn) => acc.filter(filterFn), items);
	};
};
