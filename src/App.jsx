
import { Paper } from "@mui/material";
import Gallery from "./gallery";

export default function App() {
  return(
    <>
      <h1>App</h1>
      <Paper elevation={5} >

        <Gallery />
      </Paper>
    </>
  )
}