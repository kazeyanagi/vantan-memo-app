import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export const Detail = (props) => {
  const {memo} = props
  return (
    <Card sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      height: 500,
      border: '1px solid #dbdbdb'
    }}>
      <Typography variant="h3" sx={{
        fontSize: 20,
        fontWeight: 700,
        pt: '4px',
        px: '4px'
      }}>
        {memo.name}
      </Typography>
      <Divider/>
      <Typography sx={{
        pt: '4px',
        px: '4px'
      }}>
        {memo.content}
      </Typography>

    </Card>
  )
}