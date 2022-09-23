import AutocompletionSimple from './main-components/Simple';
import AutocompletionWithHook from './main-components/WithHook';



export function Autocompletion() {

	return (
		<>
			<div className='mb-5'>
				<AutocompletionSimple />
			</div>
			<div className=''>
				<AutocompletionWithHook />
			</div>
		</>
	)
}


