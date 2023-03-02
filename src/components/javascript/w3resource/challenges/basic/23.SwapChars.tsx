import React from 'react'



const swapFirstLast = (str: string) => {
  
  const strArr = str.split('');
  const length = str.length;
  
  if (length > 1) {
    // const first = strArr[0]
    // strArr[0] = strArr[length - 1]
    // strArr[length - 1] = first

    // return strArr.join('')

    return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1)

  } else {
    return str;
  }
}

const Run = () => {

  const result = swapFirstLast('Python')

  return (
    <div>{result}</div>
  )
}

export default Run