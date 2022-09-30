import React from 'react';


export function useRenderCounter() {
  
  const ref = React.useRef()

  React.useEffect(() => {
    ref.current.textContent = Number(ref.current.textContent || '0') + 1
  })
  
  return (
    <span
      style={{
        backgroundColor: '#ccc',
        color: '#000',
        borderRadius: 4,
        padding: '2px 4px',
        fontSize: '0.8rem',
        margin: '0 6px',
        display: 'inline-block',
      }}
      ref={ref}
    />
  )
}


