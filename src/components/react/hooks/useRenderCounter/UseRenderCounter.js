import {useRef, useEffect} from "react";


export function useRenderCounter() {
  
  const ref = useRef()

  useEffect(() => {
    ref.current.textContent = Number(ref.current.textContent || '0') + 1;
    ref.current.style.backgroundColor = '#00e557';

    let timer = setTimeout(() => {
      ref.current.style.backgroundColor = '#fff';
    }, 150);

    return () => clearTimeout(timer)
  })
  
  return (
    <span
      ref={ref}
      style={{
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 4,
        padding: '1px 8px',
        fontSize: '0.8rem',
        margin: '0 6px',
        display: 'inline-block',
        minWidth: '30px',
        textAlign: 'center'
      }}
    />
  )
}