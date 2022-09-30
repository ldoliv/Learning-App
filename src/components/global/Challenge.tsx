import React from 'react'

type IProps = {
	title: React.ReactNode,
	descp: React.ReactNode,
	result: React.ReactNode,
}

export default function Answer({title, descp, result}: IProps) {
	return (
	  <>
		<div className='mb-4'>
			<h2 className='mb-3'>{title}</h2>
			{descp}
			<p>----------------------------------------------------------</p>
			</div>
			<h3 className="mb-4">Results:</h3>
			<div>{result}</div>
	  </>
  )
}
