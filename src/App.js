import { useState } from 'react';
import Modal from '@mui/material/Modal';

import { useFetchMemo } from './hooks';
import { 
  Header,
  Body,
  Detail,
  Loading,
  List
} from './components';

function App() {
  const [open, setOpen] = useState(false)
  const {memos, loading} = useFetchMemo()
  const [memo, setMemo] = useState({})

  const closeHandler = () => setOpen(false)

  const clickHandler = (id) => {
    setMemo(memos.find(memo => memo.id === id))
    setOpen(true)
  }

  return (
    <>
      <Header/>
      <Body>
        <h2 style={{padding: '10px 0 20px'}}>メモ一覧</h2>
        {loading && <Loading/>}
        <List data={memos} clickHandler={clickHandler}/>
      </Body>
      <Modal open={open} onClose={closeHandler}>
        <Detail memo={memo}/>
      </Modal>
    </>
  );
}

export default App;
