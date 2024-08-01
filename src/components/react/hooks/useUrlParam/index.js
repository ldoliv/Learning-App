import {InputFilter} from "./components/InputFilter";
import {useUrlParam} from "./useUrlParam";



export default function ShowcaseUseUrlParam() {

	const [textFilter, setTextFilter] = useUrlParam('search');


	const handleSearch = (text) => {
		setTextFilter(text);
	};

	return (
		<div className="">
			<InputFilter onSearch={handleSearch} text={textFilter} />
		</div>
	)
}
