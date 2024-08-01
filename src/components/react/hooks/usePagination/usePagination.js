
// Utility function to generate the range of page numbers
function generateRange(current = 0, length = 3, min = 0, max = 1000) {
	const half = Math.floor(length / 2);
	let start = Math.max(current - half, min);
	let end = start + (length - 1);

	if (end > max) {
		end = max;
		start = Math.max(end - (length - 1), min);
	}

	return Array.from({length: end - start + 1}, (_, i) => start + i);
}

// Custom hook for pagination logic
export function usePagination(current, total, length = 3) {
	const pageNumbers = generateRange(current, length, 0, total - 1);
	const showFirstButton = current > 0;
	const showLastButton = current < total - 1;
	// const showFirstButton = pageNumbers[0] > 0;
	// const showLastButton = pageNumbers[pageNumbers.length - 1] < total - 1;

	return {showFirstButton, showLastButton, pageNumbers};
}