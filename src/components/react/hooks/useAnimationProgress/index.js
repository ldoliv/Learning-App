import React from 'react'
import './style.css';
import useAnimationProgress from './useAnimationProgress';


export default function ShowcaseUseAnimationProgress() {
	const [progress, setLoaderRef] = useAnimationProgress();

	console.log(progress);

	return (
		<div className="animProg">
			<div className="wrapper">
				<div className="Loader" ref={(node) => setLoaderRef(node, '::before')}></div>
			</div>
		</div>
	)
}


// export {useAnimationProgress as default} from './useAnimationProgress';