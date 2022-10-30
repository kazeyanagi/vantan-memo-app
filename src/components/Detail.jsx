export const Detail = (props) => {
  const {memo} = props
  return (
    <div style={{margin: '0 auto', background: '#fff',border: '1px solid #dbdbdb', width: '400px', height: '500px'}}>
      <h3 style={{padding: '4px 4px 0'}}>{memo?.name}</h3>
      <hr/>
      <p style={{padding: '4px 4px 0'}}>{memo?.content}</p>

    </div>
  )
}