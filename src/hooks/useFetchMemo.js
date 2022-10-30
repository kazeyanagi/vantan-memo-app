import {useState, useEffect} from 'react'

export const useFetchMemo = () => {
  const [loading, setLoading] = useState(true)
  const [memos, setMemos] = useState([])
  
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3001/memos')
        .then(res => res.json())
        .then(data => {
          setMemos(data)
          setLoading(false)
        })

    }, 3000)
  }, [])

  return {loading, memos}
}