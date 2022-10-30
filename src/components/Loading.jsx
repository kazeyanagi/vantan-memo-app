import { useState, useEffect } from 'react' 

export const Loading = () => {
  const [count, setCount] = useState(0) 
  
  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => (prev+1) % 4)
    }, 500)

    return () => {clearInterval(id)}
  }, [])

  return (
    <p style={{fontSize: '16px', fontWeight: 700, textAlign: 'center', paddingTop: '40px'}}>
      ろーでぃんぐ
      {[...(new Array(count))].map((item, idx) => (
        <span key={idx} style={{padding: '0 4px'}}>.</span>
      ))}
    </p>
  )
}