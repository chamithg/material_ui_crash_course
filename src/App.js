import "./App.css";
import {
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Button,
  ButtonGroup,
  Toolbar,
  Container,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Albam</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            Photo Albam
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph>
            Hello, this is a sample photo album made with material ui. This
            framework is really interesting.
          </Typography>
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary">
                  See my photos
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </>
  );
}

export default App;
