
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const Item = (props) => {
  const {item, clickHandler} = props;
  return (
    <Grid item xs={12} sm={6} md={3} lg={12/5}>
      <Card sx={{
        mx: 'auto',
        border: '1px solid #dbdbdb'
      }}>
        <CardActionArea>
          <Box sx={{
            height: 250
          }}>
            <Typography sx={{
              pt: '4px',
              px: '4px'
            }}>
              {item.name}
            </Typography>
            <Divider/>
            <Typography sx={{
              pt: '4px',
              px: '4px'
            }}>
              {item.content}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export const List = (props) => {
  const {data, clickHandler} = props;
  return (
    <>
      <Grid container spacing={4}>
        {data.map(item => (
          <Item key={item.id} item={item} clickHandler={clickHandler}/>
        ))}
      </Grid>
    </>
  )
}