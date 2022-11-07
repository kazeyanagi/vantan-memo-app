import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <AppBar>
      <Typography
        variant="h1"
        sx={{
          fontSize: 32,
          px: 2
        }}
      >
        メモ アプリ
      </Typography>
    </AppBar>
  )
}