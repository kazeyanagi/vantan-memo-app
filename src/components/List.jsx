const Item = (props) => {
  const {item, clickHandler} = props;
  return (
    <button style={{border: '1px solid #dbdbdb', margin: '0 auto'}} onClick={() => clickHandler(item.id)}>
      <div style={{width: '200px', height: '250px', background: '#fff'}}>
        <p style={{padding: '4px 4px 0'}}>{item.name}</p>
        <hr/>
        <p style={{padding: '4px 4px 0'}}>{item.content}</p>
      </div>
    </button>
  )
}

export const List = (props) => {
  const {data, clickHandler} = props;
  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', flexWrap: 'wrap'}}>
        {data.map(item => (
          <Item key={item.id} item={item} clickHandler={clickHandler}/>
        ))}
      </div>
    </>
  )
}