import React from 'react'



const RemoveCharAt = () => {

  const pos = 1
  const str = 'Python'

  // option 1
  const result = str.slice(0, pos) + str.slice(pos + 1)
  
  // options 2
  // const result = str.split('').filter((char, index) => index !== pos).join('')

  return (
    <div>{result}</div>
  )
}

export default RemoveCharAt