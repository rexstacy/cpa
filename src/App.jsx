
import { Paper } from "@mui/material";
import Gallery from "./gallery";

import ReactPlayer from "react-player";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ResponsivePlayer from "./ResponsivePlayer";

export default function App() {
  return(
    <>
      <h1>App</h1>
      <Grid2 container display="flex" justifyContent="center" alignItems="center">
        <ReactPlayer url="https://www.youtube.com/watch?v=kjn9gro0g2w" controls width='90%' ></ReactPlayer>
       
        <Paper elevation={5} >
          
          <Gallery />
        </Paper>

      </Grid2>
    </>
  )
}