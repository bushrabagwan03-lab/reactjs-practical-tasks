import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField
} from '@mui/material';

function Task62() {

  return (

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
      }}
    >

      <Card sx={{ width: 350 }}>

        <CardContent>

            

          <Typography
            variant="h4"
            gutterBottom
          >
            Material UI Example
          </Typography>

          <Typography
            variant="body1"
          >
            This UI is created using Material UI.
          </Typography>

          <TextField
  label="Enter Name"
  variant="outlined"
  fullWidth
  sx={{ marginTop: 2 }}
/>

          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Click Me
          </Button>

          

        </CardContent>

      </Card>

    </div>
  );
}

export default Task62;
