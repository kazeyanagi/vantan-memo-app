export const Modal = (props) => {
  const {open, closeHandler, children} = props;
  const clickHandler = (e) => {
    if (e.target === e.currentTarget) closeHandler();
  }
  return (
    <>
      {open && (
        <div onClick={clickHandler} style={{position: 'fixed', display: 'flex', alignItems: 'center', justifyContent: 'center', top: 0, left: 0, width: '100vw', height: '100vh', background: '#11111160'}}>
          <div >
            {children}
          </div>
        </div>
      )}
    </>
  )
}