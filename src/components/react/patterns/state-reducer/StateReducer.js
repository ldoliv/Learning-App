import ToggleSimple from "./components/ToggleSimple";
import ToggleBetter from "./components/ToggleBetter";
import InversionControl from "./components/InversionControl";

/*
	https://www.youtube.com/watch?v=WV0UUcSPk-0
	https://codesandbox.io/s/simply-react-accordion-lvg59
	https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks
*/

export function StateReducerPattern() {

	return (
		<div className="text-center">
			<div className="mb-5">
				<div className="mb-3">Simple</div>
				<ToggleSimple />
			</div>
			<div className="mb-5">
				<div className="mb-3">Limited to 4 changes</div>
				<ToggleBetter />
			</div>

			<div className="mb-5">
				<div className="mb-3">Inversion of control</div>
				<InversionControl />
			</div>

		</div>
	)
}