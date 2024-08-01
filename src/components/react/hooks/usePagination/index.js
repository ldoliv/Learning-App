import React, {useState} from 'react';
import {usePagination} from './usePagination';
import {FaForwardStep, FaBackwardStep} from "react-icons/fa6";



export default function ShowcaseUsePagination() {

	const [current, setCurrent] = useState(0);
	const total = 5;
	const {showFirstButton, showLastButton, pageNumbers} = usePagination(current, total);


	function handleClick(page) {
		setCurrent(page);
	}

	return (
		<div style={{textAlign: 'center'}}>
			<nav className='d-inline-flex gap-2 align-items-center'>

				<button disabled={!showFirstButton} type='button' className='btn btn-warning btn-sm me-2' onClick={() => handleClick(0)}>
					<FaBackwardStep />
				</button>

				{pageNumbers.map((page) => {
					const active = page === current;
					const className = `btn btn-${active ? 'light' : 'warning'}${active ? ' active' : ''}`
					return (
						<button
							key={page}
							type='button'
							className={className}
							onClick={() => handleClick(page)}
							aria-current={page === current ? 'page' : undefined}
							aria-label={`Go to page ${page + 1}`}
						>
							{page + 1}
						</button>
					)
				})}

				<button disabled={!showLastButton} type='button' className='btn btn-warning btn-sm ms-2' onClick={() => handleClick(total - 1)}>
					<FaForwardStep />
				</button>

			</nav>
		</div>
	)
}
