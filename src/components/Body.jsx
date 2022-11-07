import Container from '@mui/material/Container'

export const Body = (props) => {
  const {children} = props
  return (
    <Container sx={{
      pt: 6
    }}>
      {children}
    </Container>
  )
}