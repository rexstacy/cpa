
import { Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ReactPlayer from "react-player";
import Gallery from "../gallery";

export default function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <Grid2 container display="flex" justifyContent="center" alignItems="center">
            <ReactPlayer url="https://www.youtube.com/watch?v=kjn9gro0g2w" controls width='90%' ></ReactPlayer>
        
            <Paper elevation={5} >
            
            <Gallery />
            </Paper>

        </Grid2>

        </>

    )
}